const db = require('../db');

module.exports = db.defineModel('user_info',{
	email: {
		type: db.STRING(100),
		unique: true
	},
	passwd: db.STRING(100),
	name:db.STRING(100),
	gender: db.BOOLEAN
});