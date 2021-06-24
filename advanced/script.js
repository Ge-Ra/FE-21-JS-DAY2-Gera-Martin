function timeConvert(n) {
  var num = n;
  var hours = (num / 60); // 1.6666
  var rhours = Math.floor(hours); // 1
  var minutes = (hours - rhours) * 60; // (1.666 - 1) * 60
  var rminutes = Math.round(minutes); // 40
  return num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
  }
  
  console.log(timeConvert(100));