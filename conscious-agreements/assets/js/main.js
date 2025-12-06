/**
 * Conscious Agreements Framework
 * Main JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initSmoothScrolling();
    initDefinitionHighlight();
});

/**
 * Navigation - highlight current page
 */
function initNavigation() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.main-nav__link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        // Match exact path or parent section
        if (href === currentPath || 
            (href !== '/' && currentPath.startsWith(href))) {
            link.classList.add('main-nav__link--active');
        }
    });
}

/**
 * Smooth scrolling for anchor links
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
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
 * Mobile menu toggle (for future implementation)
 */
function toggleMobileMenu() {
    const nav = document.querySelector('.main-nav__links');
    if (nav) {
        nav.classList.toggle('main-nav__links--open');
    }
}
