document.addEventListener("DOMContentLoaded", () => {
  const aside = document.querySelector(".fullSidebar");

  aside.addEventListener("mouseenter", () => {
    // document.querySelector(".fullSidebar").classList.add("active");
    // document.querySelector(".menu").classList.add("active");
    document.querySelector(".slider").classList.add("active");
  });
  aside.addEventListener("mouseleave", () => {
    document.querySelector(".fullSidebar").classList.remove("active");
    // document.querySelector(".menu").classList.remove("active");
    document.querySelector(".slider").classList.remove("active");
  });
});