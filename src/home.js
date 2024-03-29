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
import headerImg1 from "./assets/headerImg1.jpg";
import headingFlower from "./assets/heading-flower.png";
import malaPanMee from "./assets/mala-pan-mee.jpg";
import sambalRojak from "./assets/sambal-rojak.jpg";
import soupPanMee from "./assets/soup-pan-mee.jpg";
import tehTarik from "./assets/teh-tarik.jpg";
import branchImg from "./assets/branch.jpg";
import { orientalTitle } from "./menu.js";
import { tabSwitch } from "./index.js";
import footerSect from "./footer.js";



// Use this function to load homepage
export default function homePage() {

    // Append in order
    mainContainer.append(slider(5, [orientalKopi1, orientalKopi2, orientalKopi3, orientalKopi4, orientalKopi5], 1, 'sliderOne'));
    mainContainer.append(oldManDiv());
    mainContainer.append(history().historySection);
    mainContainer.append(randomHeaderImage('firstHeader', headerImg1));
    
    const repeatedDivs = Array.from(repetitiveDivs().repeatedDivs);
    
    repeatedDivs.forEach((div) => {
        mainContainer.append(div);
    })
    
    repetitiveDivs().insertWords();

    mainContainer.append(videoDiv());
    mainContainer.append(history().huayangDiv());
    mainContainer.append(randomHeaderImage('secondHeader', headerImgTwo));
    mainContainer.append(history().handmadeBread());
    mainContainer.append(randomHeaderImage('thirdHeader', randomHeaderImg3));
    mainContainer.append(history().signatureMerchandise());
    mainContainer.append(slider(4, [sambalRojak, malaPanMee, soupPanMee, tehTarik], 1, 'sliderTwo'));
    mainContainer.append(productSlider());
    mainContainer.append(history().outlets());
    
    footerSect();
}


// Slider for homepage.
function slider(numOfImgs, imageData, numOfDivs, sliderID) {

    // Create sliderWrapper div
    const sliderWrapper = document.createElement('div');
    sliderWrapper.id = sliderID;

    // Call function.
    let images = linkImgs(numOfImgs, imageData, numOfDivs, 'wrapper', 'wrapper');

    // Append wrapper to sliderWrapper
    images.forEach((image) => {
        sliderWrapper.append(image);
    })

    return sliderWrapper;

}

// Product slider (aka sliderTwo) containing two image carousels.
function productSlider() {

    const products = [sambalRojak, malaPanMee, soupPanMee, tehTarik];

    const sliderTwo = document.querySelector('#sliderTwo');
    const secondSet = linkImgs(4, products, 1, '', 'wrapper');

    secondSet.forEach((img) => {
        sliderTwo.append(img);
    })

    return sliderTwo;

}

// General function to link image tag to div (wrapper).
export function linkImgs(numOfImgs, imageData, numOfDivs, divID, divClass) {

    let imageDivArr = []

    for(let i=0; i < numOfDivs; i++) {

        const imageDiv = document.createElement('div');

        if(divID === '') {
            imageDiv.removeAttribute('id');
        } else {
            imageDiv.id = `${divID}${i+1}`;
        }

        if(divClass === '') {
            imageDiv.removeAttribute('class');
        } else {
            imageDiv.className = divClass;
        }

        if(numOfDivs == 1) {

            imageDiv.id = divID;

            for(let j=0; j < numOfImgs; j++) {

                const image = document.createElement('img');
    
                image.src = imageData[j];
    
                imageDiv.append(image);
    
            }

        } else {

            const image = document.createElement('img');
            image.src = imageData[i];

            imageDiv.append(image);

        }

        imageDivArr.push(imageDiv);

    }

    return imageDivArr;

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

    const historySectionTitle = orientalTitle('historySectionTitle', 'Brand Story');

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

        const huayangTitleDiv = orientalTitle('huayangTitleDiv', 'Malaysian Local Cuisine');
    
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
        huayangClassic.append(huayangTitleDiv);
        huayangClassic.append(huayangWords);

        return huayangClassic;
    
    }

    // Handmade bread section
    function handmadeBread() {

        const handmadeBreadDiv = document.createElement('div');
        handmadeBreadDiv.id = 'handmadeBreadDiv';
        handmadeBreadDiv.className = 'historySection';

        const handmadeBreadHeader = orientalTitle('handmadeBreadHeader', 'Homemade Traditional Toast');

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

    function signatureMerchandise() {

        let headerImgArr = [];
        let signatureTextArr = ['Oriental Kopi adheres to the philosophy of blending tradition with innovation while preserving heritage. We made our own specialties with meticulous craftsmanship and premium ingredients, continuing the legacy of Malaysia’s authentic flavours!',
                                'Each Oriental Kopi specialty embodies the fusion of traditional and modern tastes, meticulously developed with dedication. Our goal is to present the highest quality and deliciousness, ensuring that every bite is a delightful experience. Whether for personal enjoyment or as a thoughtful gift, Oriental Kopi specialties are definitely the best choice!']; 

        // Signature section
        const signatureSect = document.createElement('div');
        signatureSect.id = 'signatureSect';
        signatureSect.className = 'historySection non-img';

        // Header container
        const signatureHeader = document.createElement('div');
        signatureHeader.className = 'signatureHeader';
        
        const headerTitle = document.createElement('h1');
        headerTitle.textContent = 'Signature Merchandise';
        headerTitle.className = 'headerTitle';

        // Text content
        const signatureText = document.createElement('div');
        signatureText.id = 'signatureText';
        signatureText.className = 'historySectionWords';

        for(let i=0; i < 2; i++) {

            // Header
            const headerDivs = document.createElement('div');
            headerDivs.className = 'headerDivs';
            headerDivs.id = `headerDivs${i+1}`;

            const headerImgs = document.createElement('img');
            headerImgs.src = headingFlower;

            headerDivs.append(headerImgs);

            headerImgArr.push(headerDivs);

            // Paragraphs
            const signaturePara = document.createElement('p');
            signaturePara.textContent = `${signatureTextArr[i]}`;
            signatureText.append(signaturePara);

        }

        signatureHeader.append(headerImgArr[0]);
        signatureHeader.append(headerTitle);
        signatureHeader.append(headerImgArr[1]);
        signatureSect.append(signatureHeader);
        signatureSect.append(signatureText);



        return signatureSect;
    }

    function outlets() {

        // Outlet section
        const outletDiv = document.createElement('div');
        outletDiv.id = 'outletDiv';
        outletDiv.className = 'historySection non-img';

        // Header div
        const outletHeader = orientalTitle('outletHeader non-img', 'Outlets');

        // Content div (image only);
        const contentImg = linkImgs(1, [branchImg], 1, 'outlet', 'headerImg');

        // Outlet link
        const outletLink  = document.createElement('button');
        outletLink.id = 'outletLink';
        outletLink.textContent = 'Our Outlets';

        // Event listener to outlets page.
        outletLink.addEventListener('click', tabSwitch);

        outletDiv.append(outletHeader);
        outletDiv.append(contentImg[0]);
        outletDiv.append(outletLink);

        return outletDiv;

    }


    return {
        huayangDiv,
        historySection,
        handmadeBread,
        signatureMerchandise,
        outlets
    };

}

// A random (probably not random) image section.
function randomHeaderImage(elemId, imgSrc) {

    const randomHeaderDiv = document.createElement('div');
    randomHeaderDiv.id = elemId;
    randomHeaderDiv.className = 'headerImg';

    const randomHeaderImg = document.createElement('img');
    randomHeaderImg.src = imgSrc;

    randomHeaderDiv.append(randomHeaderImg);

    return randomHeaderDiv;

}

// Section where there are 3 images with words next to them.
function repetitiveDivs() {

    let repeatDiv;
    let wordDiv;
    let wordChildDiv;
    let repeatedDivs = [];

    // Each div will contain a word section and image section, so generate 3 img tags.
    const imageData = [coffeePic, eggTart, bunPic];

    // Images is an array of the images from imageData
    const images = linkImgs(3, imageData, 3, 'imgDiv');

    // Generate 3 similar divs with 2 div in each parent div.
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

        // Append image divs
        repeatDiv.append(images[i]);

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