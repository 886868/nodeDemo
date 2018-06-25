const Koa = require('koa');

/**
const fn_router = require('koa-router');
const router = fn_router();
**/
const router = require('koa-router')();

const bodyParser = require('koa-bodyparser');

const app = new Koa();



app.use(async (ctx, next) => {
    await next(); // 调用下一个middleware
    console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
});

app.use(async (ctx, next) => {
    const start = new Date().getTime(); // 当前时间
    await next(); // 调用下一个middleware
    const ms = new Date().getTime() - start; // 耗费时间
    console.log(`Time: ${ms}ms`); // 打印耗费时间
});

router.get('/hello/:name', async(ctx, next) => {
	let name = ctx.params.name;
	ctx.response.body = `<h1>Hello, ${name}</h1>`;
});

router.get('/', async(ctx, next) => {
	ctx.response.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
});

app.use(bodyParser());
router.post('/signin', async(ctx, next) => {
	let name = ctx.request.body.name || '';
	let password = ctx.request.body.password || '';
	console.log(`signin with name: ${name}, password:${password}`);

	if(name === 'koa' && password ==='12345') {
		ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
	} else {
		ctx.response.body = `<h1>Login failed!</h1>
		<p><a href="/">Try again</a></p>`;

	}
});

app.use(router.routes());

// app.use(async(ctx, next) => {
// 	await next();
// 	let tp = 'aaa';
// 	ctx.response.type = `text/html`;
// 	ctx.response.body = `<h1>hello koa,${tp}</h1>`;
// });

app.listen(3000);
console.log('app started at port 3000...');