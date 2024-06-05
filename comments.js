// Create web server
// const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const fs = require('fs');
const path = require('path');
const comments = require('./comments.json');

// Create server
// http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/html'
//     });
//     res.end('<h1>Hello, Node.js!</h1>');
// }).listen(3000, '