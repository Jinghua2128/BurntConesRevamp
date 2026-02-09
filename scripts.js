
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // Scroll effect for header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.remove('bg-transparent', 'py-6');
            header.classList.add('bg-white/80', 'backdrop-blur-xl', 'py-4', 'shadow-sm', 'border-b', 'border-neutral-100');
        } else {
            header.classList.add('bg-transparent', 'py-6');
            header.classList.remove('bg-white/80', 'backdrop-blur-xl', 'py-4', 'shadow-sm', 'border-b', 'border-neutral-100');
        }
    });

    // Mobile menu logic
    let isOpen = false;

    const toggleMenu = (forceClose = false) => {
        isOpen = forceClose ? false : !isOpen;
        
        if (isOpen) {
            mobileMenu.classList.remove('opacity-0', '-translate-y-4', 'pointer-events-none');
            mobileMenu.classList.add('opacity-100', 'translate-y-0');
            menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
            menuToggle.setAttribute('aria-expanded', 'true');
            header.classList.add('bg-white'); // Ensure header is solid when menu is open
        } else {
            mobileMenu.classList.add('opacity-0', '-translate-y-4', 'pointer-events-none');
            mobileMenu.classList.remove('opacity-100', 'translate-y-0');
            menuIcon.setAttribute('d', 'M4 6h16M4 12h16m-7 6h7');
            menuToggle.setAttribute('aria-expanded', 'false');
            if (window.scrollY <= 50) header.classList.remove('bg-white');
        }
    };

    menuToggle.addEventListener('click', () => toggleMenu());

    // Close menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => toggleMenu(true));
    });

    // Accessible Escape key to close menu
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isOpen) {
            toggleMenu(true);
        }
    });
});
