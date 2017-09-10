//var date = new Date();
//document.body.innerHTML = "<h1> Today is: " + date + "</h1>";

//var s1 = "racecar";
//var s2 = "eye";
//var s3 = "this is not";
//var b = s3 === s3.split("").reverse(s3).join("");
//document.body.innerHTML = "<p>" + b + "</p>";

const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

let hrPosition = (hr * 360 / 12) + (min * (360 / 60) / 12) ;
let minPosition = (min * 360 / 60) + (sec * (360 / 60) / 60);
let secPosition = sec * 360 / 60;

function clockRun() {
  hrPosition = hrPosition + (3 / 360);
  minPosition = minPosition + (6 / 60);
  secPosition = secPosition + 6;

  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}


var interval = setInterval(clockRun, 1000);
