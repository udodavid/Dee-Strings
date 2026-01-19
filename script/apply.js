(() => {
    const enquiryBtn = document.getElementById("enquiryBtn");
    const enquiryMenu = document.getElementById("enquiryMenu");
    const darkToggle = document.getElementById("darkToggle");
    const html = document.documentElement;

    // --- Enquiry Toggle ---
    enquiryBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        enquiryMenu.classList.toggle("active");
    });

    // Close on outside click
    document.addEventListener("click", () => {
        enquiryMenu.classList.remove("active");
    });

    // Close on ESC
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") enquiryMenu.classList.remove("active");
    });

    // --- Dark Mode ---
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") html.classList.add("dark");

    darkToggle.addEventListener("click", () => {
        html.classList.toggle("dark");
        localStorage.setItem(
            "theme",
            html.classList.contains("dark") ? "dark" : "light"
        );
    });
})();



// Form
function showModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');  }

  function closeModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');  }

  // Get the current year and update the footer
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Get the last modified date of the document and update the footer
document.getElementById('lastModified').textContent = "Last Modified: " + document.lastModified;

// SAVE LOCALLY AS JSON
  const form = document.getElementById("onlineClassesForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    let submissions = JSON.parse(localStorage.getItem("onlineClasses")) || [];

    submissions.push({
      ...data,
      submittedAt: new Date().toISOString()
    });

    localStorage.setItem("onlineClasses", JSON.stringify(submissions, null, 2));

    form.reset();
    window.location.href = "success.html";
  });

  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_DOMAIN",
    projectId: "YOUR_PROJECT_ID"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  