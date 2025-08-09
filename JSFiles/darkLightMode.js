'use strict'

const darkLightBtn = document.getElementById("dark-light-mode");

darkLightBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("light-mode");
});