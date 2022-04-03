document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show')
})

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.new-cards' , {delay: 400});
ScrollReveal().reveal('.cards-banner-one' , {delay: 400});
ScrollReveal().reveal('.sistemas' , {delay: 400});

//type writer effect for heading text
var text = document.getElementById("bienvenida");
var str = text.innerHTML;

text.innerHTML = "";

var speed = 200;
var i = 0;
 //typewriter effect 
 function typewriter(){
     if(i < str.length){
         text.innerHTML += str.charAt(i);
         i++
         setTimeout(typewriter, speed);

     }
 }
 setTimeout(typewriter, speed);

