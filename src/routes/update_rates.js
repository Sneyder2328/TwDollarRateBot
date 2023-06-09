const { Router } = require("express");
const { tweetRates } = require("../twbot/post_tweet.js");
const { getRatesUpdated } = require("../scrapper/get_rates.js");

const router = Router();

router.post("/update_rates", async (req, res) => {
  if (req.user) {
    const rates = await getRatesUpdated();
    return res.status(200).json({ success: await tweetRates(rates) });
  }
  return res.status(401).json({ success: false });
});

module.exports = { router };
