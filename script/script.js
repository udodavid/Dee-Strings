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


  // Select the form
  // Form
// Modal functions
function showModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
}

function closeModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
}

  // Save form data locally and redirect
  function handleFormSubmission(formId) {
      const form = document.getElementById(formId);

      if (!form) return;

      form.addEventListener('submit', function(e) {
          e.preventDefault(); // prevent default submit

          // Collect form data
          const formData = new FormData(form);
          const data = Object.fromEntries(formData.entries());

          // Save data to localStorage
          localStorage.setItem('onlineFormData', JSON.stringify(data));

          // Optional: log for debugging
          console.log('Form data saved locally:', data);

          // Redirect to success page
          window.location.href = 'success.html';
      });
  }

  // Initialize the form handler
  handleFormSubmission('onlineClassesForm');


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


// Form
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form[name='online-classes']");
  const status = document.getElementById("formStatus");

  if (!form) return;

  form.addEventListener("submit", () => {
    status.textContent = "Submitting...";
    status.style.color = "blue";
  });
});


/* ===============================
   ONLINE CLASSES FORM HANDLER
   (Netlify-compatible)
================================ */
const handleSubmit = event => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  })
    .then(() => navigate("/thank-you/"))
    .catch(error => alert(error));
};

return (
  <form
    data-netlify="true"
    name="pizzaOrder"
    method="post"
    onSubmit={handleSubmit}
  >
    <input type="hidden" name="form-name" value="pizzaOrder" />
    <label>
      What order did the pizza give to the pineapple?
      <input name="order" type="text" onChange={handleChange} />
    </label>
    <input type="submit" />
  </form>
);
// const form = document.querySelector("form[data-form='online-classes']");

// if (form) {
//     form.addEventListener("submit", async (e) => {
//         e.preventDefault();

//         const status = document.getElementById("formStatus");
//         status.textContent = "Submitting...";
//         status.className = "text-blue-600 mt-4";

//         const formData = new FormData(form);

//         try {
//             const response = await fetch("/", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/x-www-form-urlencoded" },
//                 body: new URLSearchParams(formData).toString()
//             });

//             if (response.ok) {
//                 form.reset();
//                 // Optional: show success message before redirect
//                 status.textContent = "✅ Application submitted successfully!";
//                 status.className = "text-green-600 mt-4";

//                 // Redirect to success.html after a short delay (optional)
//                 setTimeout(() => {
//                     window.location.href = "success.html";
//                 }, 1000); // 1 second delay
//             } else {
//                 throw new Error("Submission failed");
//             }
//         } catch (error) {
//             status.textContent = "❌ Something went wrong. Please try again.";
//             status.className = "text-red-600 mt-4";
//         }
    });


// form.addEventListener("submit", async (e) => {
//     e.preventDefault();

//     const formData = new FormData(form);
//     const data = Object.fromEntries(formData.entries());

//     // Save to localStorage
//     localStorage.setItem("onlineFormData", JSON.stringify(data));

//     // Redirect
//     window.location.href = "success.html";
// });



//   /* ======================
//      DARK MODE
//   ====================== */
//   const toggle = document.getElementById("darkToggle");
//   if (toggle) {
//     toggle.onclick = () => {
//       document.documentElement.classList.toggle("dark");
//       localStorage.setItem(
//         "theme",
//         document.documentElement.classList.contains("dark") ? "dark" : "light"
//       );
//     };
//   }

//   if (localStorage.getItem("theme") === "dark") {
//     document.documentElement.classList.add("dark");
//   }
// });

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Save to localStorage
    localStorage.setItem("onlineFormData", JSON.stringify(data));

    // Redirect
    window.location.href = "success.html";
});
