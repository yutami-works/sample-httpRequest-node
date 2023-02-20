const axios = require('axios');

// 郵便番号検索API
//const url = 'https://zipcloud.ibsnet.co.jp/api/search?zipcode=7830060';

const config = {
  url: '/search',
  method: 'get',
  // インスタンス化する際など便利
  baseURL: 'https://zipcloud.ibsnet.co.jp/api',
  // qs
  params: {
    zipcode: 7830060
  },
};

(async () => {
  try {
    const res = await axios(config);
    console.log(`statusCode:${res.status}`);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
})();