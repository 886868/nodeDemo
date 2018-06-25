const Sequelize = require('sequelize');
const config = require('./config');

var sequelize = new Sequelize(config.database, config.username, config.password,{
	host:config.host,
	dialect:'mysql',
	pool:{
		max:5,
		min:0,
		idel:30000
	}
});

var Girl = sequelize.define('girl',{
	id:{
		type:Sequelize.INTEGER,
		primaryKey: true,
	 	autoIncrement: true
	},
	name: Sequelize.STRING(100),
	age: Sequelize.INTEGER
},{
	// tableName:'girl',
	freezeTableName: true,
	createdAt: false,
	updatedAt: false
});

Girl.create({
	name:'aaaa',
	age:19
}).then(function (p){
	console.log('created.' + JSON.stringify(p));
}).catch(function(err){
	console.log('failed: ' + err);
});

(async () => {
	var pp = await Girl.create({
		name:'pp',
		age: 22
	});
	console.log('created: ' + JSON.stringify(pp));
})();