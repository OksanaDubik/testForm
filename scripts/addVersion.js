let allVersions = document.querySelectorAll(".version label")
let allVersionsArr = Object.values(allVersions);
let radioBtn = document.querySelector(".radio-btn")
let addedVersion = [];

//по клику открываем очередной вариант тем
radioBtn.addEventListener("click", function () {
    for (let i = 0; i < 1; i++) {
        addedVersion.push(allVersionsArr[i])
        allVersionsArr.shift()
    }
    addedVersion.forEach(el => {
        el.style.display = "inline-block"
    })
})


//добавляем варианты тем в textarea
allVersionsArr.forEach(el => {
    el.addEventListener("click", function (event) {
        let text = event.target.innerText
        let themText = document.querySelector("[name='them']")
        themText.insertAdjacentHTML("beforeend", text + " ")
    })
})

//кнопка очистки тем
document.querySelector(".btn-them")
    .addEventListener("click", function () {
        document.querySelector(".textarea-them textarea").innerText = ""
    })
