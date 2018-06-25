'use strict';

// 引入hello模块:
var hello = require('./hello');

var s = 'Michael';

console.log(process.env.catalina_home);

hello.greet(s); // Hello, Michael!
hello.hello();