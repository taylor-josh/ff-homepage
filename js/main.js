function timer(){
  function pad(n){
    return (n < 10) ? '0' + n : n;
  }

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
  var today = new Date;
  var dd    = today.getDay();
  var mm    = today.getMonth() + 1;
  var yyyy  = today.getFullYear();

  if(dd < 10){
    dd ='0' + dd;
  }

  if(mm < 10){
    mm ='0' + mm;
  }

  today = mm + ' - ' + dd + ' - ' + yyyy;
  document.getElementById('date').innerHTML = today;
}

window.onload = function(){
  timer();
  getDate();
}
