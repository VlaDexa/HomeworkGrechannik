document.getElementById("name").onsubmit = function validateComments(input) {
    let regEx = /^[A-ZА-Я]\S*/;
    if (!regEx.test(evt.target.value)) {
        console.log(evt);
        console.log(evt.target.validity.valid);
        document.getElementById("name").validity.valid = false;
        input.setCustomValidity("Ваше имя должно начинаться с большой буквы и состоять из букв английского или русского языка");
    } else {
        document.getElementById("name").validity.valid = true;
        document
            .getElementById("error")
            .innerHTML = ""
        console.log(evt.target.validity.valid);
    }
}
document.getElementById("secondname").onsubmit = function (evt) { 
    if (!regEx.test(evt.target.value)) {
        console.log(evt);
        console.log(evt.target.validity.valid);
        document.getElementById("secondname").validity.valid = false;
        input.setCustomValidity("Ваша фамилия должна начинаться с большой буквы и состоять из букв английского или русского языка");
    } else {
        document.getElementById("secondname").validity.valid = true;
        document
            .getElementById("2error")
            .innerHTML = ""
        console.log(evt.target.validity.valid);
    }
}