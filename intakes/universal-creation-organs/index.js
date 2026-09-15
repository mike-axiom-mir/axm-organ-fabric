'use strict';
const fs=require('fs');
const path=require('path');
const root=__dirname;
function readJson(dir,name){ return JSON.parse(fs.readFileSync(path.join(root,dir,name),'utf8')); }
function descriptive(){ return fs.readdirSync(path.join(root,'organs')).filter(x=>x.endsWith('.json')).sort().map(n=>({file:n,...readJson('organs',n)})); }
function executable(){ return fs.readdirSync(path.join(root,'executable-organs')).filter(x=>x.endsWith('.json')).sort().map(n=>({file:n,...readJson('executable-organs',n)})); }
function getExecutable(id,version){ return executable().find(o=>o.id===id && o.version===version)||null; }
module.exports={descriptive,executable,getExecutable};
