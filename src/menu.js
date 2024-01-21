// Menu page
import { mainContainer } from "./index.js";
import menuImage from "./assets/randomHeaderImgTwo.jpg";
import headingFlower from "./assets/heading-flower.png";

export default function menuPage() {

    // Header image
    const menuImgDiv = document.createElement('div');
    menuImgDiv.id = 'menuImgDiv';
    menuImgDiv.className = 'headerImg';

    const menuImgTag = document.createElement('img');
    menuImgTag.src = menuImage;

    menuImgDiv.append(menuImgTag);
    mainContainer.append(menuImgDiv);
    
    // Signature menu section
    const signatureMenu = document.createElement('div');
    signatureMenu.id = 'signatureMenu';
    signatureMenu.className = 'non-img';

    // Signature menu heading
    const signatureHeader = document.createElement('div');
    signatureHeader.className = 'signatureHeader';

    const signatureTitle = document.createElement('h1');
    signatureTitle.textContent = 'Signature Menu';
    signatureTitle.className = 'headerTitle';

    const flowerDivs = [];

    for(let i=0; i<2; i++) {

        const flowerImg = document.createElement('img');
        flowerImg.src = headingFlower;

        const flowerImgDiv = document.createElement('div');
        flowerImgDiv.className = 'flowerImg';

        flowerImgDiv.append(flowerImg);

        flowerDivs.push(flowerImgDiv);
        signatureHeader.append(flowerImgDiv);

    }

    const lastFlowerDiv = flowerDivs[1];
    lastFlowerDiv.insertAdjacentElement('beforebegin', signatureTitle);

    signatureMenu.append(signatureHeader);
    mainContainer.append(signatureMenu);

}