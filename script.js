"use strict";
const items = document.querySelectorAll(".converter__item");
items.forEach((item) => {
  item.addEventListener("click", () => {
    document.body.style.overflow = "visible";
  });
});
