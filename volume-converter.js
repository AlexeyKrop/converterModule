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
    } else if (lbGal.value !== "") {
      kgm.value = lbGal.value * 119.826426627972;
      kgsm.value = lbGal.value * 0.000119826427;
      kgl.value = lbGal.value * 0.119826427;
      gsm.value = lbGal.value * 0.119826427;
      ozGal.value = lbGal.value * 15.999999810023;
    } else if (kgl.value !== "") {
      kgm.value = kgl.value * 1000;
      kgsm.value = kgl.value / 1000;
      gsm.value = kgl.value;
      kgl.value = kgl.value * 8.3454045;
      ozGal.value = kgl.value * 133.52647;
    } else if (ozGal.value !== "") {
      kgm.value = ozGal.value * 7.489151776423;
      kgsm.value = ozGal.value * 0.000007489152;
      gsm.value = ozGal.value * 0.007489152;
      kgl.value = ozGal.value * 0.007489152;
      lbGal.value = ozGal.value * 0.062500002802;
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
