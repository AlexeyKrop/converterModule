"use strict";
const weightForm = document.getElementById("weight"),
  button = document.querySelector("button"),
  wrapper = document.querySelector(".wrapper"),
  form = document.querySelector("form"),
  km = document.querySelector("#km"),
  m = document.querySelector("#m"),
  mm = document.querySelector("#mm"),
  inch = document.querySelector("#in"),
  mile = document.querySelector("#mi"),
  yard = document.querySelector("#yd");
form.addEventListener("click", (e) => {
  const target = e.target;
  if (!target.matches("input")) {
    validation();
    if (km.value !== "") {
      m.value = km.value * 1000;
      mm.value = km.value * 1000000;
      inch.value = km.value * 39370.1;
      mile.value = km.value / 1.6;
      yard.value = km.value * 1093.613888889;
    } else if (t.value !== "") {
      kg.value = t.value * 1000;
      gr.value = t.value * 1000 * 1000;
      lb.value = t.value * 2204.6;
      oz.value = t.value * 35.3 * 1000;
      kn.value = t.value * 9.8 * 1000;
    } else if (gr.value !== "") {
      kg.value = gr.value / 1000;
      t.value = gr.value / 1000 / 1000;
      lb.value = gr.value / 453.6;
      oz.value = gr.value / 28.35;
      kn.value = gr.value * 0.00981;
    } else if (lb.value !== "") {
      kg.value = lb.value / 2.2;
      t.value = lb.value / 2204.6;
      gr.value = lb.value * 453.6;
      oz.value = lb.value * 16;
      kn.value = lb.value * 4.44822;
    } else if (oz.value !== "") {
      kg.value = oz.value / 35.274;
      t.value = oz.value * 28.34 * 10e-7;
      gr.value = oz.value * 28.34;
      lb.value = oz.value / 16;
      kn.value = oz.value / 3.57142;
    } else if (kn.value !== "") {
      kg.value = kn.value / 9.8;
      t.value = kn.value / 9.8 / 1000;
      gr.value = kn.value / 0.00981;
      lb.value = kn.value / 4.45;
      oz.value = kn.value * 3.59694;
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
