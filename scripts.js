var main = document.querySelector("#main");
var success = document.querySelector(".success_page");
var submit = document.querySelector("#submit");
var dismiss = document.querySelector("#dismiss");
var mobileDismiss = document.querySelector("#m-dismiss")
var isValid = false;

function checkEmail() {
    var emailInput = document.querySelector("#email").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput)) {
        isValid = false;
    } else {
        isValid = true;
    }
}

function clickSubmit(event) {
    event.preventDefault();
    checkEmail();
    if (isValid) {
        var emailInput = document.querySelector("#email").value;
        document.querySelector("#users_email").textContent = emailInput;
        main.classList.remove("show");
        main.classList.add("dont_show");
        success.classList.remove("dont_show");
    } else {
        errorState();
    }
}

function clickDismiss() {
    main.classList.remove("dont_show");
    success.classList.add("dont_show");
    main.classList.add("show");
}

function errorState() {
    var tag = document.querySelector("#email");
    tag.classList.remove("input_border");
    tag.classList.add("error");
    var span = document.querySelector(".verification");
    span.classList.add("invalid");
}

submit.addEventListener("click", clickSubmit);
dismiss.addEventListener("click", clickDismiss);
mobileDismiss.addEventListener("click", clickDismiss);

var form = document.querySelector("#form");
form.addEventListener("submit", function (event) {
    event.preventDefault(); 
});
