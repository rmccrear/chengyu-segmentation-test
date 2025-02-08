// node.js
// open file raw-text.txt

var fs = require('fs');
var path = require('path');

// get the text
var text = fs.readFileSync(path.join(__dirname, 'raw-text.txt'), 'utf8');

// select only lines that contain '成語：'
var lines = text.split('\n').filter(function(line) {
  return line.indexOf('成語：') > -1;
});

// extract the chengyu
var chengyu = lines.map(function(line) {
  return line.split('：')[1].trim();
});

// output the chengyu
// save to chengyu.txt
fs.writeFileSync(path.join(__dirname, 'chengyu.txt'), chengyu.join('\n'), 'utf8');

// create html page with each chengyu in a p tag
var html = '<!doctype html><html><head><title>Chengyu</title></head><body>';
chengyu.forEach(function(c) {
  html += '<p>' + c + '</p>';
});
html += '</body></html>';
// save to chengyu-list.html
fs.writeFileSync(path.join(__dirname, 'chengyu-list-raw.html'), html, 'utf8');

console.log('chengyu.txt saved');

// create html page with each chengyu in a p tag
var html = '<!doctype html><html><head><title>Chengyu Explanations</title></head><body>';
text.split('\n').forEach(function(c) {
  html += '<p>' + c + '</p>';
});
html += '</body></html>';
// save to chengyu-list.html
fs.writeFileSync(path.join(__dirname, 'chengyu-explainations-raw.html'), html, 'utf8');

console.log('chengyu-explainations saved');



