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
