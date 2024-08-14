console.log("hi");

window.addEventListener("scroll", (e) => {
  const header = document.getElementsByTagName("header")[0];
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
