// Import twitter-api-v2
const { TwitterApi } = require("twitter-api-v2");

// Fill your API credentials
const client = new TwitterApi({
  appKey: process.env.TW_APP_KEY,
  appSecret: process.env.TW_APP_SECRET,
  accessToken: process.env.TW_ACCESS_TOKEN,
  accessSecret: process.env.TW_ACCESS_SECRET,
});

// Provide read write controls
const rwClient = client.readWrite;

// Create textTweet function which post
// a text only tweet
async function tweetRates(rates) {
  try {
    // Use .tweet() method and pass the text you want to post
    const text = `Actualización BCV || Fecha valor: ${rates.date}\n\n1 Dolar (USD) = ${rates.USD} Bs.\n1 Euro (EUR) = ${rates.EUR} Bs. \n1 Yuan (CNY) = ${rates.CNY} Bs.\n1 Lira (TRY) = ${rates.TRY} Bs.\n1 Rublo (RUB) = ${rates.RUB} Bs.`;
    await rwClient.v2.tweet(text);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

module.exports = { tweetRates };
