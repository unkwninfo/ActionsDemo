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
    + '    <link href="https://cdn.bootcss.com/github-markdown-css/4.0.0/github-markdown.min.css" rel="stylesheet">\n'
    + '    <style>\n'
    + '        .markdown-body {\n'
    + '            box-sizing: border-box;\n'
    + '            min-width: 200px;\n'
    + '            max-width: 980px;\n'
    + '            margin: 0 auto;\n'
    + '            padding: 45px;\n'
    + '        }\n'
    + '        @media (max-width: 767px) {\n'
    + '            .markdown-body {\n'
    + '                padding: 15px;\n'
    + '            }\n'
    + '        }\n'
    + '    </style>\n'
    + '</head>\n'
    + '<body>\n'
    + '    <article class="markdown-body">\n'
    + '        <h1>ActionsDemo</h1>\n'
    + '        <p>Test Actions</p>\n'
    + '        <h2>src/log</h2>\n'
    + '        <pre>\n'
    + fs.readFileSync('src/log')
    + '        </pre>\n'
    + '        <h2>.github/workflows/main.yml</h2>\n'
    + '        <pre>\n'
    + fs.readFileSync('.github/workflows/main.yml')
    + '        </pre>\n'
    + '    </article>\n'
    + '</body>\n'
    + '</html>\n';

fs.writeFileSync('docs/index.html', data, (err) => {
    return console.error(err);
});

console.log('docs/index.html is updated');
