/* process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // bypass browser warning */

const express = require('express');
const cors = require('cors');
const url = require('url');
const needle = require('needle');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

const API_URL = 'https://api.quotable.io/random';

app.get('/api', async (req, res) => {
  try {
    const params = new URLSearchParams({
      ...url.parse(req.url, true).query,
    });

    const apiResponse = await needle('get', `${API_URL}?${params}`);
    const data = apiResponse.body;
    res.status(200).json(data);
  }
  catch (ex) {
    console.error(ex);
    res.status(500).json({
      error: 'Something went wrong',
      details: ex.message,
    });
  }
});

app.listen(PORT, () => console.log(`Proxy server listening on port ${PORT}`));