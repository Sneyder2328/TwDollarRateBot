// Import the necessary libraries
const axios = require("axios");
const cheerio = require("cheerio");

async function getRatesUpdated() {
  // Get the data from the URL
  const response = await axios.get("https://www.bcv.org.ve/");

  // Create a Cheerio object from the response
  const $ = cheerio.load(response.data);

  const rateUsd = $(
    ".view-tipo-de-cambio-oficial-del-bcv .view-content .views-row #dolar .field-content .centrado strong"
  );
  const rateEur = $(
    ".view-tipo-de-cambio-oficial-del-bcv .view-content .views-row #euro .field-content .centrado strong"
  );
  const rateCny = $(
    ".view-tipo-de-cambio-oficial-del-bcv .view-content .views-row #yuan .field-content .centrado strong"
  );
  const rateTry = $(
    ".view-tipo-de-cambio-oficial-del-bcv .view-content .views-row #lira .field-content .centrado strong"
  );
  const rateRub = $(
    ".view-tipo-de-cambio-oficial-del-bcv .view-content .views-row #rublo .field-content .centrado strong"
  );

  const updatedAt = $(
    ".view-tipo-de-cambio-oficial-del-bcv .view-content .views-row div.dinpro span"
  );

  return {
    USD: rateUsd.text().trim(),
    EUR: rateEur.text().trim(),
    CNY: rateCny.text().trim(),
    TRY: rateTry.text().trim(),
    RUB: rateRub.text().trim(),
    date: updatedAt.text().trim()
  };
}

module.exports = { getRatesUpdated };
