'use strict';

var s = 'Hello';

function greet(name) {
    console.log(s + ', ' + name + '!');
}

function hello() {
	console.log('hello function.');
}


module.exports.greet = greet;
module.exports.hello = hello;