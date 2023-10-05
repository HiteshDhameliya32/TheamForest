// comming soon-1
function displayTime() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');
    var fy = dateTime.getFullYear('fy');
  
    if (hrs >= 12) {
        session.innerHTML = 'PM';
    } else {
        session.innerHTML = 'AM';
    }
  
    if (hrs > 12) {
        hrs = hrs - 12;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (hrs < 10) {
        hrs = "0" + hrs;
    }
  
  
    document.getElementById('hours').innerHTML = hrs + " :";
    document.getElementById('minutes').innerHTML = min + " : ";
    document.getElementById('seconds').innerHTML = sec;
    document.getElementById('fy').innerHTML = fy;
  }
  setInterval(displayTime, 10);