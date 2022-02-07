"use strict";
const weightForm = document.getElementById("weight"),
  button = document.querySelector("button"),
  wrapper = document.querySelector(".wrapper"),
  form = document.querySelector("form"),
  kgm = document.querySelector("#kgm"),
  kgsm = document.querySelector("#kgsm"),
  kgl = document.querySelector("#kgl"),
  gsm = document.querySelector("#gsm"),
  lbGal = document.querySelector("#lb-gal"),
  ozGal = document.querySelector("#oz-gal");
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
