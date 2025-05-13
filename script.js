// 1. Button Click and Hover
const magicBtn = document.getElementById("magicBtn");
const btnText = document.getElementById("btnText");

magicBtn.addEventListener("click", () => {
  btnText.textContent = "You clicked the button! 🎉";
  magicBtn.style.backgroundColor = "purple";
});

magicBtn.addEventListener("mouseover", () => {
  btnText.textContent = "You're hovering! 👀";
});

magicBtn.addEventListener("dblclick", () => {
  alert("🔥 You double-clicked me!");
});

// 2. Keypress Feedback
document.getElementById("keyInput").addEventListener("keydown", (e) => {
  document.getElementById("keyFeedback").textContent = `You pressed: ${e.key}`;
});

// 3. Image Gallery
const mainImage = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".thumb");

thumbnails.forEach(thumb => {
  thumb.addEventListener("click", () => {
    mainImage.src = thumb.src;
  });
});

// 4. Tabs
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    tabContents.forEach(content => content.classList.add("hidden"));
    document.getElementById(btn.dataset.tab).classList.remove("hidden");
  });
});

// 5. Form Validation
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

emailInput.addEventListener("input", () => {
  const emailFeedback = document.getElementById("emailFeedback");
  if (!emailInput.validity.valid) {
    emailFeedback.textContent = "Invalid email format.";
  } else {
    emailFeedback.textContent = "";
  }
});

passwordInput.addEventListener("input", () => {
  const passwordFeedback = document.getElementById("passwordFeedback");
  if (passwordInput.value.length < 8) {
    passwordFeedback.textContent = "Password must be at least 8 characters.";
  } else {
    passwordFeedback.textContent = "";
  }
});

document.getElementById("signupForm").addEventListener("submit", (e) => {
  if (!emailInput.validity.valid || passwordInput.value.length < 8) {
    e.preventDefault();
    alert("Please fix the errors before submitting.");
  }
});
