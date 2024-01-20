// Module for generating and appending header to webpage.
import { mainContainer } from "./index.js";

export default function header() {
    // Main header
    const header = document.createElement("div");
    header.className = "header";
    header.id = "header";

    // Logo div
    const logoDiv = document.createElement('div');
    logoDiv.className = 'header';
    logoDiv.id = 'logoDiv';

    header.append(logoDiv);

    // Company name
    const companyName = document.createElement('div');
    companyName.id = 'companyName';

    const companyNameLink = document.createElement('a');
    companyNameLink.textContent = 'Oriental Kopi';

    companyName.append(companyNameLink);
    logoDiv.append(companyName);

    // Tabs on header div
    const tabDiv = document.createElement('div');
    tabDiv.className = 'header';
    tabDiv.id = 'tabDiv';

    header.append(tabDiv);

    mainContainer.append(header);
}