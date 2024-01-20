// This module is the main module containing of the tab switching logic.

import styles from './styles.css';
import header from './header.js';
import navBar from './menuBar.js';
import homePage from './home.js';

// Code below will need to be re-factored

// Target main container div
export const mainContainer = document.querySelector('#mainContainer');

// Append different sections to main web page.
header();

// Menu bar
navBar();

// Initial home page load-up
homePage();