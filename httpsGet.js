// 標準モジュールGET
const https = require('https');

// 郵便番号検索API
const url = 'https://zipcloud.ibsnet.co.jp/api/search?zipcode=7830060';

https.get(url, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });

}).on('error', (e) => {
  console.error(e);
});