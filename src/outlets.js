// Outlets page.
import orientalImg from './assets/oriental_picture.jpg';
import { mainContainer } from './index.js';
import { orientalTitle } from './menu.js';

export default function outletPage() {

    // Header image
    const outletHeaderDiv = document.createElement('div');
    outletHeaderDiv.id = 'outletHeader';
    outletHeaderDiv.className = 'headerImg';

    const outletHeaderImg = document.createElement('img');
    outletHeaderImg.src = orientalImg;

    outletHeaderDiv.append(outletHeaderImg);
    mainContainer.append(outletHeaderDiv);

    // Outlet title
    const outletTitle = orientalTitle('outletSection', 'Our Outlets');

    // outletTitle.append(products());

    mainContainer.append(outletTitle);

}