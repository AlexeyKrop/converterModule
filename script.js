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
      oz.value = kg.value * 35.27396194958;
      kn.value = kg.value * 9.80665;
    }
    if (t.value !== "") {
      kg.value = t.value * 1000;
      gr.value = t.value * 1000 * 1000;
      lb.value = t.value * 2204.62;
      oz.value = t.value * 35.27396194958 * 1000;
      kn.value = t.value * 9.80665 * 1000;
    }
    if (gr.value !== "") {
      kg.value = gr.value / 1000;
      t.value = gr.value / 1000 / 1000;
      lb.value = gr.value / 453.592;
      oz.value = gr.value / 28.3495;
      kn.value = gr.value * 0.00981;
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
