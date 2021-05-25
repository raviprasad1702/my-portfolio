const tabsContainer = document.querySelector(".about-section-tabs");
const aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("about-section-tabs__item") &&
    !e.target.classList.contains("active")
  ) {
    tabsContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const target = e.target.getAttribute("data-target");
    aboutSection
      .querySelector(".about-section-tabs__content.active")
      .classList.remove("active");
    aboutSection.querySelector(target).classList.add("active");
  }
});
