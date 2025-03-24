// Loader
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loaderSpinner");
  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  })
})