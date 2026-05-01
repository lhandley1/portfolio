function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Terminal typing animation for hero subtitle
document.addEventListener('DOMContentLoaded', function () {
    const typed = document.querySelector('.terminal .typed');
    const text = 'AI Consultant/Developer';

    if (typed) {
        const terminal = typed.closest('.terminal');
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (reduced) {
            typed.textContent = text;
        } else {
            // Pre-render full text to measure and lock width, preventing layout shift
            typed.textContent = text;
            terminal.style.minWidth = terminal.scrollWidth + 'px';
            typed.textContent = '';

            let i = 0;
            const type = () => {
                if (i <= text.length) {
                    typed.textContent = text.slice(0, i);
                    i++;
                    setTimeout(type, i === 1 ? 400 : 55);
                }
            };
            type();
        }
    }

    // Accessibility: keep aria-expanded in sync for <details> project items and manage focus
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        const summary = item.querySelector('summary');
        summary.setAttribute('role', 'button');
        summary.setAttribute('aria-controls', '');
        item.addEventListener('toggle', () => {
            const expanded = item.hasAttribute('open');
            summary.setAttribute('aria-expanded', expanded ? 'true' : 'false');
            if (expanded) {
                const first = item.querySelector('.project-content');
                if (first) first.setAttribute('tabindex', '-1');
                if (first) first.focus();
            }
        });
    });
});
