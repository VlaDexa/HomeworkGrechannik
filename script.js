function erorrer(){
    document.getElementById("name").onkeydown = function (evt) {
        let regEx = /[A-Z]\w/;
        if (!regEx.test(evt.target.value)) {
            console.log(evt);
            console.log(evt.target.validity.valid);
            document.getElementById("name").validity.valid = false;
            document
                .getElementById("error")
                .innerHTML = `Your name should be like Sergei`;
        } else {
            document.getElementById("name").validity.valid = true;
            document
                .getElementById("error")
                .innerHTML = ""
            console.log(evt.target.validity.valid);
        }
    }
}
