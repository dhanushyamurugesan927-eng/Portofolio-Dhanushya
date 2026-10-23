// Function to switch active tabs smoothly
function switchTab(tabId) {
    // 1. Hide all tab contents
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active-tab');
    });

    // 2. Remove 'active' status from all nav links
    const links = document.querySelectorAll('.tab-link');
    links.forEach(link => {
        link.classList.remove('active');
    });

    // 3. Show target tab content
    const targetContent = document.getElementById(tabId);
    if (targetContent) {
        targetContent.classList.add('active-tab');
    }

    // 4. Highlight the corresponding navigation link
    links.forEach(link => {
        if (link.getAttribute('onclick') && link.getAttribute('onclick').includes(tabId)) {
            link.classList.add('active');
        }
    });

    // Scroll back to top on tab switch
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Dark/Light Theme Switching & Form Logic
document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('themeToggle');

    if (themeBtn) {
        const icon = themeBtn.querySelector('i');

        // Check for saved theme or default to dark
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);

        if (savedTheme === 'light' && icon) {
            icon.classList.replace('fa-moon', 'fa-sun');
        }

        themeBtn.addEventListener('click', () => {
            let currentTheme = document.documentElement.getAttribute('data-theme');

            if (currentTheme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                if (icon) icon.classList.replace('fa-sun', 'fa-moon');
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                if (icon) icon.classList.replace('fa-moon', 'fa-sun');
            }
        });
    }

    // Contact Form Handler
    const contactForm = document.getElementById('portfolioContactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            if (formStatus) {
                formStatus.textContent = "Thank you! Your message has been sent successfully.";
                formStatus.className = "form-status success";
            }

            contactForm.reset();

            setTimeout(() => {
                if (formStatus) formStatus.textContent = "";
            }, 4000);
        });
    }
});