"use strict";
const reviewerAvatar = document.getElementById("av-reviewer");
const avatarOne = document.getElementById("av-one");
const currentAvatar = document.getElementById("av-two");
const avatarThree = document.getElementById("av-three");
const avatarEllipse = document.querySelector(".ellipse-thin-wrap");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const avWrapOne = document.getElementById("av-one-wrap");
const avWrapTWo = document.getElementById("av-two-wrap");
const avWrapThree = document.getElementById("av-three-wrap");

(function setcopyDate() {
  document.querySelector(".copy-year").innerText = new Date().getFullYear();
})();

avatarEllipse.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(e.target.src && true);
  if (!e.target.src) return;

  let { src: clickedSrc } = e.target;
  e.target.src = currentAvatar.src;
  currentAvatar.src = clickedSrc;
  reviewerAvatar.src = clickedSrc;
});

let curr = 0;

let dOne = avatarOne.getAttribute("src");
let dTwo = currentAvatar.getAttribute("src");
let dThree = avatarThree.getAttribute("src");

let srcs = ["assets/image 0.png", "assets/image 1.png", "assets/image 2.png"];

nextBtn.addEventListener("click", (e) => {
  if (dTwo === "assets/image 1.png") {
    console.log(dTwo, "yea");
    avatarOne.setAttribute("src", "assets/image 0.png");
    avatarThree.setAttribute("src", "assets/image 2.png");
    currentAvatar.setAttribute("src", srcs[1]);
    reviewerAvatar.setAttribute("src", srcs[1]);
    dTwo = srcs[0];
  } else if (dTwo === "assets/image 0.png") {
    console.log(dTwo, "yea");
    avatarOne.setAttribute("src", "assets/image 2.png");
    avatarThree.setAttribute("src", "assets/image 1.png");
    currentAvatar.setAttribute("src", srcs[0]);
    reviewerAvatar.setAttribute("src", srcs[0]);
    dTwo = srcs[2];
  } else if (dTwo === "assets/image 2.png") {
    console.log(dTwo, "yea");
    avatarOne.setAttribute("src", "assets/image 1.png");
    avatarThree.setAttribute("src", "assets/image 0.png");
    currentAvatar.setAttribute("src", srcs[2]);
    reviewerAvatar.setAttribute("src", srcs[2]);
    dTwo = srcs[1];
  } else {
    return;
  }
});

prevBtn.addEventListener("click", (e) => {
  if (dTwo === "assets/image 1.png") {
    avatarOne.setAttribute("src", "assets/image 0.png");
    avatarThree.setAttribute("src", "assets/image 2.png");
    currentAvatar.setAttribute("src", srcs[1]);
    reviewerAvatar.setAttribute("src", srcs[1]);
    dTwo = srcs[2];
  } else if (dTwo === "assets/image 0.png") {
    avatarOne.setAttribute("src", "assets/image 2.png");
    avatarThree.setAttribute("src", "assets/image 1.png");
    currentAvatar.setAttribute("src", srcs[0]);
    reviewerAvatar.setAttribute("src", srcs[0]);
    dTwo = srcs[1];
  } else if (dTwo === "assets/image 2.png") {
    avatarOne.setAttribute("src", "assets/image 1.png");
    avatarThree.setAttribute("src", "assets/image 0.png");
    currentAvatar.setAttribute("src", srcs[2]);
    reviewerAvatar.setAttribute("src", srcs[2]);
    dTwo = srcs[0];
  } else {
    return;
  }
});
