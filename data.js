// Family Game Night Deck — a personalized CONVERSATION CARD GAME. No
// winners, no losers, and no scoring during play — but the DECK ITSELF is
// personalized through a real wizard: the buyer tells us what kind of
// group this is for and what they care about, and the wizard narrows a
// 100-prompt pool down to the 50 cards that actually fit, 10 per category.
// Every buyer's deck is built from the same 100-prompt pool but very
// likely ends up with a different final 50, depending on their answers.
//
// Card count: 1 cover + 1 how-to-play + 50 prompts (5 categories x 10,
// selected from a pool of 20 per category = 100 total) = 52 cards printed.
// This file defines the full 100-prompt pool plus the how-to-play card;
// selection.js in app.js narrows the pool to the final 50 per buyer.
//
// Group types (groupFit tag on a prompt — omitted/empty means universal,
// eligible for every group type):
//   family, friends, couple, faith, coworkers
// (buyers can also pick "other" — gets universal-only prompts, same as
// any group type when a category has no group-specific bonus cards)
//
// Themes (0-2 per prompt, buyer picks 2-4 on the wizard; prompts are
// scored by how many of the buyer's chosen themes they match):
//   nostalgia, humor, faith_values, travel, food, career, growth,
//   gratitude, love

const FAMILY_GAME_DATA = {
  promptCategories: [
    { id: "would_you_rather", label: "Would You Rather" },
    { id: "this_or_that", label: "This or That" },
    { id: "memory_lane", label: "Memory Lane" },
    { id: "deep_talk", label: "Deep Talk" },
    { id: "silly_random", label: "Silly & Random" }
  ],

  groupTypes: [
    { id: "family", label: "Family" },
    { id: "friends", label: "Friends" },
    { id: "couple", label: "Couple" },
    { id: "faith", label: "Church or Faith Group" },
    { id: "coworkers", label: "Coworkers" },
    { id: "other", label: "Something Else / Mixed Group" }
  ],

  themes: [
    { id: "nostalgia", label: "Nostalgia & Memories" },
    { id: "humor", label: "Humor & Silliness" },
    { id: "faith_values", label: "Faith & Values" },
    { id: "travel", label: "Travel & Adventure" },
    { id: "food", label: "Food & Cooking" },
    { id: "career", label: "Career & Ambition" },
    { id: "growth", label: "Growth & Change" },
    { id: "gratitude", label: "Gratitude & Appreciation" },
    { id: "love", label: "Love & Relationships" }
  ],

  prompts: [
    // --- Would You Rather (20) ----------------------------------------------
    { id: "WYR01", category: "would_you_rather", text: "Would you rather have the ability to fly or be invisible?", themes: [] },
    { id: "WYR02", category: "would_you_rather", text: "Would you rather always be 10 minutes late or always be 20 minutes early?", themes: ["humor"] },
    { id: "WYR03", category: "would_you_rather", text: "Would you rather never eat cheese again or never eat chocolate again?", themes: ["food"] },
    { id: "WYR04", category: "would_you_rather", text: "Would you rather be able to talk to animals or speak every human language fluently?", themes: ["travel"] },
    { id: "WYR05", category: "would_you_rather", text: "Would you rather live without music or live without movies and TV?", themes: [] },
    { id: "WYR06", category: "would_you_rather", text: "Would you rather have a pet dragon or a pet dinosaur?", themes: ["humor"] },
    { id: "WYR07", category: "would_you_rather", text: "Would you rather be the funniest person in the room or the smartest?", themes: ["humor"] },
    { id: "WYR08", category: "would_you_rather", text: "Would you rather have to sing everything instead of talking, or dance everywhere you walk?", themes: ["humor"] },
    { id: "WYR09", category: "would_you_rather", text: "Would you rather explore outer space or the deepest part of the ocean?", themes: ["travel", "growth"] },
    { id: "WYR10", category: "would_you_rather", text: "Would you rather have unlimited pizza for life or unlimited ice cream for life?", themes: ["food"] },
    { id: "WYR11", category: "would_you_rather", text: "Would you rather have a private chef for life or a personal trainer for life?", themes: ["food", "growth"] },
    { id: "WYR12", category: "would_you_rather", text: "Would you rather win the lottery or land your actual dream job?", themes: ["career"] },
    { id: "WYR13", category: "would_you_rather", text: "Would you rather live inside your favorite book or your favorite movie?", themes: [] },
    { id: "WYR14", category: "would_you_rather", text: "Would you rather never have to work again or never have to do chores again?", themes: ["career", "humor"] },
    { id: "WYR15", category: "would_you_rather", text: "Would you rather be fluent in every language or a master of every instrument?", themes: ["growth"] },
    { id: "WYR16", category: "would_you_rather", text: "Would you rather have an unlimited travel budget or an unlimited food budget?", themes: ["travel", "food"] },
    { id: "WYR17", category: "would_you_rather", text: "Would you rather always know when someone's lying, or always get away with a lie yourself?", themes: ["growth"] },
    { id: "WYR18", category: "would_you_rather", text: "Would you rather relive your favorite year, or skip straight to your favorite future moment?", themes: ["nostalgia", "growth"] },
    { id: "WYR19", category: "would_you_rather", text: "Would you rather have the world's best sense of humor or the world's best singing voice?", themes: ["humor"] },
    { id: "WYR20", category: "would_you_rather", text: "Would you rather get one more hour with someone you've lost, or one hour with your future self?", themes: ["growth", "gratitude"] },

    // --- This or That (20) ----------------------------------------------------
    { id: "TOT01", category: "this_or_that", text: "Beach or mountains?", themes: ["travel"] },
    { id: "TOT02", category: "this_or_that", text: "Morning person or night owl?", themes: [] },
    { id: "TOT03", category: "this_or_that", text: "Sweet or salty?", themes: ["food"] },
    { id: "TOT04", category: "this_or_that", text: "The book or the movie?", themes: [] },
    { id: "TOT05", category: "this_or_that", text: "Summer or winter?", themes: ["travel"] },
    { id: "TOT06", category: "this_or_that", text: "Camping or a hotel?", themes: ["travel"] },
    { id: "TOT07", category: "this_or_that", text: "Board games or video games?", themes: ["humor"] },
    { id: "TOT08", category: "this_or_that", text: "Dogs or cats?", themes: [] },
    { id: "TOT09", category: "this_or_that", text: "City or countryside?", themes: ["travel"] },
    { id: "TOT10", category: "this_or_that", text: "Breakfast for dinner, or dinner for breakfast?", themes: ["food"] },
    { id: "TOT11", category: "this_or_that", text: "Coffee or tea?", themes: ["food"] },
    { id: "TOT12", category: "this_or_that", text: "Save it, or spend it?", themes: ["career", "growth"] },
    { id: "TOT13", category: "this_or_that", text: "Window seat or aisle seat?", themes: ["travel"] },
    { id: "TOT14", category: "this_or_that", text: "Homemade or takeout?", themes: ["food"] },
    { id: "TOT15", category: "this_or_that", text: "The early bird gets the worm, or better late than never?", themes: ["humor"] },
    { id: "TOT16", category: "this_or_that", text: "Big wedding or small and intimate?", themes: ["love"] },
    { id: "TOT17", category: "this_or_that", text: "Karaoke or the dance floor?", themes: ["humor"] },
    { id: "TOT18", category: "this_or_that", text: "Sunrise or sunset?", themes: ["travel", "gratitude"] },
    { id: "TOT19", category: "this_or_that", text: "New experiences, or favorite comforts?", themes: ["growth", "nostalgia"] },
    { id: "TOT20", category: "this_or_that", text: "Give advice, or just listen?", themes: ["growth", "love"] },

    // --- Memory Lane (20) ------------------------------------------------------
    { id: "ML01", category: "memory_lane", text: "What's your favorite family vacation memory?", themes: ["nostalgia", "travel"], groupFit: ["family"] },
    { id: "ML02", category: "memory_lane", text: "What's a family tradition you hope never changes?", themes: ["nostalgia"], groupFit: ["family"] },
    { id: "ML03", category: "memory_lane", text: "What was your favorite toy or game when you were a kid?", themes: ["nostalgia"] },
    { id: "ML04", category: "memory_lane", text: "What's the funniest thing that's ever happened at a family gathering?", themes: ["nostalgia", "humor"], groupFit: ["family"] },
    { id: "ML05", category: "memory_lane", text: "Who in this group tells the best stories — and what's one you remember?", themes: ["nostalgia"] },
    { id: "ML06", category: "memory_lane", text: "What's a meal that instantly reminds you of home?", themes: ["nostalgia", "food"] },
    { id: "ML07", category: "memory_lane", text: "What's the most memorable birthday you've ever had?", themes: ["nostalgia", "gratitude"] },
    { id: "ML08", category: "memory_lane", text: "What's something small this group does that you'd miss if it stopped?", themes: ["nostalgia", "gratitude"] },
    { id: "ML09", category: "memory_lane", text: "What's a place you've been together that you'd want to go back to?", themes: ["nostalgia", "travel"] },
    { id: "ML10", category: "memory_lane", text: "What's a photo from this group's history you wish you could step right into?", themes: ["nostalgia"] },
    { id: "ML11", category: "memory_lane", text: "How did you two first meet?", themes: ["nostalgia", "love"], groupFit: ["friends", "couple"] },
    { id: "ML12", category: "memory_lane", text: "What's a trip you took together that you still talk about?", themes: ["nostalgia", "travel"], groupFit: ["friends", "couple"] },
    { id: "ML13", category: "memory_lane", text: "What's the first thing you remember hoping or praying for together?", themes: ["nostalgia", "faith_values"], groupFit: ["faith"] },
    { id: "ML14", category: "memory_lane", text: "What's a project or win you're still proud of from working together?", themes: ["nostalgia", "career"], groupFit: ["coworkers"] },
    { id: "ML15", category: "memory_lane", text: "What's an inside joke only this group would understand?", themes: ["nostalgia", "humor"] },
    { id: "ML16", category: "memory_lane", text: "What's the silliest thing you've ever done together?", themes: ["nostalgia", "humor"] },
    { id: "ML17", category: "memory_lane", text: "What's a hard season you got through together?", themes: ["nostalgia", "growth"] },
    { id: "ML18", category: "memory_lane", text: "What's your earliest memory of this group being together?", themes: ["nostalgia"] },
    { id: "ML19", category: "memory_lane", text: "What's a tradition from childhood you still carry with you?", themes: ["nostalgia"] },
    { id: "ML20", category: "memory_lane", text: "What's something you've celebrated together that you'll never forget?", themes: ["nostalgia", "gratitude"] },

    // --- Deep Talk (20) --------------------------------------------------------
    { id: "DT01", category: "deep_talk", text: "What's something you're proud of that you don't talk about much?", themes: ["growth"] },
    { id: "DT02", category: "deep_talk", text: "What's one thing you'd like this group to understand better about you?", themes: ["growth"] },
    { id: "DT03", category: "deep_talk", text: "What's a challenge you got through that made you stronger?", themes: ["growth"] },
    { id: "DT04", category: "deep_talk", text: "Who in your life has believed in you the most, and how did that shape you?", themes: ["gratitude", "growth"] },
    { id: "DT05", category: "deep_talk", text: "What's something you've changed your mind about as you've gotten older?", themes: ["growth"] },
    { id: "DT06", category: "deep_talk", text: "What does “home” mean to you?", themes: ["nostalgia"] },
    { id: "DT07", category: "deep_talk", text: "What's a piece of advice you'd give your younger self?", themes: ["growth"] },
    { id: "DT08", category: "deep_talk", text: "What's something you're genuinely grateful for right now?", themes: ["gratitude"] },
    { id: "DT09", category: "deep_talk", text: "Tell about a moment you felt truly proud of someone else in this group.", themes: ["gratitude"] },
    { id: "DT10", category: "deep_talk", text: "If you could pass down one lesson to the next generation, what would it be?", themes: ["growth", "gratitude"] },
    { id: "DT11", category: "deep_talk", text: "What's a belief or value you hold that's shaped who you are?", themes: ["faith_values", "growth"], groupFit: ["faith"] },
    { id: "DT12", category: "deep_talk", text: "What's something your faith has helped you get through?", themes: ["faith_values"], groupFit: ["faith"] },
    { id: "DT13", category: "deep_talk", text: "What does love look like to you, practically, day to day?", themes: ["love"], groupFit: ["couple"] },
    { id: "DT14", category: "deep_talk", text: "What's something you wish more people understood about your job?", themes: ["career"], groupFit: ["coworkers"] },
    { id: "DT15", category: "deep_talk", text: "What's a risk you're glad you took?", themes: ["growth"] },
    { id: "DT16", category: "deep_talk", text: "What's something you're still figuring out about yourself?", themes: ["growth"] },
    { id: "DT17", category: "deep_talk", text: "Who in your life has shaped you the most, and how?", themes: ["gratitude", "growth"] },
    { id: "DT18", category: "deep_talk", text: "What's a moment that changed how you see the world?", themes: ["growth"] },
    { id: "DT19", category: "deep_talk", text: "What does a meaningful life look like to you?", themes: ["growth", "faith_values"] },
    { id: "DT20", category: "deep_talk", text: "What's something you've never said out loud that you'd like to?", themes: ["growth", "love"] },

    // --- Silly & Random (20) ---------------------------------------------------
    { id: "SR01", category: "silly_random", text: "If you could have any superpower for just one day, what would you pick, and what would you do with it?", themes: ["humor"] },
    { id: "SR02", category: "silly_random", text: "What's the weirdest food combination you actually enjoy?", themes: ["food", "humor"] },
    { id: "SR03", category: "silly_random", text: "If you were a kitchen appliance, which one would you be, and why?", themes: ["humor"] },
    { id: "SR04", category: "silly_random", text: "What's a made-up word your group uses that outsiders wouldn't understand?", themes: ["humor", "nostalgia"] },
    { id: "SR05", category: "silly_random", text: "If this group had a theme song, what would it be?", themes: ["humor"] },
    { id: "SR06", category: "silly_random", text: "What's the most ridiculous thing you've ever done to win a game?", themes: ["humor"] },
    { id: "SR07", category: "silly_random", text: "If you could swap lives with someone in this group for a day, who would it be?", themes: ["humor"] },
    { id: "SR08", category: "silly_random", text: "What's your go-to karaoke song, even if you can't sing it well?", themes: ["humor"] },
    { id: "SR09", category: "silly_random", text: "If you had to be stuck in an elevator with one person here, who would get you through it best?", themes: ["humor"] },
    { id: "SR10", category: "silly_random", text: "What's the silliest nickname you've ever had (or still have)?", themes: ["humor", "nostalgia"] },
    { id: "SR11", category: "silly_random", text: "If you had a talk show, who would your first guest be?", themes: ["humor"] },
    { id: "SR12", category: "silly_random", text: "What's the most useless talent you have?", themes: ["humor"] },
    { id: "SR13", category: "silly_random", text: "If you could instantly become an expert at one random skill, what would it be?", themes: ["humor", "growth"] },
    { id: "SR14", category: "silly_random", text: "What's a food you refuse to apologize for loving?", themes: ["food", "humor"] },
    { id: "SR15", category: "silly_random", text: "If this group had a mascot, what would it be?", themes: ["humor"] },
    { id: "SR16", category: "silly_random", text: "What's the worst gift you've ever received and pretended to love?", themes: ["humor"] },
    { id: "SR17", category: "silly_random", text: "If you had to survive a zombie apocalypse with only this group, what's your role?", themes: ["humor"] },
    { id: "SR18", category: "silly_random", text: "What's your most irrational fear?", themes: ["humor"] },
    { id: "SR19", category: "silly_random", text: "If you could time-travel to one decade, which would you pick?", themes: ["nostalgia", "travel"] },
    { id: "SR20", category: "silly_random", text: "What's the most “you” purchase you've ever made?", themes: ["humor"] }
  ],

  howToPlay: {
    title: "How to Play",
    body: "Shuffle the deck and place it face down. Take turns drawing a card and reading it out loud — everyone at the table answers, one at a time. No skipping a card once it's drawn. There's no scoring and no winner — just whoever's turn it is next. Play for five minutes or all night, however long the conversation keeps going."
  }
};
