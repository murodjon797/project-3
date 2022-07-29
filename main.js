var elForm = document.querySelector(".js-form");
var elInput = document.querySelector(".js-input");
var elSelect = document.querySelector(".js-select");
var elResult = document.querySelector(".js-result");

elForm.addEventListener("submit", function(event){
    event.preventDefault();
    var elInputText = elInput.value;
    var elSelectText = elSelect.value;

    console.log(elInputText);
    console.log(elSelectText);
    elResult.textContent = ` ${elInputText} vs ${elSelectText} `;
})