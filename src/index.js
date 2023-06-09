// create basic express server
const express = require("express");
const compression = require("compression");
const expressBasicAuth = require("express-basic-auth");

const env = (process.env.NODE_ENV || "development").trim();

if (env === "development") {
  require("dotenv").config();
}

const { router } = require("./routes/update_rates.js");

const app = express();

const port = process.env.PORT || 3000;

app.set("PORT", port);

// Compress responses
app.use(compression());

// Use the express-basic-auth middleware to protect your routes.
app.use(
  expressBasicAuth({
    users: { [process.env.USERNAME]: process.env.PASSWORD },
  })
);

// Add router
app.use("/", router);

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
