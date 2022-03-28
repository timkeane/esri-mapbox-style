const HTML = './dist/index.html';

const fs = require('fs-extra');
require('dotenv').config()

fs.mkdirSync('dist');
fs.copySync('src', 'dist')


let html = fs.readFileSync(HTML, 'utf8');
html = html.replace(/ESRI_TOKEN/, process.env.ESRI_TOKEN);
html = html.replace(/MAPBOX_TOKEN/, process.env.MAPBOX_TOKEN);

fs.writeFileSync(HTML, html);
