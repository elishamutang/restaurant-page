// This module is the main module containing of the tab switching logic.

import styles from './styles.css';
import header from './header.js';
import navBar from './navBar.js';
import homePage from './home.js';
import menuPage from './menu.js';
import footerSect from './footer';
import productPage from './products';
import outletPage from './outlets';

// Target main container div
export const mainContainer = document.querySelector('#mainContainer');
mainContainer.className = 'home';


// Load DOM
(function DOMHandler() {

    // Load header and navBar.
    header();
    navBar();
    
    // Initial load-up shows homepage.
    homePage();

    // Footer section
    footerSect();

    // Add event listener to navBar elements and page title/company name.
    const headerLinks = document.querySelectorAll('div .menu-item');

    headerLinks.forEach((link) => {
        link.addEventListener('click', tabSwitch);
    })

    const titleLink = document.querySelector('#companyName');
    titleLink.addEventListener('click', tabSwitch);

    const outletsBtn = document.querySelector('#outletLink');
    outletsBtn.addEventListener('click', tabSwitch);

})();

// Tab switching logic
function tabSwitch(e) {
    
    // Target nav bar elements
    let linkElems = e.target.textContent;
    console.log(linkElems);

    // Clear content
    const pageContent = Array.from(document.querySelectorAll('#mainContainer > div, footer'));
    pageContent.splice(0, 1);

    pageContent.forEach((div) => {
        // Remove each div except for header from the DOM.
        div.remove();
    })

    // Re-directs user to top of page when switching between pages.
    window.scrollTo(0,0);

    switch(linkElems) {

        case 'Home':
        case 'Oriental Kopi':
            mainContainer.className = 'home';
            homePage();
            break;

        case 'Menu':
            mainContainer.className = 'menu';
            menuPage();
            break;

        case 'Products':
            mainContainer.className = 'products';
            productPage();
            break;

        case 'Outlets':
        case 'Our Outlets':
            mainContainer.className = 'outlets';
            outletPage();
            break;
    }

    footerSect();

}