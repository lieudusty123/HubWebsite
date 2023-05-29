let stars = document.querySelector("#stars");
let moon = document.querySelector("#moon");
let mountains_behind = document.querySelector("#mountains_behind");
let mountains_front = document.querySelector("#mountains_front");
let text = document.querySelector("#text");
let btn = document.querySelector("#btn");
let header = document.querySelector("header");

const main = document.querySelector("main");
const about = document.querySelector("#about");
const work = document.querySelector("#work");
const contact = document.querySelector("#contact");
const footer = document.querySelector("footer");

// Handles moving stars and mountains in contact section

btn.style.display = "inline-block";
window.addEventListener("scroll", () => {
  window.requestAnimationFrame(handleScroll);
  function handleScroll() {
    if (window.scrollY < about.offsetTop) {
      btn.style.display = "inline-block";
      let value = window.scrollY;
      stars.style.left = value * 0.25 + "px";
      moon.style.top = value * 0.85 + "px";
      mountains_behind.style.top = value * 0.8 + "px";
      text.style.marginRight = value * 3 + "px";
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
      activeButtonsOnScroll();
    } else if (btn.style.display != "none") {
      btn.style.display = "none";
    }
  }
});

const headerUl = header.querySelector("ul");
const allHeaderButtons = headerUl.querySelectorAll("a");

allHeaderButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.className !== "active") {
      allHeaderButtons.forEach((innerButton) => {
        if (innerButton.className === "active") {
          innerButton.classList.remove("active");
        }
      });
      event.target.classList.add("active");
    }
  });
});

const myTags = [
  "JavaScript",
  "CSS",
  "HTML",
  "Bootstrap",
  "ReactJS",
  "React Router",
  "Redux",
  "git",
  "ES6",
  "SASS/SCSS",
  "ContextAPI",
  "NodeJS",
  "Express",
  "MongoDB",
  "Tailwind",
  "NextJS",
];
if (window.innerWidth > 700) {
  var tagCloud = TagCloud(".content", myTags, {
    radius: 200,
    maxSpeed: "slow",
    initSpeed: "slow",
    direction: 135,
    keep: true,
  });
}

mybutton = document.getElementById("myBtn");

const navBtns = document.querySelectorAll(".nav-button");
let btnArr = [...navBtns];
let sectionsArr = [main, about, work, contact];

function activeButtonsOnScroll() {
  if (window.scrollY >= 0 && window.scrollY < sectionsArr[1].offsetTop) {
    btnArr.forEach((button) => {
      if (btnArr[0] == button) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

mybutton.addEventListener("click", () => {
  topFunction();
});

activeButtonsOnScroll();
