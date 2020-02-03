var yoga = document.querySelector('button');
yoga.onclick = function color (){
  yoga.style.backgroundColor= "#58D68D";
};

function jilla(x) {
  yoga.addEventListener('click' , function() {
    setTimeout ( function() {
       var audio = new Audio('music/beep.mp3');
       audio.play();
     }, x);
  }, {
    once: true
  } );

}
jilla(360000);
jilla(720000);
jilla(900000);
jilla(1260000);
