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
