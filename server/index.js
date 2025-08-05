process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // bypass browser warning

const express = require('express');
const cors = require('cors');
const url = require('url');
const needle = require('needle');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());


app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

const API_URL = 'https://api.quotable.io/random';

app.get('/api', async (req, res) => {
  try {
    const params = new URLSearchParams({
      ...url.parse(req.url, true).query,
    });

    const apiUrlWithParams = `${API_URL}?${params}`;
    console.log('Fetching quote from:', apiUrlWithParams);

    const apiResponse = await needle('get', apiUrlWithParams);
    const data = apiResponse.body;

    console.log('Quote received:', data);

    res.status(200).json(data);
  }
  catch (ex) {
    console.error('Error fetching quote:', ex);
    res.status(500).json({
      error: 'Something went wrong',
      details: ex.message,
    });
  }
});

app.listen(PORT, () => console.log(`Proxy server listening on port ${PORT}`));
