const total = 5;
let found = 0;

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