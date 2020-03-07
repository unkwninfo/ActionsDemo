/**
 * @name server
 * @description update README.md
 * @author unkwn
 */

"use strict";

const fs = require('fs');

let data = '<!DOCTYPE html>\n'
    + '<html lang="zh">\n'
    + '<head>\n'
    + '    <meta charset="UTF-8">\n'
    + '    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n'
    + '    <title>ActionsDemo</title>\n'
    + '</head>\n'
    + '<body>\n'
    + '    <h1>ActionsDemo</h1>\n'
    + '    <p>Test Actions</p>\n'
    + '    <h2>src/log</h2>\n'
    + '    <p>\n'
    + fs.readFileSync('src/log')
    + '    </p>\n'
    + '    <h2>.github/workflows/main.yml</h2>\n'
    + '    <p>\n'
    + fs.readFileSync('.github/workflows/main.yml')
    + '    </p>\n'
    + '</body>\n'
    + '</html>\n';

fs.writeFileSync('docs/index.html', data, (err) => {
    return console.error(err);
});
