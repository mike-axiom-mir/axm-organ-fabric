'use strict';
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, 'runtime', 'organs');

function list() {
  return fs.readdirSync(root)
    .filter(name => name.endsWith('.json'))
    .sort()
    .map(name => ({ file: name, ...JSON.parse(fs.readFileSync(path.join(root, name), 'utf8')) }));
}

function get(id, version) {
  return list().find(o => o.id === id && (version === undefined || o.version === version)) || null;
}

module.exports = { list, get };
