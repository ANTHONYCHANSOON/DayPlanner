let myVar = [
    {
        time: "0900",
        event: "",
    },
    {
        time: "1000",
        event: "",
    },
    {
        time: "1100",
        event: "",
    },
    {
        time: "1200",
        event: "",
    },
    {
        time: "1300",
        event: "",
    },
    {
        time: "1400",
        event: "",
    },
    {
        time: "1500",
        event: "",
    },
    {
        time: "1600",
        event: "",
    },
    {
        time: "1700",
        event: "",
    }];

checklocalstorage();
gettimedate();
changezone();

$(".input").on("keyup", function () {
    let newstring = "";
    newstring = $(this).val();
    console.log(newstring);

    $(".submitbuttons").on("click", function () {
        event.preventDefault();
        let btnclick = $(this).attr("data-name");
        console.log(btnclick);
        myVar[btnclick].event = newstring;
        addtolocalstorage(btnclick);
    })

    function addtolocalstorage(x) {
        localStorage.setItem("myVar", JSON.stringify(myVar));
        //localStorage.setItem("event", myVar[x].event);
    }
})

function checklocalstorage() {

    let storedmyVar = JSON.parse(localStorage.getItem("myVar"));

    if (storedmyVar !== null) {
        //alert("storedmyvar is not empty");
        myVar = storedmyVar;
        //console.log(myVar);
    }

    renderlocalstorage();
}

function renderlocalstorage() {

    for (let i = 0; i < myVar.length; i++) {

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
        newDivSched.val(myVar[i].event);
        newDivSched.addClass("col-sm-6 input");
        newDivSched.attr("id", "i" + myVar[i].time + "inputpast");
        newDivSched.attr("data-name", myVar[i].time);
        //console.log(newDivSched);
        newTime.append(newDivSched);

        let newDivBtn = $("<button>");
        newDivBtn.text("submit");
        newDivBtn.attr("data-name", i);
        newDivBtn.addClass("col-sm-3 submitbuttons");
        newTime.append(newDivBtn);
    }
}

function gettimedate() {
    let today = new Date();
    let date = (today.getMonth() + 1) + "-" + today.getDate() + "-" + today.getFullYear();
    let newDivdate = $("<h4>");
    newDivdate.text(date);
    $("#jumbotrondate").append(newDivdate);

    let time = today.getHours() + ":" + today.getMinutes();
    let newDivtime = $("<h4>");
    newDivtime.text(time);
    $("#jumbotrondate").append(newDivtime);
}

function changezone() {

    let today = new Date();
    let comparetime = today.getHours();
    //let comparetime = 1;
    //console.log(comparetime);
    let time09 = 9;
    let time10 = 10;
    let time11 = 11;
    let time12 = 12;
    let time13 = 13;
    let time14 = 14;
    let time15 = 15;
    let time16 = 16;
    let time17 = 17;

    //alert(today.getHours());

    if (comparetime < time09) 
    {
        let yes = document.querySelector("#i0900inputpast");
        yes.setAttribute("id", "i0900inputfuture");
    } 
    else if (comparetime === time09) 
    {
        let yes = document.querySelector("#i0900inputpast");
        yes.setAttribute("id", "i0900inputpresent");
    } 
    else if(comparetime > time09)
    {
        let yes = document.querySelector("#i0900inputpast");
        yes.setAttribute("id", "i0900inputpast");
    }

    if (comparetime < time10) 
    {
        let yes = document.querySelector("#i1000inputpast");
        yes.setAttribute("id", "i1000inputfuture");
    } 
    else if (comparetime === time10) 
    {
        let yes = document.querySelector("#i1000inputpast");
        yes.setAttribute("id", "i1000inputpresent");
    } 
    else if(comparetime > time10)
    {
        let yes = document.querySelector("#i1000inputpast");
        yes.setAttribute("id", "i1000inputpast");
    }

    if (comparetime < time11) 
    {
        let yes = document.querySelector("#i1100inputpast");
        yes.setAttribute("id", "i1100inputfuture");
    } 
    else if (comparetime === time11) 
    {
        let yes = document.querySelector("#i1100inputpast");
        yes.setAttribute("id", "i1100inputpresent");
    } 
    else if(comparetime > time11)
    {
        let yes = document.querySelector("#i1100inputpast");
        yes.setAttribute("id", "i1100inputpast");
    }

    if (comparetime < time12) 
    {
        let yes = document.querySelector("#i1200inputpast");
        yes.setAttribute("id", "i1200inputfuture");
    } 
    else if (comparetime === time12) 
    {
        let yes = document.querySelector("#i1200inputpast");
        yes.setAttribute("id", "i0900inputpresent");
    } 
    else if(comparetime > time12)
    {
        let yes = document.querySelector("#i1200inputpast");
        yes.setAttribute("id", "i0900inputpast");
    }

    if (comparetime < time13) 
    {
        let yes = document.querySelector("#i1300inputpast");
        yes.setAttribute("id", "i1300inputfuture");
    } 
    else if (comparetime === time13) 
    {
        let yes = document.querySelector("#i1300inputpast");
        yes.setAttribute("id", "i1300inputpresent");
    } 
    else if(comparetime > time13)
    {
        let yes = document.querySelector("#i1300inputpast");
        yes.setAttribute("id", "i1300inputpast");
    }

    if (comparetime < time14) 
    {
        let yes = document.querySelector("#i1400inputpast");
        yes.setAttribute("id", "i1400inputfuture");
    } 
    else if (comparetime === time14) 
    {
        let yes = document.querySelector("#i1400inputpast");
        yes.setAttribute("id", "i1400inputpresent");
    } 
    else if(comparetime > time14)
    {
        let yes = document.querySelector("#i1400inputpast");
        yes.setAttribute("id", "i1400inputpast");
    }

    if (comparetime < time15) 
    {
        let yes = document.querySelector("#i1500inputpast");
        yes.setAttribute("id", "i1500inputfuture");
    } 
    else if (comparetime === time15) 
    {
        let yes = document.querySelector("#i1500inputpast");
        yes.setAttribute("id", "i1500inputpresent");
    } 
    else if(comparetime > time15)
    {
        let yes = document.querySelector("#i1500inputpast");
        yes.setAttribute("id", "i1500inputpast");
    }

    if (comparetime < time16) 
    {
        let yes = document.querySelector("#i1600inputpast");
        yes.setAttribute("id", "i0900inputfuture");
    } 
    else if (comparetime === time16) 
    {
        let yes = document.querySelector("#i1600inputpast");
        yes.setAttribute("id", "i1600inputpresent");
    } 
    else if(comparetime > time16)
    {
        let yes = document.querySelector("#i1600inputpast");
        yes.setAttribute("id", "i1600inputpast");
    }

    if (comparetime < time17) 
    {
        let yes = document.querySelector("#i1700inputpast");
        yes.setAttribute("id", "i1700inputfuture");
    } 
    else if (comparetime === time17) 
    {
        let yes = document.querySelector("#i1700inputpast");
        yes.setAttribute("id", "i1700inputpresent");
    } 
    else if(comparetime > time17)
    {
        let yes = document.querySelector("#i1700inputpast");
        yes.setAttribute("id", "i1700inputpast");
    }


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




