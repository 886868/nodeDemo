function takeLongTime(n) {
	return new Promise(resolve => {
		setTimeout(() => resolve("long_time_value"), 2000);
	});
}

takeLongTime().then(v => {
	console.log("got", v);
});