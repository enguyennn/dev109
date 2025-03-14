const images = [
    {src: "images/image1.jpg", description: "Description of Image 1", alt: ""},
    {src: "images/image2.jpg", description: "Description of Image 2", alt: ""},
    {src: "images/image3.jpg", description: "Description of Image 3", alt: ""},
    {src: "images/image4.jpg", description: "Description of Image 4", alt: ""},
    {src: "images/image5.jpg", description: "Description of Image 5", alt: ""}
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

pButton.eventListener("click", previousSlide);
nButton.eventListener("click", nextSlide);

updateSlide(currentIndex);
startTimer();