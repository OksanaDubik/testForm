let input = document.querySelector(".class-input")
let classes = document.querySelector(".class-datalist")
let fieldsetClass = document.querySelector(".class")
let classLegend = document.querySelector(".class-legend")
let classOption = document.querySelectorAll(".class-option")
let inputBlock = document.querySelector(".input-block img")
let inpBl = document.querySelector(".input-block")


fieldsetClass.addEventListener("click", function (){
    fieldsetClass.style.border= "1px solid #3CA9F0";
    classLegend.style.color = "#3CA9F0";

})
classOption.forEach(el =>{
    el.addEventListener("click", function (evt){
        fieldsetClass.style.border= "1px solid #EAEAEA";
        classLegend.style.color = "#343434";
        inputBlock.style.transform ="rotate(360deg)";
        evt.stopPropagation();
    })
})

inpBl.addEventListener("click",   function (){
    classes.style.display = 'block';
    input.style.borderRadius = "10px";
    inputBlock.style.transform ="rotate(180deg)";
})

for (let option of classes.options) {
    option.onclick = function () {
        input.value = option.value ;
        classes.style.display = 'none';
        input.style.borderRadius = "10px";
    }
}


