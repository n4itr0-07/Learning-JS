document.addEventListener("DOMContentLoaded", function () {
  // DOM Elements
  const passwordDisplay = document.getElementById("passwordDisplay");
  const lengthSlider = document.getElementById("lengthSlider");
  const lengthValue = document.getElementById("lengthValue");
  const uppercaseCheck = document.getElementById("uppercaseCheck");
  const lowercaseCheck = document.getElementById("lowercaseCheck");
  const numbersCheck = document.getElementById("numbersCheck");
  const symbolsCheck = document.getElementById("symbolsCheck");
  const generateBtn = document.getElementById("generateBtn");
  const copyBtn = document.getElementById("copyBtn");
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  // Character sets
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+~`|}{[]\\:;?><,./-=";

  // Theme toggle
  themeToggle.addEventListener("click", function () {
    body.classList.toggle("light-mode");
    body.classList.toggle("dark-mode");

    const icon = themeToggle.querySelector("i");
    if (body.classList.contains("dark-mode")) {
      icon.classList.remove("bi-moon-fill");
      icon.classList.add("bi-sun-fill");
      // Ensure slider is visible in dark mode
      lengthSlider.style.backgroundColor = "#555";
    } else {
      icon.classList.remove("bi-sun-fill");
      icon.classList.add("bi-moon-fill");
      // Ensure slider is visible in light mode
      lengthSlider.style.backgroundColor = "#ddd";
    }
  });

  // Initialize slider visibility based on current theme
  if (body.classList.contains("dark-mode")) {
    lengthSlider.style.backgroundColor = "#555";
  } else {
    lengthSlider.style.backgroundColor = "#ddd";
  }

  // Update length value display when slider changes
  lengthSlider.addEventListener("input", function () {
    lengthValue.textContent = this.value;
  });

  // Generate password function
  function generatePassword() {
    let length = lengthSlider.value;
    let charSet = "";
    let password = "";

    // Build character set based on selected options
    if (uppercaseCheck.checked) charSet += uppercaseChars;
    if (lowercaseCheck.checked) charSet += lowercaseChars;
    if (numbersCheck.checked) charSet += numberChars;
    if (symbolsCheck.checked) charSet += symbolChars;

    // Check if at least one character type is selected
    if (charSet.length === 0) {
      alert("Please select at least one character type!");
      return "8+osMqwr:Hjs"; // Default password from the image
    }

    // Generate password
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      password += charSet[randomIndex];
    }

    return password;
  }

  // Generate password button click handler
  generateBtn.addEventListener("click", function () {
    passwordDisplay.textContent = generatePassword();
  });

  // Copy password button click handler
  copyBtn.addEventListener("click", function () {
    const password = passwordDisplay.textContent;

    if (password) {
      navigator.clipboard
        .writeText(password)
        .then(function () {
          // Change button text temporarily
          const originalText = copyBtn.textContent;
          copyBtn.textContent = "Copied!";
          copyBtn.classList.remove("btn-success");
          copyBtn.classList.add("btn-secondary");

          setTimeout(function () {
            copyBtn.textContent = originalText;
            copyBtn.classList.remove("btn-secondary");
            copyBtn.classList.add("btn-success");
          }, 2000);
        })
        .catch(function (err) {
          console.error("Could not copy text: ", err);
        });
    }
  });

  // Generate initial password on page load
  passwordDisplay.textContent = generatePassword();
});
