"use strict";
const weightForm = document.getElementById("weight"),
  wrapper = document.querySelector(".wrapper"),
  form = document.querySelector("form"),
  kg = document.querySelector("#kg"),
  t = document.querySelector("#t"),
  gr = document.querySelector("#gr"),
  lb = document.querySelector("#lb"),
  oz = document.querySelector("#oz"),
  kn = document.querySelector("#kn");
form.addEventListener("click", (e) => {
  const target = e.target;
  if (!target.matches("input")) {
    validation();
    if (kg.value !== "") {
      t.value = kg.value / 1000;
      gr.value = kg.value * 1000;
      lb.value = kg.value * 2.2;
      oz.value = kg.value * 35.3;
      kn.value = kg.value * 9.8;
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
