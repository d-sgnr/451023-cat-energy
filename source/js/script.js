//Yandex.Maps

var coordinates = [59.939147, 30.319328];
var iconSize = [125, 106];
var iconOffset = [-63, -85];

if (window.matchMedia("(max-width: 1199px)").matches) {
  coordinates = [59.938915, 30.323061];
}

if (window.matchMedia("(max-width: 767px)").matches) {
  iconSize = [60, 53];
  iconOffset = [-27, -40];
}

ymaps.ready(function() {

  var myMap = new ymaps.Map("map", {
      center: coordinates,
      zoom: 17,
      behaviors: ["default", "scrollZoom"],
      controls: [],
    }, {
      searchControlProvider: "yandex#search"
    }),

    myPlacemark = new ymaps.Placemark([59.938915, 30.323061],

      {

      },

      {
        iconLayout: "default#image",
        iconImageHref: "../img/map-pin.png",
        iconImageSize: iconSize,
        iconImageOffset: iconOffset
      });

  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable("scrollZoom");

});

//Mobile-Menu

var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

navToggle.addEventListener("click", function() {
  if (navToggle.classList.contains("main-nav__toggle--active")) {
    navToggle.classList.remove("main-nav__toggle--active");
  } else {
    navToggle.classList.add("main-nav__toggle--active");
  }
});


//Input-Error

$(".form__button").click(function() {
  $(".form__input[required]").each(function() {
    if ($(this).val().length == 0) {
      $(this).addClass("form__input--error");
    } else {
      $(this).removeClass("form__input--error");
    }
  });
});

$(document).on("input change", ".form__input", function() {
  $(this).removeClass("form__input--error");
});

$(".goods__button").attr("href", "#modal");

$(".goods-add__button").attr("href", "#modal");

$(".more__button").attr("href", "");
