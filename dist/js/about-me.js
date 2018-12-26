/* jshint node: true */
/* jshint browser: true */
/* global window */
"use strict";

//          ДОБАВЛЕНИЕ НОВОГО ТЕКСТОВОГО ПОЛЯ
//                  ПО НАЖАТИЮ ENTER 

var stringList = document.querySelector(".about-me__list");
var strings = document.querySelectorAll(".about-me__string");
var lastString = strings[strings.length - 1];
var enterKeycode = 13;

stringList.addEventListener("keydown", function(evt) {
  if (evt.keyCode === enterKeycode) {
    if (evt.target.classList.contains("about-me__string")) {
      strings.forEach(function(string) {
          if (string.classList.contains("about-me__current")) {
            string.classList.remove("about-me__current");
          }
        });
      strings.forEach(function(string) {
        if (evt.target === string) {
          string.classList.add("about-me__current");
        }
      });
    }
    var currentString = document.querySelector(".about-me__current");
    if (evt.target === currentString && evt.target === lastString) {
        var newString = document.querySelector(".about-me__item--js").cloneNode(true);
        var stingInput = newString.querySelector(".about-me__string");
        var newValue = stingInput.value = "";
        stringList.appendChild(newString);
      } else {
        var nextString = function () {
          for (var i = 0; i < strings.length; i++) {
            if (strings[i].classList.contains("about-me__current")) {
              return strings[i+1];    
              }
            }
          };
          nextString().focus();
          return;
        }
      strings = document.querySelectorAll(".about-me__string");
      lastString = strings[strings.length - 1];
      lastString.focus();
    }
});
