"use strict";
const weightForm = document.getElementById("weight"),
  button = document.querySelector("button"),
  wrapper = document.querySelector(".wrapper"),
  form = document.querySelector("form"),
  kbm = document.querySelector("#kbm"),
  kbsm = document.querySelector("#kbsm"),
  l = document.querySelector("#l"),
  stl = document.querySelector("#stl"),
  pt = document.querySelector("#pt"),
  gal = document.querySelector("#gal");
form.addEventListener("click", (e) => {
  const target = e.target;
  if (!target.matches("input")) {
    validation();
    if (kbm.value !== "") {
      kbsm.value = kbm.value * 1000000;
      l.value = kbm.value * 1000;
      stl.value = kbm.value * 66666.667;
      pt.value = kbm.value * 1759.75;
      gal.value = kbm.value * 219.969;
    } else if (kbsm.value !== "") {
      kbm.value = kbsm.value / 1000000;
      l.value = kbsm.value / 1000;
      stl.value = kbsm.value * 0.067;
      pt.value = kbsm.value * 0.002;
      gal.value = kbsm.value * 0.0002;
    } else if (l.value !== "") {
      kbm.value = l.value * 0.001;
      kbsm.value = l.value * 1000;
      stl.value = l.value * 66.667;
      pt.value = l.value * 1.76;
      gal.value = l.value * 0.22;
    } else if (stl.value !== "") {
      kbm.value = stl.value * 0.00001;
      kbsm.value = stl.value * 15;
      l.value = stl.value * 0.015;
      pt.value = stl.value * 0.026;
      gal.value = stl.value * 0.003;
    } else if (pt.value !== "") {
      kbm.value = pt.value * 0.001;
      kbsm.value = pt.value * 568;
      l.value = pt.value * 0.568;
      stl.value = pt.value * 37.884;
      gal.value = pt.value * 0.125;
    } else if (gal.value !== "") {
      kbm.value = gal.value * 0.005;
      kbsm.value = gal.value * 4546.095;
      l.value = gal.value * 4.546;
      stl.value = gal.value * 303.073;
      pt.value = gal.value * 8;
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
