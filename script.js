function getAge() {
    let date = document.getElementById("date").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    if (date == ""){
        document.querySelector(".age").innerHTML = 
        "<span class='text-danger'> Date can not be null </span>";
        return;
    } else if (month == ""){
        document.querySelector(".age").innerHTML = 
        "<span class='text-danger'> Month can not be null </span>";
        return;
    } else if (year == ""){
        document.querySelector(".age").innerHTML = 
        "<span class='text-danger'> Year can not be null </span>";
        return;
    }
    let dt = new Date();
    let currentDate = dt.getDate();
    let currentMonth = dt.getMonth();
    let currentYear = dt.getFullYear();
    let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (date > currentDate){
        currentDate = currentDate + monthDays[currentMonth-1];
        currentMonth= currentMonth-1;
    }

    if (month > currentMonth){
        currentMonth=currentMonth+12;
        currentYear=currentYear-1;
    }

    let d = currentDate-date;
    let m = currentMonth-month;
    let y = currentYear-year;
    document.querySelector(".age").innerHTML = 
    'your age is <span class="text-color">' + 
    y + 
    '</span> Years <span class="text-color">' +
     m + 
    '</span> month <span class="text-color">' +
     d + 
    '</span> days <span class="text-color">';
}