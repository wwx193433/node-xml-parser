'use strict';

var fs = require('fs');
var xmlreader = require('xmlreader');
let xmlFile = fs.readFileSync('./xml_sample.xml','utf-8');

 
xmlreader.read(xmlFile, function(errors, res){
	if(null !== errors ){
		console.log(errors)
		return;
	}
    console.log(res.class.student.array[0].name.text());
    res.class.student.array[0].name.text='wang wu';

});
