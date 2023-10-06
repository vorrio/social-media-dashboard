"use strict";

let currentThemeLight = localStorage.getItem("theme");
const checkbox = document.querySelector('.switch-checkbox[name="theme"]');

if (currentThemeLight === null) localStorage.setItem("theme", "dark");
if (currentThemeLight === "light") {
	checkbox.checked = "light";
	document.querySelector("html").setAttribute("data-theme", "light");
}

checkbox.addEventListener("change", function() {
	if (this.checked) {
		currentThemeLight = "light";
  	document.querySelector("html").setAttribute("data-theme", "light");
  	localStorage.setItem("theme", "light");
	} else {
		currentThemeLight = "dark";
  	document.querySelector("html").setAttribute("data-theme", "dark");
  	localStorage.setItem("theme", "dark");
	}
})
