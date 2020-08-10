//Insert Date into JumboTron

var timeDate = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").append(timeDate);

console.log(timeDate)

//Grab the Container 
var planner = $(".container")

//create an array with numbers for working hours.
var myHours = ["08 am", "09 am", "10 am", "11 am", "12 pm", "01 pm", "02 pm", "03 pm", "04 pm"];

console.log(myHours)
//create a for loop
for (var i = 0; i < 9; i++) {

    //make our elements 
    var row = $("<div>");
    var hour = $("<div>");
    var text = $("<input>");
    var save = $("<button>");


    //add class for rows and columns

    $(row).addClass("row");
    $(hour).addClass("col-sm-2");
    $(hour).addClass("hour");
    $(text).addClass("text");
    $(text).addClass("past");
    $(text).addClass("col-sm-8");
    $(save).addClass("button");
    $(save).addClass("saveBtn");
    $(save).addClass("col-sm-2");


    //add id attributes
    $(hour).attr("id", myHours[i])
    //add text attributes to the buttons and hour columns
    save.text("save");
    hour.text(myHours[i])
    console.log(myHours[i])
    //appending our new elements
    planner.append(row)
    row.append(hour)
    row.append(text)
    row.append(save)

    

    //create on click event for save
    function renderSaves() {
        save.on("click", function (event) {
            event.preventDefaul();

        })
    }


}


//local storage

var plans = [];
init
function renderPlans() {
  text.innerHTML ="";
  text.textContent = plans.length;  
  for (var i = 0; i <plans.length; i++){
      var plans = plans[i];
      plans.append(saveBtn)
  }

}   

function init() {
    var storedPlans = JSON.parse(localStorage.getItem("storedPlans"));

    if (storedPlans !== null) {
        plans = storedPlans;
    }

    renderPlans();
}

function storedPlans() {
    localStorage.setItem("plans", JSON.stringify(plans));
}

$("plans").on("submit", function (event) {
    event.preventDefault();
    var textContent = (".text-input").val().trim();
}
)


$("plans").on("click",function (event){
var element =event.target;
if (element.matches("button")===true  ){
var index = element.parentElement.attr("data-index")
plans.splice(index, 1);
}
})


$(".saveBtn").on("click", function () {
     var plans =$(this).siblings(".description").children(".future").attr("id");
     plans =$(this).siblings(".description").children(".future").val();
     $("plans").submit()
 })
storedPlans();
// $(".saveBtn").on("click", function () {
//     var text = document.querySelector("text")
//     save.innerHTML = ""
//     $("text").submit()
// })