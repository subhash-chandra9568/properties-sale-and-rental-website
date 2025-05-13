// Click Hamburger Hide And Show Nav Links
let a = document.getElementById("bar");
let b = document.querySelector(".links");
let c = document.getElementById("close");

a.addEventListener("click", () => {
  b.style.display = "block";
  c.style.display = "block";
  a.style.display = "none";
});

c.addEventListener("click", () => {
  b.style.display = "none";
  c.style.display = "none";
  a.style.display = "block";
});

// Scroll Window Hide Nav Option
window.addEventListener("scroll", function () {
  let Navbar = this.document.getElementById("new-nav");
  Navbar.classList.toggle("fixed", this.window.scrollY > 0);

});

