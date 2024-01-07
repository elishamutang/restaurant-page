// Homepage (or initial load-up page)
import { mainContainer } from "./index.js";
import orientalKopi1 from "./assets/oriental_1.webp";
import orientalKopi2 from "./assets/oriental_2.webp";
import orientalKopi3 from "./assets/oriental_3.webp";
import orientalKopi4 from "./assets/oriental_4.webp";
import orientalKopi5 from "./assets/oriental_5.webp";
import owner1 from "./assets/owner_1.jpg";
import owner2 from "./assets/owner_2.jpg";

export function homePage() {

    // Create sliderWrapper div
    const sliderWrapper = document.createElement('div');
    sliderWrapper.id = 'sliderWrapper';

    // Create wrapper to contain all the images
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper';

    // Append wrapper to sliderWrapper
    sliderWrapper.append(wrapper);

    // Append to mainContainer div
    mainContainer.append(sliderWrapper);

    // Generate image tags
    const images = generateImg();

    // Store images in array
    const imageData = [orientalKopi1, orientalKopi2, orientalKopi3, orientalKopi4, orientalKopi5];

    // Link image source to each img tag.
    for(let i=0; i<5; i++) {
        images[i].src = imageData[i];
        wrapper.append(images[i]);
    }

    // Generate additional divs
    additionalDivs();

}

function generateImg() {

    let images = [];

    // In total, there are 5 images to show.
    for(let i=1; i < 6; i++) {

        const image = document.createElement('img');
        image.id = `image-${i}`;

        images.push(image);

    }

    return images;

}

function additionalDivs() {

    // Old owner picture(?)
    const oldImg = document.createElement('div');
    oldImg.id = 'oldImg';

    // Since there are 2 images, create a wrapper
    const oldImgWrapper = document.createElement('div');
    oldImgWrapper.id = 'oldImgWrapper';

    // Create img tags and append inside oldImgWrapper
    const ownerOneImg = document.createElement('img');
    ownerOneImg.src = owner1;

    const ownerTwoImg = document.createElement('img');
    ownerTwoImg.src = owner2;

    oldImgWrapper.append(ownerOneImg);
    oldImgWrapper.append(ownerTwoImg);

    oldImg.append(oldImgWrapper);
    mainContainer.append(oldImg);

}