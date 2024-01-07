// Homepage (or initial load-up page)
import { mainContainer } from "./index.js";
import orientalKopi1 from "./assets/oriental_1.webp";
import orientalKopi2 from "./assets/oriental_2.webp";
import orientalKopi3 from "./assets/oriental_3.webp";
import orientalKopi4 from "./assets/oriental_4.webp";
import orientalKopi5 from "./assets/oriental_5.webp";

export function homePage() {

    // Create wrapper
    const sliderWrapper = document.createElement('div');
    sliderWrapper.id = 'sliderWrapper';

    // Append to mainContainer div
    mainContainer.append(sliderWrapper);

    // Generate image tags
    const images = generateImg();

    // Store images in array
    const imageData = [orientalKopi1, orientalKopi2, orientalKopi3, orientalKopi4, orientalKopi5];

    // Link image source to each img tag.
    for(let i=0; i<5; i++) {
        images[i].src = imageData[i];
        sliderWrapper.append(images[i]);
    }

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