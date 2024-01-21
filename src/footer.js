// Footer section
import { mainContainer } from ".";
import { linkImgs } from "./home";
import footerLogo from "./assets/footer-logo.png";
import githubLogo from "./assets/github-mark-white.svg";

export default function footerSect() {

    // Footer section
    const footerSection = document.createElement('footer');
    const footerElems = [];


    // Generate 2 divs inside footer section.
    for(let i=0; i < 2; i++) {

        const footerDiv = document.createElement('div');
        footerDiv.id = `footerDiv${i+1}`;
        footerDiv.className = 'footer';

        
        for(let j=0; j < 2; j++) {

            const footerChildDivs = document.createElement('div');
            footerChildDivs.className = 'footerChildDivs';

            footerDiv.append(footerChildDivs);

        }
        
        footerElems.push(footerDiv);
        footerSection.append(footerDiv);

    }

    // Footer logo
    const footerLogoDiv = linkImgs(1, [footerLogo], 1, 'footerLogoDiv', '');

    // Footer children
    const footerDivOneChildOne = footerElems[0].children[0];
    footerDivOneChildOne.id = 'footerDivOneChildOne';

    // Append to first child div.
    footerDivOneChildOne.append(footerLogoDiv[0]);

    // Target second (or last) child of #footerDiv2 - (oriental kopi links)
    const footerDivOneChildTwo = footerElems[0].children[1];
    footerDivOneChildTwo.id = 'footerDivOneChildTwo';
    
    for(let linkTag=0; linkTag < 2; linkTag++) {

        const footerLink = document.createElement('a');
        footerLink.target = '_blank';

        if(linkTag == 0) {
            footerLink.textContent = 'Facebook';
            footerLink.href = 'https://www.facebook.com/orientalkopi';
        } else {
            footerLink.textContent = 'Instagram';
            footerLink.href = 'https://www.instagram.com/orientalkopi.asia/';
        }

        footerDivOneChildTwo.append(footerLink);

    }

    // Target first child of #footerDiv2 element.
    const footerDivTwoChildOne = footerElems[1].children[0];
    footerDivTwoChildOne.id = 'footerDivTwoChildOne';

    footerDivTwoChildOne.textContent = 'Created by elishamutang';

    // Target second child of #footerDiv2 element.
    const footerDivTwoChildTwo = footerElems[1].children[1];
    footerDivTwoChildTwo.id = 'footerDivTwoChildTwo';

    // Create link to GitHub profile
    const githubLink = document.createElement('a');
    githubLink.href = 'https://github.com/elishamutang';
    githubLink.target = '_blank';
    githubLink.innerHTML = `<img src=${githubLogo}>`;
    footerDivTwoChildTwo.append(githubLink);

    mainContainer.append(footerSection);

}