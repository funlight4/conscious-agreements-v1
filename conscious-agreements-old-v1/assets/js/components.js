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
                <!-- Foundation -->
                <li class="main-nav__item">
                    <a href="/foundation/" class="main-nav__link">Foundation <span class="main-nav__arrow">▼</span></a>
                    <div class="mega-menu">
                        <a href="/foundation/" class="mega-menu__overview">Foundation Overview →</a>
                        <ul class="mega-menu__list">
                            <li><a href="/foundation/what-is-agreement.html">What is Agreement?</a></li>
                            <li><a href="/foundation/conscious-unconscious.html">Conscious vs Unconscious</a></li>
                            <li><a href="/foundation/covert-contracts.html">Covert Contracts</a></li>
                            <li><a href="/foundation/healthy-agreements.html">Healthy Agreements</a></li>
                            <li><a href="/foundation/how-you-energize.html">How You Energize</a></li>
                        </ul>
                        <div class="mega-menu__title" style="margin-top: 1rem;">Money Creation</div>
                        <ul class="mega-menu__list">
                            <li><a href="/foundation/money-creation/">Money Creation Overview</a></li>
                            <li><a href="/foundation/money-creation/how-money-is-created.html">How Money is Created</a></li>
                            <li><a href="/foundation/money-creation/promissory-notes.html">Promissory Notes</a></li>
                            <li><a href="/foundation/money-creation/the-system.html">The System</a></li>
                        </ul>
                    </div>
                </li>

                <!-- Domains -->
                <li class="main-nav__item">
                    <a href="/domains/" class="main-nav__link">Domains <span class="main-nav__arrow">▼</span></a>
                    <div class="mega-menu mega-menu--wide">
                        <div class="mega-menu__grid">
                            <div class="mega-menu__section">
                                <div class="mega-menu__title">Commerce</div>
                                <ul class="mega-menu__list">
                                    <li><a href="/domains/commerce/">Commerce Overview</a></li>
                                    <li><a href="/domains/commerce/negotiable-instruments.html">Negotiable Instruments</a></li>
                                    <li><a href="/domains/commerce/consideration-in-commerce.html">Consideration</a></li>
                                    <li><a href="/domains/commerce/signatures-and-liability.html">Signatures & Liability</a></li>
                                    <li><a href="/domains/commerce/holders-and-enforcement.html">Holders & Enforcement</a></li>
                                </ul>
                            </div>
                            <div class="mega-menu__section">
                                <div class="mega-menu__title">Identity</div>
                                <ul class="mega-menu__list">
                                    <li><a href="/domains/identity/">Identity Overview</a></li>
                                    <li><a href="/domains/identity/the-name.html">The Name</a></li>
                                    <li><a href="/domains/identity/person-and-individual.html">Person & Individual</a></li>
                                    <li><a href="/domains/identity/private-public.html">Private vs Public</a></li>
                                    <li><a href="/domains/identity/citizenship.html">Citizenship</a></li>
                                </ul>
                            </div>
                            <div class="mega-menu__section">
                                <div class="mega-menu__title">Other Domains</div>
                                <ul class="mega-menu__list">
                                    <li><a href="/domains/governance/">Governance</a></li>
                                    <li><a href="/domains/property/">Property</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>

                <!-- Pathways -->
                <li class="main-nav__item">
                    <a href="/pathways/" class="main-nav__link">Pathways <span class="main-nav__arrow">▼</span></a>
                    <div class="mega-menu">
                        <a href="/pathways/" class="mega-menu__overview">Pathways Overview →</a>
                        <ul class="mega-menu__list">
                            <li><a href="/pathways/examining-agreement.html">Examining an Agreement</a></li>
                            <li><a href="/pathways/asking-right-questions.html">Asking the Right Questions</a></li>
                            <li><a href="/pathways/responding-to-claims.html">Responding to Claims</a></li>
                        </ul>
                        <div class="mega-menu__title" style="margin-top: 1rem;">Common Situations</div>
                        <ul class="mega-menu__list">
                            <li><a href="/pathways/common-situations/">Situations Overview</a></li>
                            <li><a href="/pathways/common-situations/mortgage-challenge.html">Mortgage Challenge</a></li>
                            <li><a href="/pathways/common-situations/debt-collection.html">Debt Collection</a></li>
                        </ul>
                    </div>
                </li>

                <!-- Templates -->
                <li class="main-nav__item">
                    <a href="/templates/" class="main-nav__link">Templates <span class="main-nav__arrow">▼</span></a>
                    <div class="mega-menu mega-menu--templates">
                        <a href="/templates/" class="mega-menu__overview">All Templates Overview →</a>
                        <div class="mega-menu__phases">
                            <div class="mega-menu__phase">
                                <div class="mega-menu__phase-title"><span class="mega-menu__phase-num">1</span> Discovery</div>
                                <ul class="mega-menu__list">
                                    <li><a href="/templates/phase-1/">Overview</a></li>
                                    <li><a href="/templates/phase-1/qwr.html">QWR</a></li>
                                    <li><a href="/templates/phase-1/debt-validation.html">Debt Validation</a></li>
                                    <li><a href="/templates/phase-1/foia-bundle.html">FOIA Bundle</a></li>
                                    <li><a href="/templates/phase-1/chain-of-title.html">Chain of Title</a></li>
                                    <li><a href="/templates/phase-1/original-documents.html">Original Docs</a></li>
                                    <li><a href="/templates/phase-1/privacy-act.html">Privacy Act</a></li>
                                </ul>
                            </div>
                            <div class="mega-menu__phase">
                                <div class="mega-menu__phase-title"><span class="mega-menu__phase-num">2</span> Challenge</div>
                                <ul class="mega-menu__list">
                                    <li><a href="/templates/phase-2/">Overview</a></li>
                                    <li><a href="/templates/phase-2/notice-disputed-debt.html">Disputed Debt</a></li>
                                    <li><a href="/templates/phase-2/notice-lack-consideration.html">Lack of Consideration</a></li>
                                    <li><a href="/templates/phase-2/notice-criminal-violations.html">Criminal Violations</a></li>
                                    <li><a href="/templates/phase-2/affidavit-of-truth.html">Affidavit of Truth</a></li>
                                </ul>
                            </div>
                            <div class="mega-menu__phase">
                                <div class="mega-menu__phase-title"><span class="mega-menu__phase-num">3</span> Court Filings</div>
                                <ul class="mega-menu__list">
                                    <li><a href="/templates/phase-3/">Overview</a></li>
                                    <li><a href="/templates/phase-3/motion-to-dismiss.html">Motion to Dismiss</a></li>
                                    <li><a href="/templates/phase-3/counterclaim.html">Counterclaim</a></li>
                                    <li><a href="/templates/phase-3/quiet-title.html">Quiet Title</a></li>
                                    <li><a href="/templates/phase-3/tro-injunction.html">TRO/Injunction</a></li>
                                    <li><a href="/templates/phase-3/notice-of-removal.html">Notice of Removal</a></li>
                                </ul>
                            </div>
                            <div class="mega-menu__phase">
                                <div class="mega-menu__phase-title"><span class="mega-menu__phase-num">4</span> Complaints</div>
                                <ul class="mega-menu__list">
                                    <li><a href="/templates/phase-4/">Overview</a></li>
                                    <li><a href="/templates/phase-4/fbi-complaint.html">FBI Complaint</a></li>
                                    <li><a href="/templates/phase-4/doj-referral.html">DOJ Referral</a></li>
                                    <li><a href="/templates/phase-4/cfpb-complaint.html">CFPB Complaint</a></li>
                                    <li><a href="/templates/phase-4/sec-complaint.html">SEC Complaint</a></li>
                                </ul>
                            </div>
                            <div class="mega-menu__phase">
                                <div class="mega-menu__phase-title"><span class="mega-menu__phase-num">5</span> Alternatives</div>
                                <ul class="mega-menu__list">
                                    <li><a href="/templates/phase-5/">Overview</a></li>
                                    <li><a href="/templates/phase-5/conditional-acceptance.html">Conditional Accept</a></li>
                                    <li><a href="/templates/phase-5/estoppel-certificate.html">Estoppel Cert</a></li>
                                    <li><a href="/templates/phase-5/promissory-note-offset.html">Note Offset</a></li>
                                    <li><a href="/templates/phase-5/indemnification-demand.html">Indemnification</a></li>
                                    <li><a href="/templates/phase-5/expert-affidavit.html">Expert Affidavit</a></li>
                                </ul>
                            </div>
                            <div class="mega-menu__phase">
                                <div class="mega-menu__phase-title"><span class="mega-menu__phase-num">6</span> Public Pressure</div>
                                <ul class="mega-menu__list">
                                    <li><a href="/templates/phase-6/">Overview</a></li>
                                    <li><a href="/templates/phase-6/press-release.html">Press Release</a></li>
                                    <li><a href="/templates/phase-6/congressional-petition.html">Congressional</a></li>
                                    <li><a href="/templates/phase-6/class-action-joinder.html">Class Action</a></li>
                                </ul>
                            </div>
                            <div class="mega-menu__phase">
                                <div class="mega-menu__phase-title"><span class="mega-menu__phase-num">7</span> Settlement</div>
                                <ul class="mega-menu__list">
                                    <li><a href="/templates/phase-7/">Overview</a></li>
                                    <li><a href="/templates/phase-7/settlement-agreement.html">Settlement</a></li>
                                    <li><a href="/templates/phase-7/deed-in-lieu.html">Deed in Lieu</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>

                <!-- Reference -->
                <li class="main-nav__item">
                    <a href="/reference/" class="main-nav__link">Reference <span class="main-nav__arrow">▼</span></a>
                    <div class="mega-menu">
                        <a href="/reference/" class="mega-menu__overview">Reference Overview →</a>
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
        <p class="footer__text">Conscious Agreements Framework — Private Knowledge Base</p>
        <p class="footer__quote">"Awareness is the beginning of choice."</p>
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
