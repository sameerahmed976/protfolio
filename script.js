const closeBtn = document.querySelector(".close");
const sideBar = document.querySelector(".sidebar");

const openBtn = document.querySelector(".hamburger");

closeBtn.addEventListener("click", () => {
  sideBar.classList.remove("show-sidebar");
});
openBtn.addEventListener("click", () => {
  sideBar.classList.add("show-sidebar");
});
