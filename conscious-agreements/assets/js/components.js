/**
 * Conscious Agreements Framework
 * Shared Components - Header & Footer
 */

/**
 * Navigation Component
 * Renders the mega-menu navigation bar
 */
function renderNavigation() {
    return `
    <nav class="main-nav">
        <div class="main-nav__inner">
            <a href="/" class="main-nav__brand">Conscious Agreements</a>
            <button class="main-nav__toggle" aria-label="Toggle menu">☰</button>
            <ul class="main-nav__links">
                <!-- Discover (Foundation) -->
                <li class="main-nav__item">
                    <a href="/foundation/" class="main-nav__link">Discover <span class="main-nav__arrow">▼</span></a>
                    <div class="mega-menu">
                        <a href="/foundation/" class="mega-menu__overview">Discover the Games →</a>
                        <ul class="mega-menu__list">
                            <li><a href="/foundation/what-is-agreement.html">What Is an Agreement?</a></li>
                            <li><a href="/foundation/conscious-unconscious.html">Conscious vs Unconscious</a></li>
                            <li><a href="/foundation/how-you-energize.html">How You Energize</a></li>
                            <li><a href="/foundation/covert-contracts.html">Covert Contracts</a></li>
                            <li><a href="/foundation/healthy-agreements.html">Healthy Agreements</a></li>
                        </ul>
                        <div class="mega-menu__title" style="margin-top: 1rem;">The Money Magic Trick</div>
                        <ul class="mega-menu__list">
                            <li><a href="/foundation/money-creation/">Overview</a></li>
                            <li><a href="/foundation/money-creation/how-money-is-created.html">How Money Is Created</a></li>
                            <li><a href="/foundation/money-creation/promissory-notes.html">Your Note = Their Note</a></li>
                            <li><a href="/foundation/money-creation/the-system.html">The Consideration Paradox</a></li>
                        </ul>
                    </div>
                </li>

                <!-- Pathways -->
                <li class="main-nav__item">
                    <a href="/pathways/" class="main-nav__link">Pathways <span class="main-nav__arrow">▼</span></a>
                    <div class="mega-menu">
                        <a href="/pathways/" class="mega-menu__overview">Navigate the Territory →</a>
                        <div class="mega-menu__title">Common Situations</div>
                        <ul class="mega-menu__list">
                            <li><a href="/pathways/common-situations/mortgage-challenge.html">The Mortgage Path</a></li>
                            <li><a href="/pathways/common-situations/debt-collection.html">Debt Collection</a></li>
                        </ul>
                        <div class="mega-menu__title" style="margin-top: 1rem;">General Approaches</div>
                        <ul class="mega-menu__list">
                            <li><a href="/pathways/examining-agreement.html">Examining an Agreement</a></li>
                            <li><a href="/pathways/responding-to-claims.html">Responding to Claims</a></li>
                            <li><a href="/pathways/asking-right-questions.html">Asking the Right Questions</a></li>
                        </ul>
                    </div>
                </li>

                <!-- Templates -->
                <li class="main-nav__item">
                    <a href="/templates/" class="main-nav__link">Toolkit <span class="main-nav__arrow">▼</span></a>
                    <div class="mega-menu mega-menu--templates">
                        <a href="/templates/" class="mega-menu__overview">All Templates →</a>
                        <div class="mega-menu__phases">
                            <div class="mega-menu__phase">
                                <div class="mega-menu__phase-title"><span class="mega-menu__phase-num">1</span> Discovery</div>
                                <ul class="mega-menu__list">
                                    <li><a href="/templates/phase-1/">Overview</a></li>
                                    <li><a href="/templates/phase-1/qwr.html">QWR</a></li>
                                    <li><a href="/templates/phase-1/debt-validation.html">Debt Validation</a></li>
                                    <li><a href="/templates/phase-1/foia-bundle.html">FOIA Bundle</a></li>
                                </ul>
                            </div>
                            <div class="mega-menu__phase">
                                <div class="mega-menu__phase-title"><span class="mega-menu__phase-num">2</span> Challenge</div>
                                <ul class="mega-menu__list">
                                    <li><a href="/templates/phase-2/">Overview</a></li>
                                    <li><a href="/templates/phase-2/affidavit-of-truth.html">Affidavit of Truth</a></li>
                                    <li><a href="/templates/phase-2/notice-lack-consideration.html">Lack of Consideration</a></li>
                                </ul>
                            </div>
                            <div class="mega-menu__phase">
                                <div class="mega-menu__phase-title"><span class="mega-menu__phase-num">3</span> Court</div>
                                <ul class="mega-menu__list">
                                    <li><a href="/templates/phase-3/">Overview</a></li>
                                    <li><a href="/templates/phase-3/motion-to-dismiss.html">Motion to Dismiss</a></li>
                                    <li><a href="/templates/phase-3/quiet-title.html">Quiet Title</a></li>
                                </ul>
                            </div>
                            <div class="mega-menu__phase">
                                <div class="mega-menu__phase-title"><span class="mega-menu__phase-num">4</span> Complaints</div>
                                <ul class="mega-menu__list">
                                    <li><a href="/templates/phase-4/">Overview</a></li>
                                    <li><a href="/templates/phase-4/cfpb-complaint.html">CFPB</a></li>
                                    <li><a href="/templates/phase-4/fbi-complaint.html">FBI</a></li>
                                </ul>
                            </div>
                            <div class="mega-menu__phase">
                                <div class="mega-menu__phase-title"><span class="mega-menu__phase-num">5-7</span> More</div>
                                <ul class="mega-menu__list">
                                    <li><a href="/templates/phase-5/">Alternatives</a></li>
                                    <li><a href="/templates/phase-6/">Public Pressure</a></li>
                                    <li><a href="/templates/phase-7/">Settlement</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>

                <!-- Domains (for deep-dive content) -->
                <li class="main-nav__item">
                    <a href="/domains/" class="main-nav__link">Domains <span class="main-nav__arrow">▼</span></a>
                    <div class="mega-menu mega-menu--wide">
                        <div class="mega-menu__grid">
                            <div class="mega-menu__section">
                                <div class="mega-menu__title">Commerce</div>
                                <ul class="mega-menu__list">
                                    <li><a href="/domains/commerce/">Overview</a></li>
                                    <li><a href="/domains/commerce/negotiable-instruments.html">Negotiable Instruments</a></li>
                                    <li><a href="/domains/commerce/consideration-in-commerce.html">Consideration</a></li>
                                    <li><a href="/domains/commerce/signatures-and-liability.html">Signatures & Liability</a></li>
                                </ul>
                            </div>
                            <div class="mega-menu__section">
                                <div class="mega-menu__title">Identity</div>
                                <ul class="mega-menu__list">
                                    <li><a href="/domains/identity/">Overview</a></li>
                                    <li><a href="/domains/identity/the-name.html">The Name</a></li>
                                    <li><a href="/domains/identity/person-and-individual.html">Person & Individual</a></li>
                                    <li><a href="/domains/identity/citizenship.html">Citizenship</a></li>
                                </ul>
                            </div>
                            <div class="mega-menu__section">
                                <div class="mega-menu__title">Other</div>
                                <ul class="mega-menu__list">
                                    <li><a href="/domains/governance/">Governance</a></li>
                                    <li><a href="/domains/property/">Property</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>

                <!-- Reference -->
                <li class="main-nav__item">
                    <a href="/reference/" class="main-nav__link">Reference <span class="main-nav__arrow">▼</span></a>
                    <div class="mega-menu">
                        <a href="/reference/" class="mega-menu__overview">Reference Materials →</a>
                        <ul class="mega-menu__list">
                            <li><a href="/reference/terminology.html">Terminology & Definitions</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
    `;
}

/**
 * Footer Component
 * Renders the site footer
 */
function renderFooter() {
    return `
    <footer class="footer">
        <p class="footer__text">Conscious Agreements Framework — Your Journey to Choice</p>
        <p class="footer__quote">"You already have choice. Let's find where you put it."</p>
    </footer>
    `;
}

/**
 * Initialize components
 * Injects header and footer into placeholder elements
 */
function initComponents() {
    // Inject navigation
    const headerPlaceholder = document.getElementById('site-header');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = renderNavigation();
    }

    // Inject footer
    const footerPlaceholder = document.getElementById('site-footer');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = renderFooter();
    }
}

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { renderNavigation, renderFooter, initComponents };
}
