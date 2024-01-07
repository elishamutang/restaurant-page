// This module is the main module containing of the tab switching logic and page 
// load-up.

import styles from './styles.css';
import { header, tabDiv } from './header.js';
import { pictureDiv } from './branchAddress.js';
import { menuBarDivs } from './menuBar.js';

// Target main container div
const mainContainer = document.querySelector('#mainContainer');

// Append different sections to main web page.
mainContainer.append(header);
mainContainer.append(pictureDiv);

// Append menu bar items to menu bar.
menuBarDivs.forEach((div) => {
    tabDiv.append(div);
    console.log(div.textContent);
})