function pad(n){
	return (n < 10) ? '0' + n : n;
}

function timer(){
	var now   = new Date,
	// Math, yo. If hrs divides cleanly by 12, that is the hr. Otherwise, 12
		hrs   = now.getHours() % 12 || 12,
		min   = now.getMinutes(),
		sec   = now.getSeconds(),
		timestr   = [ pad(hrs), (pad(min)), (pad(sec)) ].join(':');

	document.getElementById('time').innerHTML = timestr;
	setTimeout(timer, 1000);
}

function getDate(){
	var today = new Date,
		dd    = today.getDate(),
		mm    = today.getMonth() + 1,
		yyyy  = today.getFullYear();

	today = [pad(mm), pad(dd), yyyy].join('-');
	document.getElementById('date').innerHTML = today;
}

window.onload = function(){
	timer();
	getDate();
};

