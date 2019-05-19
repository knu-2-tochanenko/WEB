let imageNumber = 0;

let images = [
    document.getElementById('img1'),
    document.getElementById('img2'),
    document.getElementById('img3'),
    document.getElementById('img4'),
    document.getElementById('img5')
];

window.onload = async function() {
    feedbackForm.reset();
    while (true) {
        changeSlide(true);
        await sleep(4600);
    }
}

async function changeSlide(isNext) {
    images[imageNumber].style.opacity = '0';

    if (isNext) {
        if (imageNumber == 4)
            imageNumber = 0;
        else imageNumber++;
    } else {
        if (imageNumber == 0)
            imageNumber = 4;
        else imageNumber--;
    }

    await sleep(600);

    images[imageNumber].style.opacity = '1';
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById('prev-slide').onclick = function() {
    changeSlide(false);
}

document.getElementById('next-slide').onclick = function() {
    changeSlide(true);
}


/////////////////////////////////////////////////////////////////////
let menuOpener = document.getElementById("menu-opener");
let mobileMenu = document.getElementById("slide-top-menu");

let leftOpener = document.getElementById("side-opener");
let mobileLeft = document.getElementById("slide-left-menu");

var isVisibleLeft = false;
var isVisibleMenu = false;

let leftFade = document.getElementById("left-fade");
let menuFade = document.getElementById("menu-fade");

menuFade.addEventListener("click", closeMenu);
leftFade.addEventListener("click", closeLeft);

menuOpener.addEventListener("click", () => {
    closeLeft();
    if (isVisibleMenu)
        closeMenu();
    else
        openMenu();
});

leftOpener.addEventListener("click", () => {
    closeMenu();
    if (isVisibleLeft)
        closeLeft();
    else
        openLeft();
});

function openMenu() {
    isVisibleMenu = true;
    menuFade.style.display = "block";
    mobileMenu.style.top = "40px";
}

function closeMenu() {
    isVisibleMenu = false;
    menuFade.style.display = "none";
    mobileMenu.style.top = "-400px";
}

function openLeft() {
    isVisibleLeft = true;
    leftFade.style.display = "block";
    mobileLeft.style.left = "0";
}

function closeLeft() {
    isVisibleLeft = false;
    leftFade.style.display = "none";
    mobileLeft.style.left = "-220px";
}

/////////////////////////////////////////////////////////////////////

let feedbackButton = document.getElementById("feedback-button");
let fade = document.getElementById("fade");
let feedbackForm = document.getElementById("feedback-form");
let submitButton = document.getElementById("submit-button");
let mobileFeedback = document.getElementById("mobile-feedback");

feedbackButton.addEventListener("click", showFeedbackForm);
fade.addEventListener("click", hideFeedbackForm);
submitButton.addEventListener("click", validateFeedbackForm);
mobileFeedback.addEventListener("click", () => {
    showFeedbackForm();
    closeMenu();
});

let name = document.getElementById("name-f");
name.addEventListener("input", validateName);
let phone = document.getElementById("phone-f");
phone.addEventListener("input", validatePhone);
let email = document.getElementById("email-f");
email.addEventListener("input", validateEmail);
let message = document.getElementById("message-f");
message.addEventListener("input", validateMessage);

function validateFeedbackForm(event) {
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        name.required=true;
        phone.required=true;
        email.required=true;
        message.required=true;
        alert("Fill form correct!");
    }
    else{
    hideFeedbackForm();
    }
}

function validateName() {
    if (name.validity.rangeUnderflow) {
        name.setCustomValidity("Name has to be >4 characters long.");
        return false;
    } else {
        name.setCustomValidity("");
        return true;
    }
}

function validatePhone() {
    if (phone.validity.patternMismatch) {
        phone.setCustomValidity("Phone format: ***-***-****");
        return false;
    } else {
        phone.setCustomValidity("");
        return true;
    }
}

function validateEmail() {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Wrong email");
        return false;
    } else {
        email.setCustomValidity("");
        return true;
    }
}

function validateMessage() {
    if(!message.value){
        message.setCustomValidity("Empty message");
        return false;
    }
    else{
        message.setCustomValidity("");
        return true;
    }
}

function showFeedbackForm(event) {
    fade.style.display = "block";
    feedbackForm.style.display = "flex";
}

function hideFeedbackForm(event) {
    name.required=false;
    phone.required=false;
    email.required=false;
    message.required=false;
    fade.style.display = "none";
    feedbackForm.style.display = "none";
    feedbackForm.reset();
}
