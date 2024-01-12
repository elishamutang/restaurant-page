// Homepage (or initial load-up page)
import { mainContainer } from "./index.js";
import orientalKopi1 from "./assets/oriental_1.webp";
import orientalKopi2 from "./assets/oriental_2.webp";
import orientalKopi3 from "./assets/oriental_3.webp";
import orientalKopi4 from "./assets/oriental_4.webp";
import orientalKopi5 from "./assets/oriental_5.webp";
import owner1 from "./assets/owner_1.jpg";
import owner2 from "./assets/owner_2.jpg";
import historySectionHeader from "./assets/wordSectionHeader.png";
import bunPic from "./assets/bun_pic.jpg";
import coffeePic from "./assets/coffee_pic.jpg";
import eggTart from "./assets/egg_tart.jpg";
import coffeePicWord from "./assets/coffee_pic_word.png";
import coffeePicWord2 from "./assets/coffee_pic_word_2.png";
import eggTartWord from "./assets/egg_tart_word.png";
import eggTartWord2 from './assets/egg_tart_word_2.png';
import bunWord from "./assets/bun_word.png";
import bunWord2 from "./assets/bun_word_2.png";
import huayangClassicHeader from "./assets/huayangClassicHeader.png";
import headerImgTwo from "./assets/randomHeaderImgTwo.jpg";
import handmadeBreadPic  from "./assets/handmadeBreadImg.png";
import randomHeaderImg3 from "./assets/randomHeaderImg3.jpg";



// Use this function to load homepage
export default function homePage() {

    // Append in order
    mainContainer.append(slider());
    mainContainer.append(oldManDiv());
    mainContainer.append(history().historySection);
    mainContainer.append(randomHeaderImage().generateHeaderImg('firstHeader', orientalKopi1));
    
    // Append repetitive divs
    const repeatedDivs = Array.from(repetitiveDivs().repeatedDivs);
    
    repeatedDivs.forEach((div) => {
        mainContainer.append(div);
    })
    
    repetitiveDivs().insertWords();

    mainContainer.append(videoDiv());
    mainContainer.append(history().huayangDiv());
    mainContainer.append(randomHeaderImage().generateHeaderImg('secondHeader', headerImgTwo));
    mainContainer.append(history().handmadeBread());
    mainContainer.append(randomHeaderImage().generateHeaderImg('thirdHeader', randomHeaderImg3));
}


// Slider for homepage.
export function slider() {

    // Create sliderWrapper div
    const sliderWrapper = document.createElement('div');
    sliderWrapper.id = 'sliderWrapper';

    // Create wrapper to contain all the images
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper';

    // Append wrapper to sliderWrapper
    sliderWrapper.append(wrapper);

    // Generate image tags for slider.
    // Store images in array
    const imageData = [orientalKopi1, orientalKopi2, orientalKopi3, orientalKopi4, orientalKopi5];

    // Call function.
    let images = linkImgs(5, imageData);

    // Append each image
    images.forEach((image) => {
        wrapper.append(image);
    })

    return sliderWrapper;

}

// General function to link images.
function linkImgs(numOfImgs, imageData) {

    let images = [];

    for(let i=0; i < numOfImgs; i++) {

        const image = document.createElement('img');
        image.id = `image-${i+1}`;
        images.push(image);
        images[i].src = imageData[i];

    }

    return images;

}

// Picture of old owner.
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

    return oldImg;

}

// History section
function history() {

    // Word section after old owner image
    
    const historySection = document.createElement('div');
    historySection.id = 'historySection';
    historySection.className = 'historySection';

    const historySectionTitle = document.createElement('div');
    historySectionTitle.id = 'historySectionTitle';
    historySectionTitle.className = 'historySectionTitle';

    const historySectionTitleImg = document.createElement('img');
    historySectionTitleImg.src = historySectionHeader;
    historySectionTitleImg.className = 'historyHeader';

    historySectionTitle.append(historySectionTitleImg);

    const historySectionWords = document.createElement('div');
    historySectionWords.id = 'historySectionWords';
    historySectionWords.className = 'historySectionWords';

    const firstPara = document.createElement('p');
    firstPara.id = 'firstPara';
    firstPara.textContent = `Master Huayang's ancestors came from Hainan. In his early days, he "ran foreign ships" to make a living in Southeast Asia. Over the years, he has become proficient in Western cuisine by working as a chef on ships. He has combined the essence of traditional Chinese food with exquisite snacks such as pastry egg tarts and pineapple buns to form today's Huayang Nanyang cuisine, especially the pastry egg tarts and ice-fire pineapple buns.`

    const secondPara = document.createElement('p');
    secondPara.id = 'secondPara';
    secondPara.textContent = `Huayang Teahouse carries the hometown feelings of overseas Chinese in Nanyang, and Huayang Coffee records the hard-working lives of overseas Chinese in the early days. Huayang Coffee is thick and mellow. Three kinds of high-quality coffee beans [Arabica, Robusta, and Liberica] are blended in a golden ratio and roasted at high temperatures to create a rich and mellow Huayang Coffee.`;

    const thirdPara = document.createElement('p');
    thirdPara.id = 'thirdPara';
    thirdPara.textContent = `Huayang has always adhered to the traditional cultural essence of Chinese cuisine, pursuing the highest quality raw materials and fresh ingredients. Following the traditional craftsmanship passed down by Huayang’s master chefs, we carefully research and produce dishes that are perfect in color, aroma and taste. Nanyang style cuisine, dim sum and sweet stew.`;

    // Append each paragraph to word section.
    historySectionWords.append(firstPara);
    historySectionWords.append(secondPara);
    historySectionWords.append(thirdPara);

    // Append header and wording to section.
    historySection.append(historySectionTitle);
    historySection.append(historySectionWords);

    function huayangDiv() {

        // Huayang Classic section
        const huayangClassic = document.createElement('div');
        huayangClassic.id = 'huayangClassic';
        huayangClassic.className = 'historySection';
    
        const huayangHeader = document.createElement('img');
        huayangHeader.src = huayangClassicHeader;
        huayangHeader.className = 'historySectionTitle';
    
        const huayangWords = document.createElement('div');
        huayangWords.id = 'huayangWords';
        huayangWords.className = 'historySectionWords';
    
        const huayangPara1 = document.createElement('p');
        huayangPara1.id = 'huayangPara1';
        huayangPara1.textContent = 'Huayang adheres to the cultural essence of traditional Nanyang cuisine, pursues the highest quality raw materials and fresh ingredients, and follows the traditional craftsmanship passed down by Huayang’s old masters, carefully researching and producing Nanyang dishes that are perfect in color, aroma and taste. Flavored dishes, snacks and stewed sugar water.';
    
        const huayangPara2 = document.createElement('p');
        huayangPara2.id = 'huayangPara2';
        huayangPara2.textContent = 'Huayang is committed to delivering delicious traditional Nanyang cuisine. Famous signature delicacies include Huayang coffee, pastry egg tarts, classic nasi lemak, rice siam, curry chicken rice, shredded chicken rice noodles, etc. Each representative food carries The hometown feelings and the essence of food culture of early Nanyang overseas Chinese.';
    
        // Append huayang paragraphs to div
        huayangWords.append(huayangPara1);
        huayangWords.append(huayangPara2);
    
        // Append huayang header and words div to huayang classic.
        huayangClassic.append(huayangHeader);
        huayangClassic.append(huayangWords);

        return huayangClassic;
    
    }

    // Handmade bread section
    function handmadeBread() {

        const handmadeBreadDiv = document.createElement('div');
        handmadeBreadDiv.id = 'handmadeBreadDiv';
        handmadeBreadDiv.className = 'historySection';

        const handmadeBreadHeader = document.createElement('div');
        handmadeBreadHeader.id = 'handmadeBreadHeader';
        handmadeBreadHeader.className = 'historySectionTitle';

        const handmadeBreadImg = document.createElement('img');
        handmadeBreadImg.src = handmadeBreadPic;

        handmadeBreadHeader.append(handmadeBreadImg);

        const handmadeBreadWords = document.createElement('div');
        handmadeBreadWords.id = 'handmadeBreadWords';
        handmadeBreadWords.className = 'historySectionWords';

        const handmadeBreadPara = document.createElement('p');
        handmadeBreadPara.id = 'handmadeBreadPara';
        handmadeBreadPara.textContent = `The homemade thick bread is baked over medium heat, flipping it from front to back so that both sides of the bread are evenly heated and baked until golden and crispy! Paired with a variety of delicious ingredients with different flavors, you will feel the rich, crispy and fragrant taste with every bite!`;
        handmadeBreadWords.append(handmadeBreadPara);

        handmadeBreadDiv.append(handmadeBreadHeader);
        handmadeBreadDiv.append(handmadeBreadWords);

        return handmadeBreadDiv;

    }


    return {
        huayangDiv,
        historySection,
        handmadeBread
    };

}

// A random (probably not random) image section.
function randomHeaderImage() {

    function generateHeaderImg(elemId, imgSrc) {

        const randomHeaderDiv = document.createElement('div');
        randomHeaderDiv.id = elemId;
        randomHeaderDiv.className = 'headerImg';

        const randomHeaderImg = document.createElement('img');
        randomHeaderImg.src = imgSrc;

        randomHeaderDiv.append(randomHeaderImg);

        return randomHeaderDiv;

    }

    return {
        generateHeaderImg
    };

}

// Section where there are 3 images with words next to them.
function repetitiveDivs() {

    let repeatDiv;
    let wordDiv;
    let imgDiv;
    let wordChildDiv;
    let repeatedDivs = [];

    // Each div will contain a word section and image section, so generate 3 img tags.
    const imageData = [coffeePic, eggTart, bunPic];

    // Images is an array of the images from imageData
    const images = linkImgs(3, imageData);

    // Generate 3 similar divs with 2 divs in each parent div.
    for(let i=0; i < 3; i++) {

        // Parent div
        repeatDiv = document.createElement('div');
        repeatDiv.className = `repeatDivs`;
        repeatDiv.id = `repeatDiv${i+1}`;
        repeatedDivs.push(repeatDiv);

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

        repeatedDivs[i].append(wordDiv);

        // Image div
        imgDiv = document.createElement('div');
        imgDiv.id = `imgDiv${i+1}`;
        imgDiv.append(images[i]);

        repeatedDivs[i].append(imgDiv);

    }

    // Insert images to word section.
    function insertImg() {

        const wordImgTags = Array.from(document.querySelectorAll('.repeatDivs > div > div > img'));

        const wordImgArr = [coffeePicWord, coffeePicWord2, eggTartWord, eggTartWord2, bunWord, bunWord2];

        for(let idx=0; idx < wordImgTags.length; idx++) {

            wordImgTags[idx].src = wordImgArr[idx];

        }

    }

    insertImg();


    // Insert wording to word section div.

    function insertWords() {

        const lastWordChildDiv = Array.from(document.querySelectorAll('.wordDiv > div:last-child'));

        lastWordChildDiv[0].textContent = `Huayang adheres to the spirit of traditional Nanyang coffee culture, insists on selecting high-quality coffee beans, and mixes three types of high-quality coffee beans [Arabica, Robusta, and Liberica] in golden proportions. The brewed coffee is full of fragrance, thick and mellow.`;
        lastWordChildDiv[1].textContent = `Huayang uses traditional craftsmanship to make egg tarts. After years of careful research and improvement, it uses an exclusive formula to produce the "Huayang Crispy Egg Tart" with "color, aroma and taste"! Huayang Egg Tarts are hand-made one by one, and each layer of dense tart crust is folded repeatedly. It tastes like Huayang Egg Tarts are hand-made one by one, with each dense layer of tart crust folded repeatedly. Every bite is filled with rich egg fragrance, with a tinge of flavor. Sweet but not greasy, crispy and rich taste!`;
        lastWordChildDiv[2].textContent = `Huayang uses ancient techniques to make pineapple buns. An exclusive recipe produces golden, crispy and delicious traditional pineapple buns. Each pineapple bun is hand-made. The outer layer is baked at high temperature to become golden and crispy, while the bottom is It will be crispy and soft. Paired with cool butter, honey or condensed milk, the blend of hot and cold will elevate the entire taste of pineapple buns to another level.`;

    }

    return {
        repeatedDivs,
        insertWords
    };

}

// Video section of homepage.
function videoDiv() {

    const videoSection = document.createElement('div');
    videoSection.id = `videoSection`;

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

    return videoSection;

}