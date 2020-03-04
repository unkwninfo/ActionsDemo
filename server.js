/**
 * @name server
 * @description update README.md
 * @author unkwn
 */

"use strict";

const fs = require('fs');

let data = "# ActionsDemo\nTest Actions\n\n"
    + "### src/log\n"
    + "```log\n"
    + fs.readFileSync('src/log')
    + "\n```\n\n"
    + "### .github/workflows/main.yml\n"
    + "```yml\n"
    + fs.readFileSync('.github/workflows/main.yml')
    + "\n```\n";

fs.writeFileSync('README.md', data, (err) => {
    return console.error(err);
});
