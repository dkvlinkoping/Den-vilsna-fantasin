// Check if the image is set in sessionStorage
let image1 = sessionStorage.getItem("correctAnswerImage1");
let image2 = sessionStorage.getItem("correctAnswerImage2");
let image3 = sessionStorage.getItem("correctAnswerImage3");
let image4 = sessionStorage.getItem("correctAnswerImage4");
let image5 = sessionStorage.getItem("correctAnswerImage5");
let image6 = sessionStorage.getItem("correctAnswerImage6");

if (image1 === "true") {
    // If the flag is set to "true," change one of the images
    bild1.src = "bild1-2.jpg"; // Change image1
}

if (image2 === "true") {
    // If the flag is set to "true," change one of the images
    bild2.src = "bild2-2.jpg"; // Change image2
}

if (image3 === "true") {
    // If the flag is set to "true," change one of the images
    bild3.src = "bild3-2.jpg"; // Change image2
}

if (image4 === "true") {
    // If the flag is set to "true," change one of the images
    bild4.src = "bild4-2.jpg"; 
}

if (image5 === "true") {
    // If the flag is set to "true," change one of the images
    bild5.src = "bild5-2.jpg"; // Change image5
}

if (image6 === "true") {
    // If the flag is set to "true," change one of the images
    bild6.src = "bild6-2.jpg"; // Change image6
}

function checkAnswer1() {
    let answer = document.getElementById("answer1").value;
    if (answer.toLowerCase() === "sherlock holmes") { // Check if the answer is correct
        // Set the flag in sessionStorage
        sessionStorage.setItem("correctAnswerImage1", "true");
        alert("Ja, så heter jag! Tack! Nu måste jag skynda mig hem till Baker Street och lösa fallet jag höll på med.");
        window.location.href = "./index.html#rum";
        
               
    } else {
        alert("Hmmmm, nej. Det namnet känns inte bekant.");       
    } 
}

function checkAnswer2() {
    let answer2 = document.getElementById("answer2").value;
    let a = answer2.toLowerCase().trim();
    if (a === "alice" || a === "alice i underlandet")  // Check if the answer is correct
        // Set the flag in sessionStorage
        {sessionStorage.setItem("correctAnswerImage2", "true");
        alert("Just ja, Alice är mitt namn! Nu måste jag tillbaka till Underlandet och spela färdigt en krocketmatch. Tack för hjälpen!");
        window.location.href = "./index.html#rum";
    } else {
        alert("Ingenting händer när du säger namnet " + answer2 + ", så det måste vara fel.")
    }
}

function checkAnswer3() {
    let answer3 = document.getElementById("answer3").value;
    if (answer3.toLowerCase() === "dorothy") { // Check if the answer is correct
        // Set the flag in sessionStorage
        sessionStorage.setItem("correctAnswerImage3", "true");
        alert("Dorothy heter jag ja! Hur kunde jag glömma mitt eget namn? Tack för hjälpen, jag hoppas jag kan hitta hela vägen hem till Kansas snart.");
        window.location.href = "./index.html#rum";
    } else {
        alert("Ingenting händer när du säger namnet " + answer3 + ", så det måste vara fel.")
    }
}

function checkAnswer4() {
    let answer4 = document.getElementById("answer4").value;
    if (answer4.toLowerCase() === "frodo") { // Check if the answer is correct
        // Set the flag in sessionStorage
        sessionStorage.setItem("correctAnswerImage4", "true");
        alert("En hobbit kommer fram från bakom bokhyllan i mitten av rummet. 'Ja, det är Frodo jag heter! Frodo Bagger! Jag måste skynda mig tillbaka till Fylke innan någon märker att jag är borta.");
        window.location.href = "./index.html#rum";
    } else {
        alert("Ingenting händer när du säger namnet " + answer4 + ", så det måste vara fel.")
    }
}

function checkAnswer5() {
    let answer5 = document.getElementById("answer5").value;
    if (answer5.toLowerCase() === "mowgli") { // Check if the answer is correct
        // Set the flag in sessionStorage
        sessionStorage.setItem("correctAnswerImage5", "true");
        alert("Du ser en liten pojke krypa fram från under en av bänkarna i Djungelrummet. \"Mowgli! Ja, så heter jag! Äntligen kommer jag tillbaka till djungeln och Baloo.\"");
        window.location.href = "./index.html#rum";

        
    } else {
        alert("Nej... det namnet känns inte riktigt rätt.");       
    } 
}

function checkAnswer6() {
    let answer6 = document.getElementById("answer6").value;
    if (answer6.toLowerCase() === "tintin") { // Check if the answer is correct
        // Set the flag in sessionStorage
        sessionStorage.setItem("correctAnswerImage6", "true");
        alert("Ja, Tintin är mitt namn! Vilket konstigt äventyr det här har varit, det kommer att bli en spännande artikel till Le Petit Vingtième! ");
        window.location.href = "./index.html#rum";
    } else {
        alert("Ingenting händer när du säger namnet " + answer6 + ", så det måste vara fel.")
    }
}