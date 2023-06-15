const { Router } = require("express");
const { postTweetEmitter, POST_TWEET_EVENT } = require("../events/post_tweet_emitter.js");

const router = Router();

router.post("/update_rates", async (_, res) => {
  postTweetEmitter.emit(POST_TWEET_EVENT);
  return res.status(200).json({ message: "Posting tweet.." });
});

module.exports = { router };
