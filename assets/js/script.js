var today = document.querySelector("#theDate");

let objectDate = new Date();
let day = objectDate.getDate();
console.log(day); // 23

let month = objectDate.getMonth();
console.log(month + 1); // 8

let year = objectDate.getFullYear();
console.log(year); // 2022

let format1 = month + "/" + day + "/" + year;
console.log(format1); // 7/23/2022

today.textContent = "Today's date: " + format1;

var measureWeight = document.getElementById("theWeight");

var weight;



const weightStored = JSON.parse(localStorage.getItem("weightRecord")) || [];

storDate = weightStored.map(record => {
    return record.myDate;
})

console.log(typeof(storDate));
console.log(storDate[0]);
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

var recordBtn = document.querySelector("#recordBtn");

recordBtn.addEventListener("click", addWeight);

function addWeight(){
    console.log(Date.now());
    console.log(measureWeight.value)


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