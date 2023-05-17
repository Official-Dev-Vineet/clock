"use strict";
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".seconds");
const digitalClock = document.querySelector(".digital-clock");
setInterval(() => {
  const d = new Date(); //object of date()
  const hr = d.getHours();
  const min = d.getMinutes();
  const sec = d.getSeconds();
  const hr_rotation = 30 * hr + min / 2; //converting current time
  const min_rotation = 6 * min;
  const sec_rotation = 6 * sec;

  hour.style.transform = `translate(-50%, -100%) rotate(${hr_rotation}deg`;
  minute.style.transform = ` translate(-50%, -100%) rotate(${min_rotation}deg`;
  second.style.transform = ` translate(-50%, -100%) rotate(${sec_rotation}deg`;
  const now = new Date();
  const dhr = now.getHours().toLocaleString("en-US");
  const dmin = now.getMinutes();
  const dsec = now.getSeconds();
  digitalClock.innerHTML = `${dhr < 10 ? "0" + dhr : dhr}:${
    dmin < 10 ? "0" + dmin : dmin
  }:${dsec < 10 ? "0" + dsec : dsec}`;
}, 1000);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js");
  });
} else {
  console.log("Service worker not supported");
}
