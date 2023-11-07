//считаем количество знаков
function countCharacters(inpText) {
    const textWithoutSpaces = inpText.replace(/\s/g, ''); // Удаление пробелов
    return textWithoutSpaces.length;
}
//меняем стили
function toggleCount(num) {
    let btnDisabled = document.querySelector(".btn-next")
    if(num > 0 && num < 201){
        btnDisabled.ariaDisabled = "false"
    }else {
        btnDisabled.ariaDisabled = "true"
    }
    if (num > 200) {
        document.querySelector(".text-count-limit").style.color = "red"
        document.querySelector(".text-count").style.color = "red"
        document.querySelector(".textarea-target legend").style.color = "red"
        document.querySelector(".textarea-target").style.borderColor = "red"

        let textRegistration = document.querySelector(".text-count-registration")
        textRegistration.classList.remove("text-count-registration")
        textRegistration.classList.add("text-registration-red")

    } else {
        document.querySelector(".textarea-target legend").style.color = "#343434"
        document.querySelector(".text-count").style.color = "#343434"
        document.querySelector(".text-count-limit").style.color = "#343434"
        document.querySelector(".textarea-target").style.borderColor = "#EAEAEA"

        let textRegistration = document.querySelector(".text-registration-red")
        textRegistration.classList.remove("text-registration-red")
        textRegistration.classList.add("text-count-registration")
    }
}

//*****
const inputElement = document.getElementById('inputText');
inputElement.addEventListener('input', function () {
    const characterCount = countCharacters(this.value);

    let numCount = document.querySelector(".text-count");
    numCount.innerText = characterCount

    toggleCount(characterCount)
});
