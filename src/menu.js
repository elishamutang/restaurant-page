// Menu page
import { mainContainer } from "./index.js";
import menuImage from "./assets/randomHeaderImgTwo.jpg";
import headingFlower from "./assets/heading-flower.png";
import { linkImgs } from "./home.js";
import nasiLemak from "./assets/nasi-lemak.jpg";
import malayRendangChicken from "./assets/malay-rendang-chicken.jpg";
import meeSiam from "./assets/mee-siam.jpg";
import chickenHorFun from "./assets/chicken-hor-fun.jpg";
import charKueyTeow from "./assets/char-kuey-teow.jpg";
import curryLaksaMee from "./assets/curry-laksa-mee.jpg";
import nanyangCurry from "./assets/nanyang-curry.jpg";
import hainaneseChickenRice from "./assets/hainanese-chicken-rice.jpg";
import malayFriedRice from "./assets/malay-fried-rice.jpg";
import prawnFriedRice from "./assets/prawn-fried-rice.jpg";
import signatureEggTart from "./assets/signature-egg-tart.jpg";
import poloBun from "./assets/polo-bun.jpg";
import doubleButterKayaToast from "./assets/double-butter-kaya-toast.jpg";
import rojak from "./assets/rojak.jpg";
import orientalKopi from "./assets/oriental-kopi.jpg";
import cendol from "./assets/cendol.jpg";
import footerSect from "./footer.js";

export default function menuPage() {

    // Header image
    const menuImgDiv = document.createElement('div');
    menuImgDiv.id = 'menuImgDiv';
    menuImgDiv.className = 'headerImg';

    const menuImgTag = document.createElement('img');
    menuImgTag.src = menuImage;

    menuImgDiv.append(menuImgTag);
    mainContainer.append(menuImgDiv);
    
    // Append signature menu section.
    const signatureTitle = orientalTitle('signatureMenu', 'Signature Menu');
    
    signatureTitle.append(menuItems());

    mainContainer.append(signatureTitle);

    footerSect();

}

export function orientalTitle(sectionID, title) {

    // Signature menu section
    const sectionDiv = document.createElement('div');
    sectionDiv.id = sectionID;
    sectionDiv.className = 'non-img';

    // Signature menu heading
    const titleDiv = document.createElement('div');
    titleDiv.className = 'signatureHeader';

    const titleText = document.createElement('h1');
    titleText.textContent = title;
    titleText.className = 'headerTitle';

    const flowerDivs = [];

    for(let i=0; i<2; i++) {

        const flowerImg = document.createElement('img');
        flowerImg.src = headingFlower;

        const flowerImgDiv = document.createElement('div');
        flowerImgDiv.className = 'flowerImg';

        flowerImgDiv.append(flowerImg);

        flowerDivs.push(flowerImgDiv);
        titleDiv.append(flowerImgDiv);

    }

    const lastFlowerDiv = flowerDivs[1];
    lastFlowerDiv.insertAdjacentElement('beforebegin', titleText);

    sectionDiv.append(titleDiv);

    return sectionDiv;

}

function menuItems() {

    const foodNames = ['Nasi Lemak', 'Malay Rendang Chicken', 'Mee Siam', 'Chicken Hor Fun', 'Char Kuey Teow', 'Curry Laksa Mee',
                        'Nanyang Curry', 'Hainanese Chicken Rice', 'Malay Fried Rice', 'Prawn Fried Rice', 'Signature Egg Tart',
                        'Polo Bun', 'Double Butter Kaya Toast', 'Rojak', 'Oriental Kopi', 'Cendol'];

    const foodImgs = [nasiLemak, malayRendangChicken, meeSiam, chickenHorFun, charKueyTeow, curryLaksaMee, nanyangCurry,
                        hainaneseChickenRice, malayFriedRice, prawnFriedRice, signatureEggTart, poloBun, doubleButterKayaToast,
                        rojak, orientalKopi, cendol];

    // Create container to display each food.
    const foodItems = linkImgs(foodNames.length, foodImgs, foodNames.length, 'foodItem', 'foodItems');

    const foodContainer = document.createElement('div');
    foodContainer.id = 'foodContainer';

    for(let i=0; i<foodItems.length; i++) {

        // Add overlay for each food item to display name.
        const foodNameDiv = document.createElement('div');
        foodNameDiv.className = 'foodName';
        foodNameDiv.textContent = foodNames[i];

        // Event listener for mouse over.

        foodItems[i].addEventListener('mouseover', (e) => {
            foodItems[i].insertAdjacentElement('afterbegin', foodNameDiv);
            
            if(e.target.className == 'foodName') {
                e.target.className = 'foodName fade-in';
            }

        })

        foodItems[i].addEventListener('mouseout', (e) => {
            if(e.target.className == 'foodName fade-in') {
                e.target.className = 'foodName';
            }

        })

        foodContainer.append(foodItems[i]);

    }

    return foodContainer;

}