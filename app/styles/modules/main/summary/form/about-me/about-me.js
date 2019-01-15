"use strict";

//          ДОБАВЛЕНИЕ ПОЛЯ С НОВОЙ СТРОКИ

var textareaField = document.querySelector('.about-me__field');
var textareaHight = textareaField.scrollHeight;

textareaField.addEventListener('input', function (evt) {
  let newTextareaHight = textareaField.scrollHeight;
  if (newTextareaHight > textareaHight) {
    textareaField.style.height = newTextareaHight + "px";
    textareaHight = newTextareaHight;
  } 
});
