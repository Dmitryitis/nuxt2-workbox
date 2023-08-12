const fs = require('fs')
const path = require('path')

const { curDirname, pathFixture } = require('../constants')

module.exports = function readFixtureFile (fileName) {
  return JSON.parse(fs.readFileSync(path.join(`${curDirname}${pathFixture}/`, fileName), 'utf8'))
}
