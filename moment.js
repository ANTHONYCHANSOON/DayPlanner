let myVar = [
{
    time: "0900",
    event: "event09",
},
{
    time: "1000",
    event: "event10",
},
{
    time: "1100",
    event: "event11",
},
{
    time: "1200",
    event: "event12",
},
{
    time: "1300",
    event: "event13",
},
{
    time: "1400",
    event: "event14",
},
{
    time: "1500",
    event: "event15",
},
{
    time: "1600",
    event: "event16",
},
{
    time: "1700",
    event: "event17",
}];


for(let i = 0; i < myVar.length; i++)
{
    let head = myVar[i].time;
    //console.log(myVar[i].time);
    let newTime = $("<row>");
    newTime.attr("id", myVar[i].time);
    newTime.addClass("row");
    $("#headtable").append(newTime);

    let newDivTime = $("<div>");
    newDivTime.text(myVar[i].time);
    newDivTime.addClass("col-sm-3");
    newTime.append(newDivTime);

    let newDivSched = $("<input>");
    newDivSched.text(myVar[i].event);
    newDivSched.addClass("col-sm-6 input");
    newDivSched.attr("data-name", myVar[i].time);
    //console.log(newDivSched);
    newTime.append(newDivSched);

    let newDivBtn = $("<button>");
    newDivBtn.text("submit");
    newDivBtn.attr("data-name", i);
    newDivBtn.addClass("col-sm-3 submitbuttons");
    newTime.append(newDivBtn);
}

$(".input").on("keyup", function(){
    let newstring = "";
    newstring = $(this).val();
    console.log(newstring);

    $(".submitbuttons").on("click", function(){
        event.preventDefault();
        let btnclick = $(this).attr("data-name");
        console.log(btnclick);
        myVar[btnclick].event = newstring;
        addtolocalstorage(btnclick);
    })

    function addtolocalstorage (x) {
        localStorage.setItem("myVar", JSON.stringify(myVar));
        //localStorage.setItem("event", myVar[x].event);
    }
})

function renderlocalstorage() {
    JSON.parse(localStorage.getItem("myVar"));
}



// $(".submitbuttons").on("click", function() {
    
//     event.preventDefault();
//     let btnclick = $(this).attr("data-name");
//     console.log(btnclick);
//     // let newstring = $(".input").val();
//     // alert(newstring);


//     $(".input").on("keydown", function() {
        
//         newstring = newstring + $(this).val();
//         console.log(newstring);
        
//     })
//     myVar[btnclick].event = newstring;
// })


    // console.log(myVar);
    // let newstring = $("#input[").
    //let newevent = $("#input[]").val().trim();
    
    //console.log(myVar[newstring].event);
    
    
    // myVar[newstring].event = newDivSched.text.val();
    // console.log(myVar[newstring].event);

    //Look for an event listener that logs either key press or value
    //store the string in a variable (optional);
    //Save to localstorage

    //Create an empty variable = $('<div>')
    //Append to emptyV because your loop will be creating the divs with the corresponding name.

    


