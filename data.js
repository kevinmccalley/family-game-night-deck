// Family Game Night Deck — evergreen fixed-content deck, NOT a quiz-and-bank
// product. Every buyer gets the same 51 pre-written cards (1 how-to-play +
// 50 prompts); the only per-buyer variation is light {name} interpolation
// on the cover card, handled at PDF-generation time, not here — this file
// is the fixed content bank only.
//
// Card count: 1 cover + 1 how-to-play + 50 prompts (5 categories x 10) = 52
// cards total, matching a standard deck-of-cards count. No personalization
// engine at all — the differentiator here is the card-back customization
// system every GoodStockPress deck offers, not per-buyer content.
//
// Content design: age-flexible for a mixed-age family table. No prompt
// assumes a specific age, relationship status, or family structure. Nothing
// requires alcohol, dares, or physical forfeits — every card works read
// straight off the page.

const FAMILY_GAME_DATA = {
  promptCategories: [
    { id: "would_you_rather", label: "Would You Rather" },
    { id: "this_or_that", label: "This or That" },
    { id: "memory_lane", label: "Memory Lane" },
    { id: "deep_talk", label: "Deep Talk" },
    { id: "silly_random", label: "Silly & Random" }
  ],

  prompts: [
    // --- Would You Rather (10) ---------------------------------------------
    { id: "WYR01", category: "would_you_rather", text: "Would you rather have the ability to fly or be invisible?" },
    { id: "WYR02", category: "would_you_rather", text: "Would you rather always be 10 minutes late or always be 20 minutes early?" },
    { id: "WYR03", category: "would_you_rather", text: "Would you rather never eat cheese again or never eat chocolate again?" },
    { id: "WYR04", category: "would_you_rather", text: "Would you rather be able to talk to animals or speak every human language fluently?" },
    { id: "WYR05", category: "would_you_rather", text: "Would you rather live without music or live without movies and TV?" },
    { id: "WYR06", category: "would_you_rather", text: "Would you rather have a pet dragon or a pet dinosaur?" },
    { id: "WYR07", category: "would_you_rather", text: "Would you rather be the funniest person in the room or the smartest?" },
    { id: "WYR08", category: "would_you_rather", text: "Would you rather have to sing everything instead of talking, or dance everywhere you walk?" },
    { id: "WYR09", category: "would_you_rather", text: "Would you rather explore outer space or the deepest part of the ocean?" },
    { id: "WYR10", category: "would_you_rather", text: "Would you rather have unlimited pizza for life or unlimited ice cream for life?" },

    // --- This or That (10) --------------------------------------------------
    { id: "TOT01", category: "this_or_that", text: "Beach or mountains?" },
    { id: "TOT02", category: "this_or_that", text: "Morning person or night owl?" },
    { id: "TOT03", category: "this_or_that", text: "Sweet or salty?" },
    { id: "TOT04", category: "this_or_that", text: "The book or the movie?" },
    { id: "TOT05", category: "this_or_that", text: "Summer or winter?" },
    { id: "TOT06", category: "this_or_that", text: "Camping or a hotel?" },
    { id: "TOT07", category: "this_or_that", text: "Board games or video games?" },
    { id: "TOT08", category: "this_or_that", text: "Dogs or cats?" },
    { id: "TOT09", category: "this_or_that", text: "City or countryside?" },
    { id: "TOT10", category: "this_or_that", text: "Breakfast for dinner, or dinner for breakfast?" },

    // --- Memory Lane (10) ----------------------------------------------------
    { id: "ML01", category: "memory_lane", text: "What's your favorite family vacation memory?" },
    { id: "ML02", category: "memory_lane", text: "What's a family tradition you hope never changes?" },
    { id: "ML03", category: "memory_lane", text: "What was your favorite toy or game when you were a kid?" },
    { id: "ML04", category: "memory_lane", text: "What's the funniest thing that's ever happened at a family gathering?" },
    { id: "ML05", category: "memory_lane", text: "Who in this family tells the best stories — and what's one you remember?" },
    { id: "ML06", category: "memory_lane", text: "What's a meal that instantly reminds you of home?" },
    { id: "ML07", category: "memory_lane", text: "What's the most memorable birthday you've ever had?" },
    { id: "ML08", category: "memory_lane", text: "What's something small this family does that you'd miss if it stopped?" },
    { id: "ML09", category: "memory_lane", text: "What's a place you've been together that you'd want to go back to?" },
    { id: "ML10", category: "memory_lane", text: "What's a photo from this family's history you wish you could step right into?" },

    // --- Deep Talk (10) --------------------------------------------------
    { id: "DT01", category: "deep_talk", text: "What's something you're proud of that you don't talk about much?" },
    { id: "DT02", category: "deep_talk", text: "What's one thing you'd like this family to understand better about you?" },
    { id: "DT03", category: "deep_talk", text: "What's a challenge you got through that made you stronger?" },
    { id: "DT04", category: "deep_talk", text: "Who in your life has believed in you the most, and how did that shape you?" },
    { id: "DT05", category: "deep_talk", text: "What's something you've changed your mind about as you've gotten older?" },
    { id: "DT06", category: "deep_talk", text: "What does “home” mean to you?" },
    { id: "DT07", category: "deep_talk", text: "What's a piece of advice you'd give your younger self?" },
    { id: "DT08", category: "deep_talk", text: "What's something you're genuinely grateful for right now?" },
    { id: "DT09", category: "deep_talk", text: "Tell about a moment you felt truly proud of someone else in this family." },
    { id: "DT10", category: "deep_talk", text: "If you could pass down one lesson to the next generation, what would it be?" },

    // --- Silly & Random (10) -------------------------------------------------
    { id: "SR01", category: "silly_random", text: "If you could have any superpower for just one day, what would you pick, and what would you do with it?" },
    { id: "SR02", category: "silly_random", text: "What's the weirdest food combination you actually enjoy?" },
    { id: "SR03", category: "silly_random", text: "If you were a kitchen appliance, which one would you be, and why?" },
    { id: "SR04", category: "silly_random", text: "What's a made-up word your family uses that outsiders wouldn't understand?" },
    { id: "SR05", category: "silly_random", text: "If this family had a theme song, what would it be?" },
    { id: "SR06", category: "silly_random", text: "What's the most ridiculous thing you've ever done to win a game?" },
    { id: "SR07", category: "silly_random", text: "If you could swap lives with any family member for a day, who would it be?" },
    { id: "SR08", category: "silly_random", text: "What's your go-to karaoke song, even if you can't sing it well?" },
    { id: "SR09", category: "silly_random", text: "If you had to be stuck in an elevator with one family member, who would get you through it best?" },
    { id: "SR10", category: "silly_random", text: "What's the silliest nickname you've ever had (or still have)?" }
  ],

  howToPlay: {
    title: "How to Play",
    body: "Shuffle the deck and place it face down. Take turns drawing a card and reading it out loud — everyone at the table answers, one at a time. No skipping a card once it's drawn. Play for five minutes or all night — however long the conversation keeps going."
  }
};
