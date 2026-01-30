// THEME
const toggle = document.getElementById("themeToggle");
if (localStorage.theme === "light") document.body.classList.add("light");

toggle?.addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.theme = document.body.classList.contains("light") ? "light" : "dark";
});

// CV MODAL
function openCV() {
  document.getElementById("cvModal").style.display = "block";
}
function closeCV() {
  document.getElementById("cvModal").style.display = "none";
}

// WRITEUPS
function toggleDetails(btn) {
  btn.nextElementSibling.style.display =
    btn.nextElementSibling.style.display === "block" ? "none" : "block";
}

function filterCards(type) {
  document.querySelectorAll(".card").forEach(c => {
    c.style.display = type === "all" || c.classList.contains(type) ? "block" : "none";
  });
}
