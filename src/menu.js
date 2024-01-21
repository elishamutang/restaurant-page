// Menu page
import { mainContainer } from "./index.js";
import menuImage from "./assets/randomHeaderImgTwo.jpg";

export default function menuPage() {

    const menuImgDiv = document.createElement('div');
    menuImgDiv.id = 'menuImgDiv';
    menuImgDiv.className = 'headerImg';

    const menuImgTag = document.createElement('img');
    menuImgTag.src = menuImage;

    menuImgDiv.append(menuImgTag);
    mainContainer.append(menuImgDiv);

}