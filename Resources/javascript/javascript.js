let readMore = document.querySelector(".me-paragraph-button");
let paragraphTwo = document.getElementById("me-para-two");

let open = function () {
  paragraphTwo.style.display = "block";
  readMore.style.display = "none";
};

readMore.addEventListener("click", open);

let imageContainer = document.getElementById("img-container");
let cartoonPic = document.getElementById("cartoon-img");
let realPic = document.getElementById("real-img");

let flip = function () {
  cartoonPic.style.display = "none";
  realPic.style.display = "block";
};

let flipBack = function () {
  realPic.style.display = "none";
  cartoonPic.style.display = "block";
};

imageContainer.addEventListener("mouseover", flip);
imageContainer.addEventListener("mouseout", flipBack);

let submitButton = document.getElementById("contact-submit-button");
let sender = document.getElementById("name");

let thankYouMessage = function () {
  alert(`Thank you! I will contact you as soon as possible!`);
};

submitButton.addEventListener("click", thankYouMessage);

const showOnPx = 200;
const backToTopButton = document.querySelector(".back-to-top");

const scrollContainer = function () {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

const goToTop = function () {
  document.body.scrollIntoView({ behavior: "smooth" });
};

backToTopButton.addEventListener("click", goToTop);
