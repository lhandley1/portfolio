function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Accessibility: keep aria-expanded in sync for <details> project items and manage focus
document.addEventListener('DOMContentLoaded', function () {
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        // ensure aria
        const summary = item.querySelector('summary');
        summary.setAttribute('role', 'button');
        summary.setAttribute('aria-controls', '');
        item.addEventListener('toggle', () => {
            const expanded = item.hasAttribute('open');
            summary.setAttribute('aria-expanded', expanded ? 'true' : 'false');
            // when opening, move focus into the content for keyboard users
            if (expanded) {
                const first = item.querySelector('.project-content');
                if (first) first.setAttribute('tabindex', '-1');
                if (first) first.focus();
            }
        });
    });
});