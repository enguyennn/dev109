// Array for objects, all containing necessary information to produce the carousel and keeps everything ordered
const images = [ 
    {src: "images/thank-me-later.jpg", description: "Thank Me Later (2010) - Drake<br>Thank Me Later was Drake's debut studio album with 14 tracks.", 
        alt: "Album cover; black and white picture of drake looking upwards with red coloration"},
    {src: "images/take-care.jpg", description: "Take Care (2011) - Drake<br>Take Care was Drake's second studion album with the deluxe version having 19 tracks.", 
        alt: "Album cover; Drake looking at a golden chalice with a large golden candle adjacent"},
    {src: "images/nothing-was-the-same.png", description: "Nothing Was The Same (2013) - Drake<br>Nothing Was The Same was Drake's third studio album with 13 tracks, and contains some of my personal favorites.",
        alt: "Album cover; Baby with an afro and comb in hair looking right, background is a blue sky filled with clouds"},
    {src: "images/views.jpg", description: "Views (2016) - Drake<br>Views was Drake's fourth studion album with 20 tracks, and contains some of his most popular hits.", 
        alt: ""},
    {src: "images/scorpion.jpg", description: "Scorpion (2018) - Drake<br>Scorpion was Drake's fifth studio album with 25 tracks.", 
        alt: "Album cover; black and white picture of Drake with his signature"}
];

// Initializing necessary variables to change the slides 
let currentIndex = 0;
const slideImg = document.getElementById("slide-img");
const imgDescription = document.getElementById("description");
const pButton = document.getElementById("Previous");
const nButton = document.getElementById("Next");

// Changes the slide to the "next" slide by changing the image and description to the next in the array
function updateSlide(index) {
  slideImg.src = images[index].src;
  imgDescription.innerHTML = images[index].description;
  slideImg.alt = images[index].alt;
}

// Displays the next image and description in the array 
function nextSlide() {
  currentIndex++;
  currentIndex = currentIndex % images.length;
  updateSlide(currentIndex);
  resetTimer();
}

// Displays the previous image and description in the array
function previousSlide() {
  currentIndex--;
  currentIndex = currentIndex % images.length;
  updateSlide(currentIndex);
  resetTimer();
}

// Initialize all necessary variables for the timer 
let timer = 4;
let interval;
const time = document.getElementById("timer");

// Resets the timer and its display
function resetTimer(){
  clearInterval(interval)
  timer = 4;
  time.textContent = timer;
  startTimer();
}

// Sets the timer to count down every second
function startTimer(){
  interval = setInterval(timerAdjustment, 1000);
}

// Called every second, updating the display and if the time hits zero, moves onto the next slide
function timerAdjustment(){
  timer--;
  time.textContent = timer;
  if (timer === 0){
    nextSlide();
  }
}

// Event listeners for the next and previous buttons to call the correct function 
pButton.addEventListener("click", previousSlide);
nButton.addEventListener("click", nextSlide);

// Necessary function calls for correct display when the website opens
updateSlide(currentIndex);
startTimer();