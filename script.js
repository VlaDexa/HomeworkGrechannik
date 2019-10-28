let name=document.getElementById("name");
name.addEventListener("input", function (event) {
    if (!name.validity.patternMismatch) {
      name.setCustomValidity("");
    } else {
      name.setCustomValidity("Ваше имя должно начинаться с большой буквы и состоять из букв английского или русского языка");
    }
  });
let secondname=document.getElementById("secondname");
secondname.addEventListener("input", function (event) {
    if (!secondname.validity.patternMismatch) {
        secondname.setCustomValidity("");
    } else {
        secondname.setCustomValidity("Ваша фамилия должна начинаться с большой буквы и состоять из букв английского или русского языка");
    }
  });
let fathername=document.getElementById("fathername");
fathername.addEventListener("input", function (event) {
    if (!fathername.validity.patternMismatch) {
        fathername.setCustomValidity("");
    } else {
        fathername.setCustomValidity("Ваше отчество должно начинаться с большой буквы и состоять из букв английского или русского языка");
    }
  });
let email=document.getElementById("email");
email.addEventListener("input", function (event){
    if (!email.validity.patternMismatch) {
        email.setCustomValidity("");
    } else {
        email.setCustomValidity("Вы должны закончить адрес почты написанием доменного имени. Пример:...@mail.ru");
    }
  });
let password=document.getElementById("password");
password.addEventListener("input", function (event){
    if (!password.validity.patternMismatch) {
        password.setCustomValidity("");
    } else {
        password.setCustomValidity("Пароль должен содержать как минимум цифры, символы нижнего и верхнего регистра.");
    }
});
document.getElementById("form").onsubmit = function (evt) {
    localStorage.clear();
    evt.preventDefault();
    console.log(evt);
    let object = {};
    for (let i = 0; i < 7; i++) {
        object[evt.target[i].name] = evt.target[i].value;
    }
    localStorage.setItem("data", JSON.stringify(object));
    
}
window.onload = function(){
    if(localStorage.getItem("data")){
        let object = JSON.parse(localStorage.getItem("data"));
        let arr = ["name","secondname","fathername","email","password","date","gender"];
        arr.forEach(element => {
            if(document.getElementById(element))
            document.getElementById(element).value = object[element];
        });
        
        
    }
}