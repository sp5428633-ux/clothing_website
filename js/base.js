var cartcount = 0;
function count(btn) {
    cartcount++;
    document.getElementById('cart-count').innerText = cartcount;

    btn.innerText = "Added";


    // alert message
    alert("Item added to cart");

}

document.getElementById('year').innerText = new Date().getFullYear();

// validate function
function validate() {

    // get values
    const name = document.getElementById('name').value.trim();
    const gmail = document.getElementById('mail').value.trim();
    const message = document.getElementById('message').value.trim();

    // span error
    const nameError = document.getElementById('nameError');
    const mailError = document.getElementById('mailError');
    const messageError = document.getElementById('messageError');

    // clear previous errors
    nameError.textContent = "";
    mailError.textContent = "";
    messageError.textContent = "";

    let isvalid = true;

    // name validation
    if (name === "") {
        nameError.textContent = "Please enter your name";
        isvalid = false;
    } else if (name.length < 3) {
        nameError.textContent = "Name must be at least 3 characters";
        isvalid = false;
    }

    // email validation
    if (gmail === "") {
        mailError.textContent = "Please enter your email";
        isvalid = false;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(gmail)) {
        mailError.textContent = "Please enter a valid email";
        isvalid = false;
    }

    // message validation
    if (message === "") {
        messageError.textContent = "Please enter your message";
        isvalid = false;
    }

    // success
    if (isvalid) {
        alert("Form submitted successfully");
    }

    return isvalid; // false = stop submit, true = submit
}
// offer timer
let timeLeft = 12 * 60 * 60; // 12 hours in seconds

let timer = setInterval(function() {

    let hours = Math.floor(timeLeft / 3600);
    let minutes = Math.floor((timeLeft % 3600) / 60);
    let seconds = timeLeft % 60;

    document.getElementById("hours").innerHTML = 
        String(hours).padStart(2, '0');
    document.getElementById("minutes").innerHTML = 
        String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerHTML = 
        String(seconds).padStart(2, '0');

    timeLeft--;

    if (timeLeft < 0) {
        clearInterval(timer);
        document.querySelector(".timer-box").innerHTML = 
            "Offer Expired";
    }

}, 1000);
