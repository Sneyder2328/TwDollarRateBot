// create basic express server
const express = require("express");
const compression = require("compression");
const env = (process.env.NODE_ENV || 'development').trim();

if (env === 'development') {
    require('dotenv').config();
}

const { router } = require("./routes/update_rates.js");

const app = express();

const port = process.env.PORT || 3000;

app.set("PORT", port);

// compress responses
app.use(compression());
app.use("/", router);

app.listen(port, () => {
    console.log(`app running on port ${port}`);
});
