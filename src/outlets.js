// Outlets page.
import orientalImg from './assets/oriental_picture.jpg';
import midValleyMegamall from './assets/mid_valley_megamall.jpg';
import pavillionKL from './assets/pavillion_kl.jpg';
import trx from './assets/trx_kl.jpg';
import klcc from './assets/klcc.jpg';
import sunwayPyramid from './assets/sunway_pyramid.jpg';
import pavillionBukitJalil from './assets/pavillion_bukit_jalil.jpg';
import klia2Arrival from './assets/klia2.webp';
import klia2Departure from './assets/klia2.webp';
import puchong from './assets/puchong.jpg';
import midValleyJB from './assets/mid_valley_jb.jpg';
import jbCitySquare from './assets/jb_city_square.jpg';
import aeonTebrauCity from './assets/aeon_tebrau_city.jpg';
import johorJayaJB from './assets/johor_jaya_jb.jpeg';
import { mainContainer } from './index.js';
import { orientalTitle } from './menu.js';
import { linkImgs } from './home.js';

export default function outletPage() {

    // Header image
    const outletHeaderDiv = document.createElement('div');
    outletHeaderDiv.id = 'outletHeader';
    outletHeaderDiv.className = 'headerImg';

    const outletHeaderImg = document.createElement('img');
    outletHeaderImg.src = orientalImg;

    outletHeaderDiv.append(outletHeaderImg);
    mainContainer.append(outletHeaderDiv);

    // Outlet title
    const outletTitle = orientalTitle('outletSection', 'Our Outlets');

    outletTitle.append(outletSect());

    mainContainer.append(outletTitle);

}

function outletSect() {

    const outletInfos = outletInfo();

    // Initialize outlet section.
    const outletContainer = document.createElement('div');
    outletContainer.id = 'outletContainer';

    // KL Selangor Area
    const KLSelangorArea = document.createElement('div');
    KLSelangorArea.id = 'KLSelangorArea';

    // Johor Area
    const johorSect = document.createElement('div');
    johorSect.id = 'johorSect';

    outletContainer.append(KLSelangorArea);
    outletContainer.append(johorSect);

    // Extract outlet images from outletInfo().
    const KLSelangorImgs = [];

    for(let i = 0; i < outletInfos.kualaLumpurSelangor.length; i++) {
        KLSelangorImgs.push(outletInfos.kualaLumpurSelangor[i].img);
    };

    const johorImgs = [];

    for(let j = 0; j < outletInfos.johorArea.length; j++) {
        johorImgs.push(outletInfos.johorArea[j].img);
    }

    // Add mall images behind each outlet div and make it overlay like menu and product pages.
    const KLSelangorImgDivs = linkImgs(KLSelangorImgs.length, KLSelangorImgs, KLSelangorImgs.length, 'KL-Selangor-Outlet', 'outletClass');

    // KL Selangor Area.
    const KLSelangorImgDivResult = generateOverlay(KLSelangorImgDivs, outletInfos.kualaLumpurSelangor);

    KLSelangorImgDivResult.forEach((outlet) => {
        KLSelangorArea.append(outlet);
    })

    // Johor Area.
    const johorImgDivs = linkImgs(johorImgs.length, johorImgs, johorImgs.length, 'Johor-Outlet', 'outletClass');

    const johorImgDivResult = generateOverlay(johorImgDivs, outletInfos.johorArea);

    johorImgDivResult.forEach((outlet) => {
        johorSect.append(outlet);
    })

    return outletContainer;

}

function generateOverlay(imgDiv, outlet) {

    const resultDiv = [];

    for(let i=0; i<imgDiv.length; i++) {

        // Add overlay for each product to display product name.
        const outletNameDiv = document.createElement('div');
        outletNameDiv.className = 'outletName';
        outletNameDiv.innerHTML = `${outlet[i].name}<br>
                                    ${outlet[i].time}<br>
                                    ${outlet[i].location}`;

        // Event listener for mouse over.

        imgDiv[i].addEventListener('mouseover', (e) => {
            imgDiv[i].insertAdjacentElement('afterbegin', outletNameDiv);
            
            if(e.target.className == 'outletName') {
                e.target.className = 'outletName fade-in';
            }

        })

        imgDiv[i].addEventListener('mouseout', (e) => {
            if(e.target.className == 'outletName fade-in') {
                e.target.className = 'outletName';
            }
        })

        resultDiv.push(imgDiv[i]);

    }

    return resultDiv;

}


function outletInfo() {

    const kualaLumpurSelangor = [
        {
            name: 'Mid Valley Megamall',
            time: '8am - 10pm',
            location: 'LG-043, Lower Ground Floor',
            img: midValleyMegamall
        },
        {
            name: 'Pavillion Kuala Lumpur',
            time: '9am - 10pm',
            location: 'Lot 1.30, 1.31, Level 1',
            img: pavillionKL
        },
        {
            name: 'TRX',
            time: '9am - 10pm',
            location: 'C.45.0 & C.46.0, Level Concourse',
            img: trx
        },
        {
            name: 'KLCC',
            time: '8am - 10pm',
            location: 'Lot 414-415 & OS404, Level 4',
            img: klcc 
        },
        {
            name: 'Sunway Pyramid',
            time: ['Mon-Fri: 9am - 10pm', '<br> Sat-Sun: 8am - 10pm'],
            location: 'Blue Atrium, Lot G1.108 & 109, Ground Floor',
            img: sunwayPyramid
        },
        {
            name: 'Pavillion Bukit Jalil',
            time: '9am - 10pm',
            location: 'Level 1 (No. 22 & 23)',
            img: pavillionBukitJalil
        },
        {
            name: 'KLIA 2 (Arrival Hall)',
            time: '8am - 11pm',
            location: 'L2-58 & 59, Level 2 (CP4)',
            img: klia2Arrival
        },
        {
            name: 'KLIA 2 (Departure Hall)',
            time: '4:30am - 8:30pm',
            location: 'Lot L3-41-46, Level 3',
            img: klia2Departure
        },
        {
            name: 'Puchong',
            time: '7:30am - 9:30pm',
            location: '69 & 71, Jalan Puteri 2/3, Bandar Puteri',
            img: puchong
        }

    ];

    const johorArea = [
        {
            name: 'Mid Valley JB',
            time: '9am - 10pm',
            location: 'LG-054, Lower Ground Floor',
            img: midValleyJB
        },
        {
            name: 'JB City Square',
            time: '9am - 10pm',
            location: 'Lot MB-07, Level B1, JB City',
            img: jbCitySquare
        },
        {
            name: 'AEON Tebrau City',
            time: '10am - 10pm',
            location: 'G117, Ground Floor',
            img: aeonTebrauCity
        },
        {
            name: 'Johor Jaya JB',
            time: '7:30am - 8:30pm',
            location: '30 & 32, Jalan Dedap 22, Tmn Johor Jaya',
            img: johorJayaJB
        }
    ]

    return {
        kualaLumpurSelangor,
        johorArea
    }

}