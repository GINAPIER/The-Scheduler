

//adding the date to the header

//$("#currentDay").get("display", function(){
//var currentHeaderDate = moment().format("MMMM Do YYYY");
//});


function getHeaderDate() {
    var currentHeaderDate = moment().format("MMMM Do YYYY");
    $("#currentDay").text(currentHeaderDate);
}
console.log(currentDay);




//local storage

function init() {
    var storedPresent = JSON.parse(localStorage.getItem("present"));

    if (storedPresent) {
        present = storedPresent;
    }
}
function storedPresent() {
    localStorage.setItem("present", JSON.stringify(present));
}

//crete an event listener
//var saveButton = "textinp"  
var $textarea = "saveBtn";
var $saveBtn = "textinp";

$(".saveBtn").on("click", function (event) {
    console.log(".text-center")
    event.preventDefault();

})
