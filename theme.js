const themeBtn = document.getElementById("themeBtn");
const mainContent = document.getElementById("mainContent");

let isDark = false;

themeBtn.addEventListener("click", function () {
  isDark = !isDark;

  if (isDark) {
    mainContent.style.backgroundColor = "#1e1e1e";
    mainContent.style.color = "#ffffff";
    themeBtn.textContent = "Светлая тема";
  } else {
    mainContent.style.backgroundColor = "#ffffff";
    mainContent.style.color = "#222222";
    themeBtn.textContent = "Темная тема";
  }
});
