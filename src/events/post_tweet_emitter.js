const EventEmitter = require("events");
const { getRatesUpdated } = require("../services/get_rates.js");
const { tweetRates } = require("../twbot/post_tweet");

const postTweetEmitter = new EventEmitter();

const POST_TWEET_EVENT = "post_tweet";

postTweetEmitter.on(POST_TWEET_EVENT, () => {
  setImmediate(async () => {
    const rates = await getRatesUpdated();
    await tweetRates(rates);
  });
});

module.exports = { postTweetEmitter, POST_TWEET_EVENT };
