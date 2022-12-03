'use strict';
const field = document.querySelectorAll('.field');
const inputText = document.querySelectorAll('.inputText');
const nameUser = document.querySelector('.name');
const lastName = document.querySelector('.lastName');
const birthDate = document.querySelector('.birthDate');
const email = document.querySelector('.email');
const city = document.querySelector('.city');
const btnSubmit = document.querySelector('.btn-submit');
const inputTel = document.querySelector('.tel')

function colorError (field) {
   field.style.borderColor = 'red';
};

btnSubmit.addEventListener('click', ()=>{
   filledField();
   correctLanguage();
   // correctEmail();
   dateOfBirth();
   correctTel();
});

function filledField () {
   field.forEach((element) => {
      if (!element.value) {colorError(element)};
   });
};

function correctLanguage () {
   inputText.forEach((element) => {
      if (element.value != element.value.replace(/[^а-яёА-ЯЁ ]/g,"")) {colorError(element)};
   });
};

function dateOfBirth() {
   let date = new Date();
   let maxYear = date.getFullYear() - 18;
   let maxMonth = date.getMonth();
   let maxDay = date.getDate();
   let birthDateArr = birthDate.value.split('-');

   if (maxYear < birthDateArr[0]) {
      colorError(birthDate);
      console.log('год');
   }
   if (maxYear == birthDateArr[0] && maxMonth < (birthDateArr[1] - 1)) {
      colorError(birthDate);
      console.log('месяц');
   }
   if (maxYear == birthDateArr[0] && maxMonth == (birthDateArr[1] - 1) && maxDay < birthDateArr[2]) {
      colorError(birthDate);
      console.log('день');
   }
};

function correctTel() {
      if (inputTel.value != inputTel.value.replace(/^((7|8)+([0-9]){10})$/,"")) {colorError(inputTel)};
};

