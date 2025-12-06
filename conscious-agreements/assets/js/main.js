/**
 * Conscious Agreements Framework
 * Main JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize components first (header/footer)
    initComponents();

    // Then initialize interactive features
    initNavigation();
    initMobileMenu();
    initSmoothScrolling();
    initDefinitionHighlight();
});

/**
 * Navigation - highlight current page in menu
 */
function initNavigation() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.main-nav__link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;

        // Match exact path or parent section
        if (href === currentPath ||
            (href !== '/' && currentPath.startsWith(href.replace(/\/$/, '')))) {
            link.classList.add('main-nav__link--active');
        }
    });

    // Also highlight links in mega-menus for current page
    const megaMenuLinks = document.querySelectorAll('.mega-menu__list a');
    megaMenuLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath) {
            link.style.color = 'var(--gold-deep)';
            link.style.fontWeight = '600';
        }
    });
}

/**
 * Mobile menu initialization
 */
function initMobileMenu() {
    const toggle = document.querySelector('.main-nav__toggle');
    const nav = document.querySelector('.main-nav__links');
    const items = document.querySelectorAll('.main-nav__item');

    if (toggle && nav) {
        // Toggle main menu
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            nav.classList.toggle('is-open');
            toggle.textContent = nav.classList.contains('is-open') ? '✕' : '☰';
        });

        // Toggle submenus on mobile
        items.forEach(item => {
            const link = item.querySelector('.main-nav__link');
            const megaMenu = item.querySelector('.mega-menu');

            if (link && megaMenu) {
                link.addEventListener('click', (e) => {
                    // Only prevent default on mobile when there's a mega menu
                    if (window.innerWidth <= 768) {
                        e.preventDefault();
                        e.stopPropagation();

                        // Close other open menus
                        items.forEach(otherItem => {
                            if (otherItem !== item) {
                                otherItem.classList.remove('is-open');
                            }
                        });

                        // Toggle this menu
                        item.classList.toggle('is-open');
                    }
                });
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.main-nav')) {
                nav.classList.remove('is-open');
                toggle.textContent = '☰';
                items.forEach(item => item.classList.remove('is-open'));
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                nav.classList.remove('is-open');
                toggle.textContent = '☰';
                items.forEach(item => item.classList.remove('is-open'));
            }
        });
    }
}

/**
 * Smooth scrolling for anchor links
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Update URL without scrolling
                history.pushState(null, null, targetId);
            }
        });
    });
}

/**
 * Definition highlight - when linking to definitions,
 * briefly highlight them
 */
function initDefinitionHighlight() {
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target && target.classList.contains('definition-box')) {
            target.style.transition = 'background-color 0.3s ease';
            target.style.backgroundColor = 'rgba(212, 168, 83, 0.2)';
            setTimeout(() => {
                target.style.backgroundColor = '';
            }, 2000);
        }
    }
}

/**
 * Utility: Create breadcrumb from current path
 */
function generateBreadcrumb() {
    const path = window.location.pathname;
    const parts = path.split('/').filter(p => p);

    const breadcrumb = document.querySelector('.breadcrumb');
    if (!breadcrumb || parts.length === 0) return;

    let html = '<a href="/">Home</a>';
    let currentPath = '';

    parts.forEach((part, index) => {
        currentPath += '/' + part;
        const isLast = index === parts.length - 1;
        const name = formatBreadcrumbName(part);

        html += '<span class="breadcrumb__separator">→</span>';

        if (isLast) {
            html += `<span>${name}</span>`;
        } else {
            html += `<a href="${currentPath}/">${name}</a>`;
        }
    });

    breadcrumb.innerHTML = html;
}

/**
 * Utility: Format path segment as readable name
 */
function formatBreadcrumbName(segment) {
    // Remove .html extension
    segment = segment.replace('.html', '');
    // Handle index
    if (segment === 'index') return 'Overview';
    // Convert kebab-case to Title Case
    return segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

/**
 * Utility: Simple search within definitions
 * (Can be expanded for full-site search later)
 */
function searchDefinitions(query) {
    const definitions = document.querySelectorAll('.definition-box');
    const results = [];

    definitions.forEach(def => {
        const term = def.querySelector('.definition-box__term')?.textContent || '';
        const meaning = def.querySelector('.definition-box__meaning')?.textContent || '';

        if (term.toLowerCase().includes(query.toLowerCase()) ||
            meaning.toLowerCase().includes(query.toLowerCase())) {
            results.push({
                term: term,
                element: def
            });
        }
    });

    return results;
}

/**
 * Page transition effect (optional enhancement)
 */
function initPageTransitions() {
    // Add fade-in class to main content
    const main = document.querySelector('main');
    if (main) {
        main.style.opacity = '0';
        main.style.transition = 'opacity 0.3s ease';
        requestAnimationFrame(() => {
            main.style.opacity = '1';
        });
    }
}
