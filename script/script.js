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
document.addEventListener("DOMContentLoaded", () => {

  /* ======================
     MOBILE MENU
  ====================== */
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuBtn) {
    menuBtn.onclick = () => mobileMenu.classList.toggle("hidden");
  }

  /* ======================
     ACTIVE NAV LINK
  ====================== */
  document.querySelectorAll(".nav-link").forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("text-yellow-400");
    }
  });

//   Slideshow
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

function showSlide(index) {
  slides.forEach(slide => slide.style.display = "none");
  dots.forEach(dot => dot.classList.remove("active"));

  slides[index].style.display = "block";
  dots[index].classList.add("active");
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    slideIndex = i;
    showSlide(slideIndex);
  });
});

/* Auto slide */
setInterval(nextSlide, 5000);

/* Init */
showSlide(slideIndex);


/* ===============================
   ONLINE CLASSES FORM HANDLER
   (Netlify-compatible)
================================ */
const form = document.querySelector("form[data-form='online-classes']");

if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const status = document.getElementById("formStatus");
        status.textContent = "Submitting...";
        status.className = "text-blue-600 mt-4";

        const formData = new FormData(form);

        try {
            const response = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString()
            });

            if (response.ok) {
                form.reset();
                status.textContent = "✅ Application submitted successfully!";
                status.className = "text-green-600 mt-4";
            } else {
                throw new Error("Submission failed");
            }
        } catch (error) {
            status.textContent = "❌ Something went wrong. Please try again.";
            status.className = "text-red-600 mt-4";
        }
    });
}

  /* ======================
     DARK MODE
  ====================== */
  const toggle = document.getElementById("darkToggle");
  if (toggle) {
    toggle.onclick = () => {
      document.documentElement.classList.toggle("dark");
      localStorage.setItem(
        "theme",
        document.documentElement.classList.contains("dark") ? "dark" : "light"
      );
    };
  }

  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
  }
});
