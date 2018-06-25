const model = require('./model');

let userInfo = model.UserInfo;

(async() => {
	var user = await userInfo.create({
		name: 'John',
        gender: false,
        email: 'john-' + Date.now() + '@garfield.pet',
        passwd: 'hahaha'
	});
	process.exit(0);
})();


