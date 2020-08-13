"use strict";

const fs = require('fs');
function noop() {};

let levels =
{
  "debug":
  {
    console: false,
    file: null
  },
  "error":
  {
    console: true,
    file: null
  }
};

function log(level, ...txt)
{
  if (levels[level])
  {
    if (levels[level].console) console.log(new Date().toISOString(), ...txt);
    if (levels[level].file) fs.appendFile(levels[level].file, new Date().toISOString() + ' ' + txt.join(' '), noop);
  }
}

module.exports.log = log;
module.exports.levels = levels;
