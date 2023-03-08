const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");


window.addEventListener("load", function(){
    weekly.style.opacity = "1";
});


const time = document.querySelectorAll(".container .timeNtext .time h3");

const text = document.querySelectorAll(".container .timeNtext .text");

daily.addEventListener("click", function(){
    daily.style.opacity = "1";
    weekly.style.opacity = ".5";
    monthly.style.opacity = ".5";

    time[0].textContent = "5hrs";
    time[1].textContent = "1hrs";
    time[2].textContent = "0hrs";
    time[3].textContent = "1hrs";
    time[4].textContent = "1hrs";
    time[5].textContent = "0hrs";

    text[0].textContent = "Last Day - 7hrs";
    text[1].textContent = "Last Day - 2hrs";
    text[2].textContent = "Last Day - 1hrs";
    text[3].textContent = "Last Day - 1hrs";
    text[4].textContent = "Last Day - 3hrs";
    text[5].textContent = "Last Day - 1hrs";
});

monthly.addEventListener("click", function(){
    monthly.style.opacity = "1";
    weekly.style.opacity = ".5";
    daily.style.opacity = ".5";

    time[0].textContent = "103hrs";
    time[1].textContent = "23hrs";
    time[2].textContent = "13hrs";
    time[3].textContent = "11hrs";
    time[4].textContent = "21hrs";
    time[5].textContent = "7hrs";

    text[0].textContent = "Last Month - 128hrs";
    text[1].textContent = "Last Month - 29hrs";
    text[2].textContent = "Last Month - 19hrs";
    text[3].textContent = "Last Month - 18hrs";
    text[4].textContent = "Last Month - 23hrs";
    text[5].textContent = "Last Month - 11hrs";
});

weekly.addEventListener("click", function(){
    weekly.style.opacity = "1";
    daily.style.opacity = ".5";
    monthly.style.opacity = ".5";

    time[0].textContent = "32hrs";
    time[1].textContent = "10hrs";
    time[2].textContent = "4hrs";
    time[3].textContent = "4hrs";
    time[4].textContent = "5hrs";
    time[5].textContent = "2hrs";

    text[0].textContent = "Last Week - 36hrs";
    text[1].textContent = "Last Week - 8hrs";
    text[2].textContent = "Last Week - 7hrs";
    text[3].textContent = "Last Week - 5hrs";
    text[4].textContent = "Last Week - 10hrs";
    text[5].textContent = "Last Week - 2hrs";
});