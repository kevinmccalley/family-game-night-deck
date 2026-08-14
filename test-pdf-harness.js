// Node-only smoke test, no browser. Verifies the content bank's structure
// against the locked 52-card architecture, then loads the REAL app.js
// (guarded so it's safe without `document`) to generate an actual PDF
// using its real drawing functions — not a duplicated copy of the logic —
// and checks page counts. Run: node test-pdf-harness.js
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { jsPDF } = require("jspdf");

const DIR = __dirname;

let failures = 0;
function check(cond, msg) {
  if (!cond) { failures++; console.log("FAIL: " + msg); } else { console.log("OK: " + msg); }
}

// --- Load data.js and app.js into one shared sandbox ----------------------
// `document` is deliberately left undefined — app.js guards its DOM-only
// top-level code with `typeof document !== "undefined"` specifically so
// this works without a browser.
const sandbox = { console };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(DIR, "data.js"), "utf8"), sandbox, { filename: "data.js" });
vm.runInContext(fs.readFileSync(path.join(DIR, "app.js"), "utf8"), sandbox, { filename: "app.js" });

const FAMILY_GAME_DATA = vm.runInContext("FAMILY_GAME_DATA", sandbox);
const buildDeck = vm.runInContext("buildDeck", sandbox);
const drawDeckCard = vm.runInContext("drawDeckCard", sandbox);
const CARDS_PER_PAGE = vm.runInContext("CARDS_PER_PAGE", sandbox);
const slotXY = vm.runInContext("slotXY", sandbox);
const drawInstructionsPage = vm.runInContext("drawInstructionsPage", sandbox);
const drawCardBackPage = vm.runInContext("drawCardBackPage", sandbox);
const BACK_COLORS = vm.runInContext("BACK_COLORS", sandbox);
const BACK_PATTERNS = vm.runInContext("BACK_PATTERNS", sandbox);
const BACK_PATTERN_DRAW = vm.runInContext("BACK_PATTERN_DRAW", sandbox);

// --- 0. Card-back customization system is fully ported (parity check) -----
check(BACK_COLORS.length === 5, `5 back colors available (got ${BACK_COLORS.length})`);
check(BACK_PATTERNS.length === 10, `10 back patterns available (got ${BACK_PATTERNS.length})`);
check(BACK_PATTERNS.every((p) => typeof BACK_PATTERN_DRAW[p.id] === "function"), "every listed pattern has a matching draw function");

// --- 1. Content-bank structure matches the locked architecture ------------
check(FAMILY_GAME_DATA.promptCategories.length === 5, `5 prompt categories (got ${FAMILY_GAME_DATA.promptCategories.length})`);
check(FAMILY_GAME_DATA.prompts.length === 50, `50 prompt cards (got ${FAMILY_GAME_DATA.prompts.length})`);
check(!!FAMILY_GAME_DATA.howToPlay && !!FAMILY_GAME_DATA.howToPlay.title && !!FAMILY_GAME_DATA.howToPlay.body, "how-to-play card has a title and body");

FAMILY_GAME_DATA.promptCategories.forEach((cat) => {
  const count = FAMILY_GAME_DATA.prompts.filter((p) => p.category === cat.id).length;
  check(count === 10, `category "${cat.id}" has exactly 10 prompt cards (got ${count})`);
});

// every prompt's category must actually exist in promptCategories (catches typos)
const validCatIds = new Set(FAMILY_GAME_DATA.promptCategories.map((c) => c.id));
const orphanPrompts = FAMILY_GAME_DATA.prompts.filter((p) => !validCatIds.has(p.category));
check(orphanPrompts.length === 0, `no prompt cards reference an unknown category (found ${orphanPrompts.length})`);

// every id must be unique (catches copy-paste id collisions)
const allIds = FAMILY_GAME_DATA.prompts.map((c) => c.id);
check(new Set(allIds).size === allIds.length, `all ${allIds.length} prompt card ids are unique (no duplicates)`);

// no empty required fields anywhere in the bank
const emptyFields = FAMILY_GAME_DATA.prompts.filter((c) => !c.text).map((c) => c.id);
check(emptyFields.length === 0, `no prompt cards have empty text (found: ${emptyFields.join(", ") || "none"})`);

// --- 2. buildDeck() produces exactly 52 cards in the expected shape -------
// Set the sandbox's module-level buyerName before calling buildDeck, same
// as the real form handler would.
vm.runInContext('buyerName = "Test Family";', sandbox);
const deck = vm.runInContext("buildDeck()", sandbox);
check(deck.length === 52, `buildDeck() returns exactly 52 cards (got ${deck.length})`);
const typeCounts = deck.reduce((acc, c) => { acc[c.type] = (acc[c.type] || 0) + 1; return acc; }, {});
check(typeCounts.cover === 1, `exactly 1 cover card (got ${typeCounts.cover || 0})`);
check(typeCounts.howtoplay === 1, `exactly 1 how-to-play card (got ${typeCounts.howtoplay || 0})`);
check(typeCounts.prompt === 50, `exactly 50 prompt cards in the built deck (got ${typeCounts.prompt || 0})`);

// --- 3. Real PDF generation using the actual app.js drawing functions -----
// Helvetica stands in for Poppins (not loaded here) — wider per-char, so
// this is a conservative proxy per the same convention every other
// GoodStockPress harness uses; real text-fit is confirmed with Poppins in
// the browser pass, this just catches gross overflow/crash bugs early.
const chosenColor = BACK_COLORS.find((c) => c.id === "navy");
vm.runInContext(`ACCENT = ${JSON.stringify(chosenColor.rgb)};`, sandbox);

const pdfDoc = new jsPDF({ unit: "in", format: "letter" });
pdfDoc.setFont("helvetica", "normal");
// jsPDF doesn't have a "Poppins" font loaded in this harness — patch the
// doc's setFont so app.js's `doc.setFont("Poppins", ...)` calls silently
// fall back to helvetica instead of throwing.
const realSetFont = pdfDoc.setFont.bind(pdfDoc);
pdfDoc.setFont = (family, style) => realSetFont(family === "Poppins" ? "helvetica" : family, style === "bold" ? "bold" : "normal");

// --- Worst-case text containment for the how-to-play card and every prompt
// card ------------------------------------------------------------------
// Regression test for the exact bug class Kevin's standing shop-wide PDF-
// wrapping audit exists to catch (found first on Wedding Party Cards, then
// again on Habit-Builder's cover card): any text element that could run
// off the card if its shrink-to-fit safety net were removed or misapplied.
const fitParagraph = vm.runInContext("fitParagraph", sandbox);
const CARD_W_T = vm.runInContext("CARD_W", sandbox);
const CARD_H_T = vm.runInContext("CARD_H", sandbox);

{
  const inset = 0.28;
  const bodyTop = 0.85;
  const bodyMaxHeight = (CARD_H_T - 0.34) - bodyTop;
  const { size } = fitParagraph(pdfDoc, FAMILY_GAME_DATA.howToPlay.body, CARD_W_T - inset * 2, bodyMaxHeight, 9, 6.5, 1.45);
  check(size >= 7.5, `how-to-play card body fits at readable size (shrank to ${size}pt, floor is 7.5pt)`);
}

FAMILY_GAME_DATA.prompts.forEach((card) => {
  const inset = 0.3;
  const bodyTop = 0.56;
  const bodyMaxHeight = (CARD_H_T - 0.34) - bodyTop;
  const { size } = fitParagraph(pdfDoc, card.text, CARD_W_T - inset * 2, bodyMaxHeight, 13.5, 8, 1.4, "bold");
  check(size >= 8, `prompt card "${card.id}" fits at readable size (shrank to ${size}pt, floor is 8pt) — "${card.text.slice(0, 40)}..."`);
});

// --- Cover card name never overflows the card width -----------------------
// Same regression pattern as every other GoodStockPress deck: checks every
// wrapped line actually fits within the card's printable width for a range
// of realistic and edge-case buyer-entered family/group names.
const coverTitleInset = 0.32;
const coverMaxWidth = CARD_W_T - coverTitleInset * 2;
["The Martinez Family", "Alexandria", "The Bartholomew-Christopherson Family", "Sam", "The O'Sullivan-Fitzgerald Crew"].forEach((name) => {
  const title = `${name}'s Game Night`;
  pdfDoc.setFont("helvetica", "bold");
  const { size, lines } = fitParagraph(pdfDoc, title, coverMaxWidth, 1.8, 22, 11, 1.3, "bold");
  pdfDoc.setFontSize(size);
  const overflowLine = lines.find((line) => pdfDoc.getTextWidth(line) > coverMaxWidth + 0.01);
  check(!overflowLine, overflowLine
    ? `cover card title for "${name}" stays within card width (line "${overflowLine}" would overflow)`
    : `cover card title for "${name}" stays within card width`);
});

let drawError = null;
try {
  drawInstructionsPage(pdfDoc, "Test Family");
  pdfDoc.addPage();
  drawCardBackPage(pdfDoc, "GAME NIGHT", null, "rosette", chosenColor.rgb, true);

  deck.forEach((entry, i) => {
    const posOnPage = i % CARDS_PER_PAGE;
    if (posOnPage === 0) pdfDoc.addPage();
    const [x, y] = slotXY(posOnPage);
    drawDeckCard(pdfDoc, x, y, entry);
  });
} catch (e) {
  drawError = e;
}
check(drawError === null, `all 52 cards draw without throwing${drawError ? " — " + drawError.stack : ""}`);

const expectedCardPages = Math.ceil(deck.length / CARDS_PER_PAGE);
const expectedTotalPages = 1 /* instructions */ + 1 /* card back */ + expectedCardPages;
check(pdfDoc.internal.getNumberOfPages() === expectedTotalPages,
  `page count is ${pdfDoc.internal.getNumberOfPages()}, expected ${expectedTotalPages} (1 instructions + 1 back + ${expectedCardPages} card pages of 6 each for 52 cards, last page partial)`);

const outPath = path.join(DIR, "test-output.pdf");
fs.writeFileSync(outPath, Buffer.from(pdfDoc.output("arraybuffer")));
console.log("Wrote " + outPath);

console.log(failures === 0 ? "\nALL CHECKS PASSED" : `\n${failures} CHECK(S) FAILED`);
process.exit(failures === 0 ? 0 : 1);
