const hamburger = document.querySelector(".hamburger");
const navRight = document.querySelector("#nav");
const navLink= document.querySelector(".nav-link");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navRight.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navRight.classList.remove("active");
}
))