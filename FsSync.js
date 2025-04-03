import {readFileSync,writeFileSync} from"fs";


const first = readFileSync('./Content/first.txt','utf-8')
const second = readFileSync('./Content/second.txt','utf-8')
const third = readFileSync('./Content/third.txt','utf8')

console.log(first);

console.log(second);


writeFileSync('./Content/result_sync.txt',`${third} `, {flag:'a'})


