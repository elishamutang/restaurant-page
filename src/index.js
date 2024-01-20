// This module is the main module containing of the tab switching logic.

import styles from './styles.css';
import header from './header.js';
import navBar from './navBar.js';
import homePage from './home.js';

// Target main container div
export const mainContainer = document.querySelector('#mainContainer');

// Append different sections to main web page.

// Load DOM
const loadDOM = (function DOMHandler() {

    // Load header and navBar.
    header();
    navBar();
    
    // Initial load-up shows homepage.
    homePage();

    // Add event listener to navBar elements.
    const headerLinks = document.querySelectorAll('div .menu-item');

    headerLinks.forEach((link) => {
        link.addEventListener('click', tabSwitch);
    })

})();

// Tab switching logic
function tabSwitch() {
    
    console.log('test');

}