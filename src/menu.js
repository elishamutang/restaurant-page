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
    mainContainer.append(signatureSect());

}

function signatureSect() {

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
    signatureMenu.append(menuItems());

    return signatureMenu;

}

function menuItems() {

    const foodNames = ['Nasi Lemak', 'Malay Rendang Chicken', 'Mee Siam', 'Chicken Hor Fun', 'Char Kuey Teow', 'Curry Laksa Mee',
                        'Nanyang Curry', 'Hainanese Chicken Rice', 'Malay Fried Rice', 'Prawn Fried Rice', 'Signature Egg Tart',
                        'Polo Bun', 'Double Butter Kaya Toast', 'Rojak', 'Oriental Kopi', 'Cendol'];

    const foodImgs = [nasiLemak, malayRendangChicken, meeSiam, chickenHorFun, charKueyTeow, curryLaksaMee, nanyangCurry,
                        hainaneseChickenRice, malayFriedRice, prawnFriedRice, signatureEggTart, poloBun, doubleButterKayaToast,
                        rojak, orientalKopi, cendol];

    // Create 4x4 container to display each food.
    const foodItems = linkImgs(foodNames.length, foodImgs, foodNames.length, 'foodItem', 'foodItems');

    const foodContainer = document.createElement('div');
    foodContainer.id = 'foodContainer';

    foodItems.forEach((item) => {
        console.log(item);
        foodContainer.append(item);
    })

    return foodContainer;

}