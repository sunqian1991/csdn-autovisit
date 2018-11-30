const http = require('http');
const https = require('https');
const express = require('express');

https.get('https://blog.csdn.net/yumikobu/article/details/82885582', function(res) {
  console.log(res)
}).on("error", function(err) {
  console.log("Error: " + err.message);
});