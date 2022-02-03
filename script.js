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
      kn.value = kg.value * 101.9715999814636;
    }
    if (t.value !== "") {
      kg.value = t.value * 1000;
      gr.value = kg.value * 1000;
      lb.value = kg.value * 2.2;
      oz.value = kg.value * 35.27396194958;
      kn.value = kg.value * 101.9715999814636;
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
