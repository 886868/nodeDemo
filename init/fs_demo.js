'use strict';

var fs = require('fs');

fs.readFile('sample.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

fs.readFile('nodejs.png',function(err,data){
	if(err){
		console.log(err);
		return;
	}

	console.log(data);
	console.log(data.length + ' bytes');
});