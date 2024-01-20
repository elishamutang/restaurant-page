// This module is the main module containing of the tab switching logic.

import styles from './styles.css';
import { header, tabDiv } from './header.js';
import { menuBarDivs } from './menuBar.js';
import homePage from './home.js';

// Code below will need to be re-factored

// Target main container div
export const mainContainer = document.querySelector('#mainContainer');

// Append different sections to main web page.
mainContainer.append(header);

// Append menu bar items to menu bar.
menuBarDivs.forEach((div) => {
    tabDiv.append(div);
})

// Initial home page load-up
homePage();