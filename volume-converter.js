"use strict";
const weightForm = document.getElementById("weight"),
  button = document.querySelector("button"),
  wrapper = document.querySelector(".wrapper"),
  form = document.querySelector("form"),
  kgm = document.querySelector("#kbm"),
  kgsm = document.querySelector("#kbsm"),
  kgl = document.querySelector("#l"),
  gsm = document.querySelector("#stl"),
  lbGal = document.querySelector("#pt"),
  ozGal = document.querySelector("#gal");
form.addEventListener("click", (e) => {
  const target = e.target;
  if (!target.matches("input")) {
    validation();
    if (kgm.value !== "") {
      kgsm.value = kgm.value / 1000000;
      kgl.value = kgm.value / 1000;
      gsm.value = kgm.value / 1000;
      lbGal.value = kgm.value * 0.0083454045;
      ozGal.value = kgm.value * 0.133526479;
    } else if (kgsm.value !== "") {
      kgm.value = kgsm.value * 1000000;
      kgl.value = kgsm.value * 1000;
      gsm.value = kgsm.value * 1000;
      lbGal.value = kgsm.value * 8345.4045;
      ozGal.value = kgsm.value * 133526.47;
    } else if (gsm.value !== "") {
      kgm.value = gsm.value * 1000;
      kgsm.value = gsm.value / 1000;
      kgl.value = gsm.value * 1000;
      lbGal.value = gsm.value * 8.3454045;
      ozGal.value = gsm.value * 133.52647;
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
