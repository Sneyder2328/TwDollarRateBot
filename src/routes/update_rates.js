const { Router } = require("express");
const { tweetRates } = require("../twbot/post_tweet.js");
const { getRatesUpdated } = require("../scrapper/get_rates.js");

const router = Router();

router.post("/update_rates", async (req, res) => {
  const rates = await getRatesUpdated();
  res.json({ success: await tweetRates(rates) });
});

module.exports = { router };
