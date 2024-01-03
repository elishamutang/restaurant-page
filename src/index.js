// This module is the main module containing of the tab switching logic and page 
// load-up.

import styles from './styles.css';
import { header, tabDiv } from './header.js';
import { pictureDiv } from './content.js';
import { menuBarDivs } from './menuBar.js';

// Target content div
const contentDiv = document.querySelector('#mainContainer');

// Append different sections to main web page.
contentDiv.append(header);
contentDiv.append(pictureDiv);

// Append menu bar items to menu bar.
menuBarDivs.forEach((div) => {
    tabDiv.append(div);
    console.log(div.textContent);
})