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
    if (c.value !== "") {
      f.value = c.value * 1.8 + 32;
      k.value = +c.value + 273.15;
      re.value = c.value * 0.8;
    } else if (f.value !== "") {
      c.value = (f.value - 32) / 1.8;
      k.value = (f.value - 32) / 1.8 + 273.15;
      re.value = ((f.value - 32) / 1.8) * 0.8;
    } else if (k.value !== "") {
      c.value = k.value - 273.15;
      f.value = (k.value - 273.15) * 1.8 + 32;
      re.value = (k.value - 273.15) * 0.8;
    } else if (re.value !== "") {
      c.value = re.value / 0.8;
      f.value = (re.value / 0.8) * 1.8 + 32;
      k.value = re.value / 0.8 + 273.15;
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
