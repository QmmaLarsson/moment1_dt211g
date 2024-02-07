"use strict";

/*Moment 1*/
//Variabler för huvudmeny
let openBtnEl = document.getElementById("openmenu");
let closeBtnEl = document.getElementById("closemenu");

//Händelsehanterare för huvudmeny
openBtnEl.addEventListener("click", toggleMenu);
closeBtnEl.addEventListener("click", toggleMenu);

//Funktion för att öppna och stänga huvudmenyn
function toggleMenu() {
    let navMenuEl = document.getElementById("huvudmeny");

    let style = window.getComputedStyle(navMenuEl);

    if (style.display === "none") {
        navMenuEl.style.display = "block";
    } else {
        navMenuEl.style.display = "none";
    }
}

/*Moment 2*/
const url = ("../ramschema_ht23.json");
window.onload = init();

async function init() {
    try {
        //Fetch-anrop
        const response = await fetch(url);
        let courses = await response.json();

        //Kör funktionen displayCourses
        displayCourses(courses);

    } catch {
        document.getElementById("error").innerHTML = "<p>Något gick fel, prova igen senare.</p>"
    }

}

function displayCourses(courses) {
    const tableEl = document.getElementById("table");

    //Loopa igenom och skriv ut till DOM
    courses.forEach(course => {
        tableEl.innerHTML += `
        <tr>
        <td>${course.code}</td>
        <td>${course.coursename}</td>
        <td>${course.progression}</td>
        </tr>
        `;
    });
}