// Homepage (or initial load-up page)
import { mainContainer } from "./index.js";
import orientalKopi1 from "./assets/oriental_1.webp";
import orientalKopi2 from "./assets/oriental_2.webp";
import orientalKopi3 from "./assets/oriental_3.webp";
import orientalKopi4 from "./assets/oriental_4.webp";
import orientalKopi5 from "./assets/oriental_5.webp";
import owner1 from "./assets/owner_1.jpg";
import owner2 from "./assets/owner_2.jpg";
import wordSectionHeader from "./assets/wordSectionHeader.png";

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

    wordSectionDiv();

}

function wordSectionDiv() {

    // Word section after old owner image
    
    const wordSection = document.createElement('div');
    wordSection.id = 'wordSection';

    const wordSectionTitle = document.createElement('div');
    wordSectionTitle.id = 'wordSectionTitle';

    const wordSectionTitleImg = document.createElement('img');
    wordSectionTitleImg.src = wordSectionHeader;

    wordSectionTitle.append(wordSectionTitleImg);

    const wordSectionWords = document.createElement('div');
    wordSectionWords.id = 'wordSectionWords';

    const firstPara = document.createElement('div');
    firstPara.id = 'firstPara';
    firstPara.textContent = `Master Huayang's ancestors came from Hainan. In his early days, he "ran foreign ships" to make a living in Southeast Asia. Over the years, he has become proficient in Western cuisine by working as a chef on ships. He has combined the essence of traditional Chinese food with exquisite snacks such as pastry egg tarts and pineapple buns to form today's Huayang Nanyang cuisine, especially the pastry egg tarts and ice-fire pineapple buns.`

    const secondPara = document.createElement('div');
    secondPara.id = 'secondPara';
    secondPara.textContent = `Huayang Teahouse carries the hometown feelings of overseas Chinese in Nanyang, and Huayang Coffee records the hard-working lives of overseas Chinese in the early days. Huayang Coffee is thick and mellow. Three kinds of high-quality coffee beans [Arabica, Robusta, and Liberica] are blended in a golden ratio and roasted at high temperatures to create a rich and mellow Huayang Coffee.`;

    const thirdPara = document.createElement('div');
    thirdPara.id = 'thirdPara';
    thirdPara.textContent = `Huayang has always adhered to the traditional cultural essence of Chinese cuisine, pursuing the highest quality raw materials and fresh ingredients. Following the traditional craftsmanship passed down by Huayang’s master chefs, we carefully research and produce dishes that are perfect in color, aroma and taste. Nanyang style cuisine, dim sum and sweet stew.`;

    // Append each paragraph to word section.
    wordSectionWords.append(firstPara);
    wordSectionWords.append(secondPara);
    wordSectionWords.append(thirdPara);

    // Append header and wording to section.
    wordSection.append(wordSectionTitle);
    wordSection.append(wordSectionWords);

    // Append to DOM.
    mainContainer.append(wordSection);

}