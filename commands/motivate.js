const quotes = [
    "Don't give up. You can do it.",
    "You got this!",
    "Think about how satisfying it'll be to finally get this assignment over with.",
    "I'm gonna smash my head through a wall if you don't finish your assignment by the deadline. Now WORK!!!",
    "WHO TOLD YOU TO GIVE UP? EXACTLY. NO ONE DID. GO. GO. GO!!!!!!",
    "\"Every day spent procrastinating is another day spent worrying about that thing. Do it now, and move on with your life!\"",
    "If I bore you with this message long enough, you'll want to force yourself to work on your assignment. Ha. Ha. Ha. Ha.      ha.             ha"
]

// randomly select a quote
const encourage = (items) => {
    return items[Math.floor(Math.random()*items.length)];
  }

module.exports = {
    name: 'motivate',
    description: "selects a random motivational quote for the user to keep them working!",
    run(msg) {
        msg.channel.send(encourage(quotes));
    }
}