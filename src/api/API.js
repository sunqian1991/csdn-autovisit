const http = require('http');
const https = require('https');

class API{
  constructor(){
    this.headers = {
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
      'Cache-Control': 'max-age=0',
      'Connection': 'keep-alive',
      'Cookie': '',
      'Host': 'blog.csdn.net',
      'Upgrade-Insecure-Requests': '1',
      'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36'
    }
  }

  getHeaders(){
    return this.headers;
  }

  setHeaders(header){
    this.headers = Object.assign({}, this.headers, header);
  }

  httpsRequest = (url) => {
    const doRequest = new Promise((resolve, reject) => {
      https.get(url, {
        headers: this.headers,
        protocol: 'https:'
      }, (res) => {
        resolve(res);
      }).on("error", (err) => {
        reject(new Error(err.message));
      });
    });
    const timer = new Promise((resolve, reject) => {
      setTimeout(()=>{
        reject(new Error('request timeout'));
      },5000)
    });
    // return doRequest;
    return Promise.race([doRequest, timer]).then(res => ({ ok: true })).catch(error => ({ ok: false, body: error.message }));
  }

  httpRequest = (url) => {
    const doRequest = new Promise((resolve, reject) => {
      http.get(url, {
        headers: this.headers,
        protocol: 'http:'
      }, (res) => {
        resolve(res);
      }).on("error", (err) => {
        reject(new Error(err.message));
      });
    });
    const timer = new Promise((resolve, reject) => {
      setTimeout(()=>{
        reject(new Error('request timeout'));
      },5000)
    });
    // return doRequest;
    return Promise.race([doRequest, timer]).then(res => ({ ok: true })).catch(error => ({ ok: false, body: error.message }));
  }
}

module.exports = API;
