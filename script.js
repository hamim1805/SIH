// Tab switching
const tabs = document.querySelectorAll(".tab");
const forms = document.querySelectorAll(".search-form");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active from all
    tabs.forEach((t) => t.classList.remove("active"));
    forms.forEach((f) => f.classList.remove("active"));

    // Activate clicked tab + corresponding form
    tab.classList.add("active");
    const formId = tab.dataset.tab + "-form";
    document.getElementById(formId).classList.add("active");
  });
});

// Swap From ↔ To buttons
document.querySelectorAll(".swap-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const form = btn.closest(".search-form");
    const inputs = form.querySelectorAll("input[type='text']");
    if (inputs.length >= 2) {
      const temp = inputs[0].value;
      inputs[0].value = inputs[1].value;
      inputs[1].value = temp;
    }
  });
});

// Simple form submit handlers (demo)
document.querySelectorAll(".search-form").forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const type = form.id.replace("-form", "");
    alert(`Searching ${type}... (This is a frontend demo. Connect to a backend API for real results.)`);
  });
});

// Mobile menu toggle (basic)
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  nav.style.flexDirection = "column";
  nav.style.position = "absolute";
  nav.style.top = "70px";
  nav.style.right = "20px";
  nav.style.background = "white";
  nav.style.padding = "20px";
  nav.style.borderRadius = "12px";
  nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
});