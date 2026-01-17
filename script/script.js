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
