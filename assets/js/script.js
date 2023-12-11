var today = document.querySelector("#theDate");

let objectDate = new Date();
let day = objectDate.getDate();


let month = objectDate.getMonth();


let year = objectDate.getFullYear();


let format1 = month + "/" + day + "/" + year;


today.textContent = "Today's date: " + format1;

var measureWeight = document.getElementById("theWeight");

var weight;



const weightStored = JSON.parse(localStorage.getItem("weightRecord")) || [];

var storDate = weightStored.map(record => {
    return record.myDate;
});

var weights = [];
const lastWeight = weightStored.map(record => {
    weights.push(record.myWeight);
    return record.myWeight;
});
//console.log(weights);
var lastStoredWeight = weights.slice(-1);
var newWeight = parseFloat(lastStoredWeight);



console.log("last: " + lastWeight);
console.log(lastWeight.myWeight);

console.log(typeof(storDate));
//console.log(storDate[0]);
var timestamp = storDate[0];
console.log(typeof(timestamp));
var convertdate = new Date(timestamp);
var theday = convertdate.getDate() + '/' +  convertdate.getMonth() + '/' + convertdate.getFullYear();
console.log(theday);

function reduceDate(number){
     var convertIt = new Date(number);
     var myday = convertIt.getDate() + '/' +  convertIt.getMonth() + '/' + convertIt.getFullYear();
     return myday;

}

for (var i = 190; i < 260; i++) {
    for (var j = 0; j <= 10; j++) {
      var k = i + "." + j;
      var k = parseFloat(k);
      weight +="<option>"+ k + "</option>";
              }
  }

measureWeight.innerHTML = weight;

  measureWeight.value = newWeight;


var recordBtn = document.querySelector("#recordBtn");

recordBtn.addEventListener("click", addWeight);

function addWeight(){
    //console.log(Date.now());
   // console.log(measureWeight.value);
 

    //declaring weight object
    var weightTracking = {
        myDate: Date.now(),
        myWeight: measureWeight.value
    }
      
    weightStored.push(weightTracking);
    localStorage.setItem("weightRecord", JSON.stringify(weightStored) );
    window.location.reload();

}

const trackingList = document.getElementById("trackingList");

trackingList.innerHTML = weightStored.map( record => {
    return `<li class="weight-today">${reduceDate(record.myDate)} = ${record.myWeight}</li>`;
}).join("");

clearBtn.addEventListener("click", clearWeight);

function clearWeight(){
   localStorage.removeItem("weightRecord");
   window.location.reload();
}