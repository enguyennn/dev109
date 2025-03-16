const imgSrc = "images/i-spy-game.jpg"; // Constant background image
const levels = [ // Array for the coordinates of each level
  {
    items: [
      { id: "banana", name: "Banana", coords: "462,752,469,780,541,769,552,757,569,748,548,742,521,738,492,741" },
      { id: "fan", name: "Fan", coords: "240,395,263,363,324,356,349,380,360,412,321,430,284,408,254,409" },
      { id: "dart", name: "Dart", coords: "682,243,695,235,706,247,698,256,622,309,684,253" },
      { id: "lion", name: "Lion", coords: "533,231,527,248,572,291,576,271,585,251,556,223" },
      { id: "apple", name: "Apple Core", coords: "658,409,638,397,627,407,627,444,650,450,659,446" }
    ]
  }, 
  {
    items: [
      { id: "ribbon", name: "Ribbon", coords: "1244,311,1226,311,1217,327,1221,344,1227,356,1226,375,1235,380,1236,413,1226,423,1249,425,1250,356,1256,346,1262,339,1261,326,1259,317"},
      { id: "camera", name: "Camera", coords: "750,408,728,407,707,416,685,422,680,453,702,464,724,465,743,450,776,432"},
      { id: "basketball", name: "Basketball", coords: "453,234,440,235,436,247,440,254,449,256,461,247"},
      { id: "light", name: "Light Switch", coords: "1264,210,1223,206,1217,276,1264,282"},
      { id: "golf", name: "Golf Ball", coords: "408,787,412,806,435,798,431,776,418,775"}
    ]
  },
  {
    items: [
      { id: "harmonica", name: "Harmonica", coords: "214,84,229,83,240,79,316,83,317,90,326,92,318,98,307,103,218,97"},
      { id: "abacus", name: "Abacus", coords: "1010,349,987,443,854,425,853,404,833,392,847,323"},
      { id: "feather", name: "Feather", coords: "859,292,876,274,904,249,966,240,971,251"},
      { id: "horse", name: "Horse", coords: "336,47,330,64,339,77,333,105,342,105,357,87,374,85,377,104,386,104,383,67"},
      { id: "seashell", name: "Seashell", coords: "316,295,350,283,370,293,380,323,342,329"}
    ]
  }
];

const total = 5;
let found = 0;
let currentLevel = 0;

function foundItem(name){
  let item = document.getElementById(name);
  if (!item.classList.contains("f")){
    item.classList.add("f");
    item.style.textDecoration="line-through";
    found++;
    
    if (found === total){
      document.getElementById('again').style.display = "block";
    }
  }
}

var bananaArea = document.getElementById("Banana")
bananaArea.addEventListener("click", function() {
  foundItem("banana");
}, false);

var fanArea = document.getElementById("Fan");
fanArea.addEventListener("click", function () {
  foundItem("fan");
}, false);

var dartArea = document.getElementById("Dart");
dartArea.addEventListener("click", function () {
  foundItem("dart");
}, false);

var lionArea = document.getElementById("Lion");
lionArea.addEventListener("click", function () {
  foundItem("lion");
}, false);

var appleArea = document.getElementById("Apple");
appleArea.addEventListener("click", function () {
  foundItem("apple");
}, false);

function replay(){
  location.reload();
}