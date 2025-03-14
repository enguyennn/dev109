const images = [
    {src: "images/thank-me-later.jpg", description: "Thank Me Later (2010) - Drake\nThank Me Later was Drake's debut studio album with 14 tracks.", 
        alt: "Album cover; black and white picture of drake looking upwards with red coloration"},
    {src: "images/take-care.jpg", description: "Take Care (2011) - Drake\nTake Care was Drake's second studion album with the deluxe version having 19 tracks.", 
        alt: "Album cover; Drake looking at a golden chalice with a large golden candle adjacent"},
    {src: "images/nothing-was-the-same.png", description: "Nothing Was The Same (2013) - Drake\nNothing Was The Same was Drake's third studio album with 13 tracks, and contains one of my personal favorites, 'Hold On, We're Going Home'.",
        alt: "Album cover; Baby with an afro and comb in hair looking right, background is a blue sky filled with clouds"},
    {src: "images/views.jpg", description: "Views (2016) - Drake\nViews was Drake's fourth studion album with 20 tracks, and contains some of his most popular hits.", 
        alt: ""},
    {src: "images/scorpion.jpg", description: "Scorpion (2018) - Drake\nScorpion was Drake's fifth studio album with 25 tracks.", 
        alt: "Album cover; black and white picture of Drake with his signature"}
];

let currentIndex = 0;
let timer = 4;
let interval;

const slideImg = document.getElementById("slide-img");
const imgDescription = document.getElementById("description");
const pButton = document.getElementById("Previous");
const nButton = document.getElementById("Next");
const time = document.getElementById("timer");

function updateSlide(index) {
  slideImg.src = images[index].src
  imgDescription.textContent = images[index].description
  slideImg.alt = images[index].alt
}

function nextSlide() {
  currentIndex++;
  currentIndex = currentIndex % images.length;
  updateSlide(currentIndex);
  resetTimer();
}

function previousSlide() {
  currentIndex--;
  currentIndex = currentIndex % images.length;
  updateSlide(currentIndex);
  resetTimer();
}

function resetTimer(){
  clearInterval(interval)
  timer = 4;
  time.textContent = timer;
  startTimer();
}

function startTimer(){
  interval = setInterval(timerAdjustment(), 1000);
}

function timerAdjustment(){
  timer--;
  time.textContent = timer;
  if (timer === 0){
    nextSlide();
  }
}

pButton.addEventListener("click", previousSlide);
nButton.addEventListener("click", nextSlide);

updateSlide(currentIndex);
startTimer();