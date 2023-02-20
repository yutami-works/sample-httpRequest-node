const fetch = require('node-fetch');

// 郵便番号検索API
const url = 'https://zipcloud.ibsnet.co.jp/api/search?zipcode=7830060';

(async () => {
  try {
    const res = await fetch(url);
    const json = await res.json();
    console.log(res.status);
    console.log(json);
  } catch (error) {
    console.log(error);
  }
})();
