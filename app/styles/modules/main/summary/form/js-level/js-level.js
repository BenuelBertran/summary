/* jshint node: true */
/* jshint browser: true */
/* global window */
"use strict";

//          ПЕРЕМЕЩЕНИЕ СЛАЙДЕРА МЫШЬЮ

var sliderPin = document.querySelector(".js-level__pin");

sliderPin.addEventListener("mousedown", function(evt) {
  var startCoodrs = {
    x: evt.clientX
  };
  
  var onMouseMove = function (evt) {
    evt.preventDefault();
    sliderPin.draggable = true;
    var shift = {
      x: startCoodrs.x - evt.clientX
    };
    startCoodrs = {
      x: evt.clientX
    };
    if (sliderPin.offsetLeft - shift.x > 0 && sliderPin.offsetLeft - shift.x < 755) {
      sliderPin.style.left = sliderPin.offsetLeft - shift.x + "px";
    }
  };
  
  var onMouseUp = function (evt) {
    evt.preventDefault();
    sliderPin.draggable = false;
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  };
  
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
});

//          ПЕРЕМЕЩЕНИЕ СЛАЙДЕРА С КЛАВИАТУРЫ

var sliderLeft = 500;
var rightArrowKeycode = 39;
var leftArrowKeycode = 37;

sliderPin.addEventListener("keydown", function(evt) {
  if (evt.keyCode === rightArrowKeycode) {
    if (sliderLeft < 755) {
      sliderLeft += 10;
      sliderPin.style.left = sliderLeft + "px";  
    }
  } else if (evt.keyCode === leftArrowKeycode) {
      if (sliderLeft >= 5) {
        sliderLeft -= 10;
        sliderPin.style.left = sliderLeft + "px";
      }
    }
});