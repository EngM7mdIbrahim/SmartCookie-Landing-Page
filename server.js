const express = require("express");
const cors = require("cors");
const https = require('https')
const axios = require("axios");
const request = require("request");
const app = express();

app.use(cors());

const API_ENDPOINT = "https://www.linkedin.com/oauth/v2";
const instance = axios.create({
    httpsAgent: new https.Agent({
      rejectUnauthorized: false
    })
  });

  
app.all("/*", function (req, res) {
  let url = API_ENDPOINT + req.url;
  console.log("URL: ", url);
  instance(url, {
    method: req.method,
    headers: req.headers,
    data: req.body,
  })
    .then((response) => {
      res.set(response.headers);
      res.status(response.status).send(response.data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send(error.data);
    });
});

app.listen(4000, () => {
  console.log("CORS-enabled proxy server listening on port 4000");
});
