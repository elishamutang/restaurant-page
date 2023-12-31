// This module is the main module containing of the tab switching logic and page 
// load-up.

import styles from './styles.css';
import { header } from './header.js';
import { content } from './content.js';

// Target content div
const contentDiv = document.querySelector('#mainContainer');

// Append different sections to main web page.
contentDiv.append(header);
contentDiv.append(content);