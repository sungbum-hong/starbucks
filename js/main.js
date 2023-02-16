// Main Header //

// Search Part //
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
const searchIconEl = searchEl.querySelector("span");

let inNotSearchClick = false;

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("material-symbols-outlined")) {
    inNotSearchClick = true;
  } else {
    inNotSearchClick = false;
  }
});

searchIconEl.addEventListener("click", function () {
  if ((searchEl, classList.contains("active"))) {
    searchEl.classList.add("active");
    searchInputEl.focus();
    searchInputEl.setAttribute("placeholder", "통합검색");
  } else if (inNotSearchClick) {
    searchInputEl.focus();
    searchInputEl.setAttribute("placeholder", "통합검색");
    inNotSearchClick = flase;
  } else {
    searchEl.classList.remove("acitve");
  }
});

searchInputEl.addEventListener("blur", function () {
  searchInputEl.setAttribute();
});
// searchEl.addEventListener("click", function() {
//   searchInputEl.focus();
// })

searchInputEl.addEventListener("focus", function () {
  searchInputEl.setAttribute("placeholder", "통합 검색");
});

searchInputEl.addEventListener("blur", function () {
  searchInputEl.setAttribute("placeholder", "");
});

// Swiper //
// Swiper Notice//
const swiperNoice = new Swiper(
  ".notice .notice-line .inner .inner__left .swiper",
  {
    direction: "vertical",
    loop: true,
    autoPlay: true,
  }
);

// Swiper promotion //
const swiperPromotion = new Swiper(".notice .promotion .swiper", {
  derection: "horizontal",
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-button-prev",
    nextEl: ".promotion .swiper-button-next",
  },
});

// AutoPaly 컨트롤 //
function controlAutoPlay() {
  if (swiperPromotion.autoPlay.running === false) {
    swiperPromotion.autoPlay.start();
  } else {
    swiperPromotion.autoPlay.stop();
  }
}

// Toggle Promotion //
const promotionSection = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".notice .toggle-promotion");

promotionToggleBtn.addEventListener("click", function () {
  if (promotionSection.classList.contains("hide")) {
    promotionSection.classList.remove("hide");
    promotionToggleBtn.classList.add("show");
  } else {
    promotionSection.classList.add("hide");
    promotionToggleBtn.classList.remove("show");
  }
});

// Animation Part //

// Visual //
window.onload = function () {
  const visualSection = document.querySelector(".visual");
  visualSection.classList.add("animate");
};

// Animation scroll Part //
// 엘사바도르 //
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    const elsalvadorSection = this.document.querySelector(".elsalvador");
    elsalvadorSection.classList.add("animate");
  }
  if (window.scrollY > 850) {
    const ethiopiaSection = this.document.querySelector(".ethiopia");
    ethiopiaSection.classList.add("animate");
  }
  if (window.scrollY > 1500) {
    const favoriteSection = this.document.querySelector(".favorite");
    favoriteSection.classList.add("animate");
  }
  if (window.scrollY > 2200) {
    const magazineSection = this.document.querySelector(".magazine");
    magazineSection.classList.add("animate");
  }
  if (window.scrollY > 2500) {
    const storeSection = this.document.querySelector(".store");
    storeSection.classList.add("animate");
  }
});
