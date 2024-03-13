const axios = require('axios');

exports.handler = async (event, context) => {
  const url = "https://api.gx.me/profile/token";
  
  const headers = {
    'accept': 'application/json',
    'accept-language': 'de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7',
    'authority': 'api.gx.me',
    'cookie': 'SESSION_TYPE=user; SESSION=NzFjMjg3NDAtMDhkOC00ODkwLWJhNzEtODA0YTcwMjNiM2U0',
    'origin': 'https://www.opera.com',
    'referer': 'https://www.opera.com/',
    'sec-ch-ua': '"Not A(Brand";v="99", "Opera GX";v="107", "Chromium";v="121"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'cross-site',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 OPR/107.0.0.0',
  };

  try {
    const response = await axios.get(url, { headers });

    if (response.status === 200) {
      const data = response.data;
      return {
        statusCode: 200,
        body: JSON.stringify(data['data']),
      };
    } else {
      console.error("Failed to retrieve token");
      return {
        statusCode: response.status,
        body: "Failed to retrieve token",
      };
    }
  } catch (error) {
    console.error("Error:", error.message);
    return {
      statusCode: 500,
      body: "Internal Server Error",
    };
  }
};
