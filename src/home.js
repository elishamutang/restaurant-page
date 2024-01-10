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
import bunPic from "./assets/bun_pic.jpg";
import coffeePic from "./assets/coffee_pic.jpg";
import eggTart from "./assets/egg_tart.jpg";
import coffeePicWord from "./assets/coffee_pic_word.png";
import coffeePicWord2 from "./assets/coffee_pic_word_2.png";
import eggTartWord from "./assets/egg_tart_word.png";
import eggTartWord2 from './assets/egg_tart_word_2.png';
import bunWord from "./assets/bun_word.png";
import bunWord2 from "./assets/bun_word_2.png";




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

    // Generate image tags for slider.
    // Store images in array
    const imageData = [orientalKopi1, orientalKopi2, orientalKopi3, orientalKopi4, orientalKopi5];

    // Call function.
    let images = generateImg(5, imageData);

    images.forEach((image) => {
        wrapper.append(image);
    })
    
    // Generate additional divs
    oldManDiv();
    wordSectionDiv();
    randomHeaderImage();
    repetitiveDivs();
    videoDiv();

}

// General function to link images.
function generateImg(numOfImgs, imageData) {

    let images = [];

    for(let i=0; i < numOfImgs; i++) {

        const image = document.createElement('img');
        image.id = `image-${i+1}`;
        images.push(image);
        images[i].src = imageData[i];

    }

    return images;

}

function oldManDiv() {

    // Old owner picture(?)
    const oldImg = document.createElement('div');
    oldImg.id = 'oldImg';

    // Since there are 2 images, create a wrapper
    const oldImgWrapper = document.createElement('div');
    oldImgWrapper.id = 'oldImgWrapper';

    // Create two separate divs to contain each img.
    const wrapperOne = document.createElement('div');
    wrapperOne.id = 'wrapperOne';

    const wrapperTwo = document.createElement('div');
    wrapperTwo.id = 'wrapperTwo';

    // Create img tags and append inside respective wrappers
    const ownerOneImg = document.createElement('img');
    ownerOneImg.src = owner1;

    const ownerTwoImg = document.createElement('img');
    ownerTwoImg.src = owner2;

    wrapperOne.append(ownerOneImg);
    wrapperTwo.append(ownerTwoImg);

    oldImgWrapper.append(wrapperOne);
    oldImgWrapper.append(wrapperTwo);

    oldImg.append(oldImgWrapper);
    mainContainer.append(oldImg);

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

function randomHeaderImage() {

    const randomHeaderImg = document.createElement('div');
    randomHeaderImg.id = 'randomHeaderImg';

    const randomHeaderImgTag = document.createElement('img');
    randomHeaderImgTag.src = orientalKopi1;

    randomHeaderImg.append(randomHeaderImgTag);
    mainContainer.append(randomHeaderImg);

}

function repetitiveDivs() {

    let repeatDiv;
    let wordDiv;
    let imgDiv;
    let wordChildDiv;

    // Each div will contain a word section and image section, so generate 3 img tags.
    const imageData = [coffeePic, eggTart, bunPic];

    // Images is an array of the images from imageData
    const images = generateImg(3, imageData);

    // Generate 3 similar divs with 2 divs in each parent div.
    for(let i=0; i < 3; i++) {

        // Parent div
        repeatDiv = document.createElement('div');
        repeatDiv.className = `repeatDivs`;
        repeatDiv.id = `repeatDiv${i+1}`;
        mainContainer.append(repeatDiv);

        // Word div
        wordDiv = document.createElement('div');
        wordDiv.id = `wordDiv${i+1}`;
        wordDiv.className = 'wordDiv';

        // Word child divs
        for(let j=0; j < 3; j++) {

            wordChildDiv = document.createElement('div');
            wordChildDiv.id = `wordChildDiv-${i+1}-${j+1}`;
            wordDiv.append(wordChildDiv);
            
            if(j < 2) {
                const wordChildImg = document.createElement('img');
                wordChildImg.id = `wordChildImg${j+1}`;
                wordChildDiv.append(wordChildImg);
            }

        }

        repeatDiv.append(wordDiv);

        // Image div
        imgDiv = document.createElement('div');
        imgDiv.id = `imgDiv${i+1}`;
        imgDiv.append(images[i]);

        repeatDiv.append(imgDiv);

    }

    // Insert images to word section.
    const wordImgTags = Array.from(document.querySelectorAll('.repeatDivs > div > div > img'));

    const wordImgArr = [coffeePicWord, coffeePicWord2, eggTartWord, eggTartWord2, bunWord, bunWord2];

    for(let idx=0; idx < wordImgTags.length; idx++) {

        wordImgTags[idx].src = wordImgArr[idx];

    }

    // Insert wording to word section div.
    const wordChildDiv3rd = Array.from(document.querySelectorAll('.wordDiv > div:last-child'));

    wordChildDiv3rd[0].textContent = `Huayang adheres to the spirit of traditional Nanyang coffee culture, insists on selecting high-quality coffee beans, and mixes three types of high-quality coffee beans [Arabica, Robusta, and Liberica] in golden proportions. The brewed coffee is full of fragrance, thick and mellow.`;
    wordChildDiv3rd[1].textContent = `Huayang uses traditional craftsmanship to make egg tarts. After years of careful research and improvement, it uses an exclusive formula to produce the "Huayang Crispy Egg Tart" with "color, aroma and taste"! Huayang Egg Tarts are hand-made one by one, and each layer of dense tart crust is folded repeatedly. It tastes like Huayang Egg Tarts are hand-made one by one, with each dense layer of tart crust folded repeatedly. Every bite is filled with rich egg fragrance, with a tinge of flavor. Sweet but not greasy, crispy and rich taste!`;
    wordChildDiv3rd[2].textContent = `Huayang uses ancient techniques to make pineapple buns. An exclusive recipe produces golden, crispy and delicious traditional pineapple buns. Each pineapple bun is hand-made. The outer layer is baked at high temperature to become golden and crispy, while the bottom is It will be crispy and soft. Paired with cool butter, honey or condensed milk, the blend of hot and cold will elevate the entire taste of pineapple buns to another level.`;

}

function videoDiv() {

    const videoSection = document.createElement('div');
    videoSection.id = `videoSection`;

    mainContainer.append(videoSection);

    const videoLinks = [`<iframe width="560" height="315" src="https://www.youtube.com/embed/jaRBPZtMnI8?si=hYWkZAs7-kbKJKK9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; " allowfullscreen></iframe>`, 
                        `<iframe width="560" height="315" src="https://www.youtube.com/embed/KhzpxCoyTkw?si=eOcI_NTy21bRf2Lk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; " allowfullscreen></iframe>`,
                        `<iframe width="560" height="315" src="https://www.youtube.com/embed/3tIc4aTF3Wo?si=gKHwQDauMJDreOXU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; " allowfullscreen></iframe>`]

    // Generate 3 video wrapper divs.
    for(let i=0; i < 3; i++) {

        const videoWrapperDiv = document.createElement('div');
        videoWrapperDiv.id = `videoSection${i+1}`;
        videoWrapperDiv.innerHTML = videoLinks[i];

        videoSection.append(videoWrapperDiv);

    }

}