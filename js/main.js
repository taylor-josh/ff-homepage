const monthNames = ["January", "February", "March", "April", "May", "June",
	"July", "August", "September", "October", "November", "December"];

function zeroPad(n){
	return (n < 10) ? '0' + n : n;
}

function timer(){
	var now   = new Date,
		// Math, yo. If hrs divides cleanly by 12, that is the hr. Otherwise, 12
		hrs   = now.getHours() % 12 || 12,
		min   = now.getMinutes(),
		suffix = (hrs > 12 && hrs < 0) ? "am" : "pm";

		timestr   = [ zeroPad(hrs), (zeroPad(min))].join(':') + " " + suffix;

	document.getElementById('time').innerHTML = timestr;
	setTimeout(timer, 1000);
}

function getDate(){
	var today = new Date,
		dd    = today.getDate(),
		mm		= monthNames[today.getMonth()],
		yyyy  = today.getFullYear();

	today = mm + " " + dd + ", " + yyyy;
	document.getElementById('date').innerHTML = today;
}

window.onload = function(){
	timer();
	getDate();
};
