// This module is the main module containing of the tab switching logic.

import styles from './styles.css';
import header from './header.js';
import navBar from './navBar.js';
import homePage from './home.js';
import menuPage from './menu.js';
import footerSect from './footer';

// Target main container div
export const mainContainer = document.querySelector('#mainContainer');
mainContainer.className = 'home';

// Append different sections to main web page.

// Load DOM
(function DOMHandler() {

    // Load header and navBar.
    header();
    navBar();
    
    // Initial load-up shows homepage.
    homePage();

    // Footer section
    footerSect();

    // Add event listener to navBar elements.
    const headerLinks = document.querySelectorAll('div .menu-item');

    headerLinks.forEach((link) => {
        link.addEventListener('click', tabSwitch);
    })

})();

// Tab switching logic
function tabSwitch(e) {
    
    // Target nav bar elements
    let navBarElems = e.target.textContent;
    console.log(navBarElems);

    // Clear content
    const pageContent = Array.from(document.querySelectorAll('#mainContainer > div, footer'));
    pageContent.splice(0, 1);

    pageContent.forEach((div) => {
        // Remove each div except for header from the DOM.
        div.remove();
    })

    switch(navBarElems) {

        case 'Home':
            mainContainer.className = 'home';
            homePage();
            break;

        case 'Menu':
            mainContainer.className = 'menu';
            menuPage();
            break;
    }

}