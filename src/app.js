import API from './api/API';

import {format} from 'silly-datetime';

import config from './config/config.json';

const schedule = require("node-schedule");
const api = new API();

let count = 0;

api.setHeaders({
  "Referer": config.Referer
});

const autoVisit = async () => {
  let index = 0;
  for (const url of config.urls) {
    index++;
    console.log('###################################正在发送第' + index + '个请求...');
    const res = await api.httpsRequest(url.url);
    if(!res.ok){
      console.log(`Error: ${res.body}`);
      console.log('###################################第' + index + '个请求失败，已跳过');
    }
  }
};

schedule.scheduleJob(config.cron, async () => {
  count = count + 1;
  const time=format(new Date(), 'YYYY-MM-DD HH:mm:ss');
  console.log('*****************准备执行脚本*****************');
  console.log('-----------------当前是第' + count + '次执行-----------------');
  console.log('-----------------执行时间：' + time + '-----------------');
  await autoVisit();
  console.log('*****************脚本执行结束*******************');
});