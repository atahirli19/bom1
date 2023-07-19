//1

console.log(window.innerWidth);
console.log(window.innerHeight);


//2

document.getElementById("open").addEventListener("click", function(){
    window.open();
  });

  //3

  document.getElementById('close').addEventListener('click', function() {
    window.close();
  });
  

  //4

  function resizeWindow() {
    window.resizeTo(400, 300);
}

//5

const button = document.getElementById('resize');
button.addEventListener('click', function() {
  window.resizeTo(200, 200);
});

//6
console.log(screen.width);

//7

console.log(screen.height);


//8
document.querySelector('#demo').innerHTML=screen.availWidth


//9
document.querySelector('#demo').innerHTML=screen.availHeight


//10


//11
console.log(window.screen.height);

//12
document.getElementById('back').addEventListener('click', function() {
    window.history.back();
  });

  //13

  document.getElementById("next").addEventListener("click", function(){
    window.location.href = "https://www.youtube.com/";
  });
  

  //14
  console.log(navigator.cookieEnabled)


//15

console.log(document.title);

//16
console.log(navigator.AppName) 

//17

console.log(navigator.appVersion)

//18

console.log(navigator.userAgent)

//19

console.log(navigator.Platform)

//20
console.log(navigator.language)

//21
console.log(navigator.onLine)

//22
console.log(navigator.JavaEnabled())