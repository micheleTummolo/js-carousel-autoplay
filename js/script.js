//Creo array immagini
const imagesArray = [
    "01.webp",
    "02.webp",
    "03.webp",
    "04.webp",
    "05.webp"
]

//Creiamo dinamicamente i div con le immagini del carosello
let itemsContent = '';

for(let i = 0; i < imagesArray.length; i++){
    itemsContent += `<div class="item">
        <img src="./img/${imagesArray[i]}">
    </div>`
}

//inseriamo le immagini nel div che le deve contenere
const itemsSlider = document.querySelector('.item-slider');
itemsSlider.innerHTML += itemsContent;

//Prendiamo la prima immagine dell'array e la rendiamo attiva

//const items = document.querySelector('.item'); //ALTERNATIVA

const items = document.getElementsByClassName('item');
let itemActive = 0;

items[itemActive].classList.add('active');

//rendo attivo anche il primo cerchio di navigazione

const circles = document.getElementsByClassName('circle');

circles[itemActive].classList.add('active');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let time = 1000

next.addEventListener('click', function(){

    if (itemActive <= imagesArray.length){
        console.log ("Da: " + itemActive)

        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
        itemActive += 1;
        if (itemActive == imagesArray.length){
            itemActive = 0
        }
        items[itemActive].classList.add('active');
        circles[itemActive].classList.add('active');

        console.log ("A: " + itemActive)
    }
});

let nextAuto = setInterval(nextImg, time)
let stopButton = document.getElementById('stop')
let playButton = document.getElementById('play')

playButton.addEventListener('click', function() {
    nextAuto = setInterval(nextImg, time)
})

stopButton.addEventListener('click', function() {
    clearInterval(nextAuto)
})

/* Autoplay function */
function nextImg() {
    console.log ("Da: " + itemActive)

    items[itemActive].classList.remove('active');
    circles[itemActive].classList.remove('active');
    itemActive += 1;
    if (itemActive == imagesArray.length){
        itemActive = 0
    }
    items[itemActive].classList.add('active');
    circles[itemActive].classList.add('active');

    console.log ("A: " + itemActive)
}
/* Autoplay function */

prev.addEventListener('click', function(){
    
    if (itemActive >= 0){
        console.log ("Da: " + itemActive)

        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
        if (itemActive == 0){
            itemActive = 4
        }else {
            itemActive -= 1;
        }
        items[itemActive].classList.add('active');
        circles[itemActive].classList.add('active');

        console.log ("A: " + itemActive)
    }
})


