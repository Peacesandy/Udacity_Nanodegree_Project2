// 

document.addEventListener('DOMContentLoaded', function () {
    // List the navigation items
    const navItems = [
        { name: "Section 1", link: "#section1" },
        { name: "Section 2", link: "#section2" },
        { name: "Section 3", link: "#section3" },
        { name: "Section 4", link: "#section4" }
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
});

let lastScrollY = window.scrollY;

let isScrolling;

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('nav');
    const ScrollToTop = document.getElementById('scrollToTop');

    if (window.scrollY > lastScrollY) {
        nav.classList.add('hidden');
    } else {
        nav.classList.remove('hidden');
    }
    lastScrollY = Window.scrollY;


    // clear Time out function
    clearTimeout(isScrolling);

    // Show Scroll to Top button after scrolling below the fold
    if (window.top > Window.scroll) {
        ScrollToTop.classList.add('show');
    } else {
        ScrollToTop.classList.add('remove');
    }

});

document.getElementById('ScrollToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behaviour: smooth });
})

