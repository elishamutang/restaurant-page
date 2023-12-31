// Module for generating and appending header to webpage.

// Main header
export const header = document.createElement("div");
header.className = "header";
header.id = "header";

// Tabs on header div
const tabDiv = document.createElement('div');
tabDiv.className = 'header';
tabDiv.id = 'tabDiv';

header.append(tabDiv);

// Logo div
const logoDiv = document.createElement('div');
logoDiv.className = 'header';
logoDiv.id = 'logoDiv';