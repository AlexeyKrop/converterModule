"use strict";
const weightForm = document.getElementById("weight"),
  button = document.querySelector("button"),
  wrapper = document.querySelector(".wrapper"),
  form = document.querySelector("form"),
  c = document.querySelector("#C"),
  f = document.querySelector("#F"),
  k = document.querySelector("#K"),
  re = document.querySelector("#Re");
form.addEventListener("click", (e) => {
  const target = e.target;
  if (!target.matches("input")) {
    validation();
    if (km.value !== "") {
      m.value = km.value * 1000;
      mm.value = km.value * 1000000;
      inch.value = km.value / 39370.1;
      mile.value = km.value / 1.6;
      yard.value = km.value / 1093.613888889;
    } else if (m.value !== "") {
      km.value = m.value / 1000;
      mm.value = m.value / 1000;
      inch.value = (m.value * 1000) / 39370.1;
      mile.value = (m.value * 1000) / 1.6;
      yard.value = (m.value * 1000) / 1093.613888889;
    } else if (mm.value !== "") {
      km.value = mm.value / 1000 / 100;
      m.value = mm.value / 1000;
      inch.value = mm.value * 25.4;
      mile.value = mm.value / 100 / 1000 / 1.6;
      yard.value = mm.value * 914.4;
    } else if (inch.value !== "") {
      km.value = inch.value / 39370.1;
      m.value = inch.value / 39.3701;
      mm.value = inch.value / 0.03937;
      mile.value = inch.value / 63360;
      yard.value = inch.value / 36;
    } else if (mile.value !== "") {
      km.value = mile.value / 1.6;
      m.value = mile.value / 1.6 / 1000;
      mm.value = mile.value / 1.6 / 1000 / 1000;
      inch.value = mile.value * 63360;
      yard.value = mile.value * 1760;
    } else if (yard.value !== "") {
      km.value = yard.value / 1093.613888889;
      m.value = (yard.value * 1000) / 1093.613888889;
      mm.value = (yard.value * 1000 * 1000) / 1093.613888889;
      inch.value = yard.value * 36;
      mile.value = yard.value / 1760.4;
    }
  }
});
const validation = () => {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      input.value = input.value.replace(/[^0-9\.]/g, "");
    });
  });
};
button.addEventListener("click", (e) => {
  e.preventDefault();
  reset();
});
const reset = () => {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    input.value = "";
  });
};
