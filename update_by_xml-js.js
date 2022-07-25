'use strict';

var fs = require('fs');
var convert = require('xml-js');

let xmlFile = fs.readFileSync('./xml_sample.xml','utf-8');
let res = convert.xml2json(xmlFile, {compact: true, spaces: 4});
let data = JSON.parse(res);
data.class.student[0].name='scott x f wang';

var options = {compact: true, ignoreComment: true, spaces: 4};
var result = convert.json2xml(data, options);

fs.writeFile('./xml_sample.xml', result, (err) => {
    if (err) throw err;
    console.log('It\'s saved!');
});