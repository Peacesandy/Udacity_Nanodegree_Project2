document.addEventListener('DOMContentLoaded', function () {
    // List the navigation items
    const navItems = [
        { name: "Save", link: "#section1" },
        { name: "Invest", link: "#section2" },
        { name: "Stories", link: "#section3" },
        { name: "FAQs", link: "#section4" }
    ];

    // Select the empty UL element
    const ul = document.getElementById('nav');

    // Dynamically create each navigation item and append to UL
    navItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = item.name;
        a.href = item.link;
        li.appendChild(a);
        ul.appendChild(li);
    });

    // After dynamically adding the navigation items, we need to select them
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Function to highlight the section in view and its corresponding nav link
    function highlightSection() {
        let activeSectionIndex = -1;
        let minDistance = Infinity;

        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();

            // Calculate the distance from the top of the viewport to the top of the section
            const distance = Math.abs(rect.top);

            // Update the active section if this section is closer to the top
            if (distance < minDistance && rect.top >= 0) {
                minDistance = distance;
                activeSectionIndex = index;
            }
        });

        // Remove the active class from all links and sections
        navLinks.forEach(link => link.classList.remove('active'));
        sections.forEach(section => section.classList.remove('active'));

        // Add the active class to the link and section corresponding to the active section
        if (activeSectionIndex !== -1) {
            navLinks[activeSectionIndex].classList.add('active');
            sections[activeSectionIndex].classList.add('active');
        }
    }

    // Highlight the section when the user scrolls
    window.addEventListener('scroll', highlightSection);
    highlightSection(); // Initial call to highlight the first section

    // Smooth scrolling to section on link click
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            } else {
                console.error(`Element with ID ${targetId} not found.`);
            }
        });
    });

    // Optional: Scroll to top button functionality
    const scrollToTopBtn = document.getElementById('scrollToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > window.innerHeight) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

function highlightSection() {
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();

        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            // Remove the active class from all links
            navLinks.forEach((link) => link.classList.remove('active'));

            // Add the active class to the current section's link
            navLinks[index].classList.add('active');
        }
    });
}

// Highlight the section on scroll
window.addEventListener('scroll', highlightSection);
highlightSection(); // Initial call to highlight the first section

// Scroll to section on link click
navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        } else {
            console.error(`Element with ID ${targetId} not found.`);
        }
    });
});

let lastScrollY = window.scrollY;
let isScrolling;

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('nav');
    const scrollToTop = document.getElementById('scrollToTop');

    if (window.scrollY > lastScrollY) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }
    lastScrollY = window.scrollY;

    // Clear timeout function
    clearTimeout(isScrolling);

    // Show Scroll to Top button after scrolling below the fold
    if (window.scrollY > window.innerHeight) {
        scrollToTop.classList.add('show');
    } else {
        scrollToTop.classList.remove('show');
    }

    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(() => {
        navbar.classList.remove('hidden');
    }, 300);
});

document.getElementById('scrollToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

