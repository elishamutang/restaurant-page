// This module is the main module containing of the tab switching logic and page 
// load-up.

import styles from './styles.css';
import { header } from './header.js';

// Target content div
const contentDiv = document.querySelector('#mainContainer');

contentDiv.append(header);