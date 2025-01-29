function regular() {
    document.getElementById('pageBody').style = "background-color: lavender;";
    const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6'); // creating variable, assigning to all text kind
    elements.forEach(element => { // using a forEach JS function
        element.style.color = "darkslateblue"; // Had to look up online...
    });
    const profileImage = document.getElementById('me');
    profileImage.style.borderColor = "darkslateblue";
}

function dark() {
    document.getElementById('pageBody').style = "background-color: #04031E;";
    const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
    elements.forEach(element => {
        element.style.color = "white";
    });
    const profileImage = document.getElementById('me');
    profileImage.style.borderColor = "white";
}

function light() {
    document.getElementById('pageBody').style = "background-color: white;";
    const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
    elements.forEach(element => {
        element.style.color = "black";
    });
    const profileImage = document.getElementById('me');
    profileImage.style.borderColor = "black";
}

function grilledCheese() {
    alert("Mmmmm Grilled Cheese...")
    document.getElementById('pageBody').style = "background-color: #FFDE59;";
    const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
    elements.forEach(element => {
        element.style.color = "#593123";
    });
    const profileImage = document.getElementById('me');
    profileImage.style.borderColor = "#593123";
}
