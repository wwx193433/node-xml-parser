'use strict';

var fs = require('fs');
var convert = require('xml2js');
let xmlFile = fs.readFileSync('./xml_sample.xml','utf-8');
convert.parseString(xmlFile, function (err, result) {
    result.class.student[0].name='zhangsan';
    var builder = new convert.Builder();
    var newXML = builder.buildObject(result);
    fs.writeFile('./xml_sample.xml', newXML.toString(), function (error) {
        if (error) {
            console.log('写入失败')
        } else {
            console.log('写入成功了')
        }
    });
});
