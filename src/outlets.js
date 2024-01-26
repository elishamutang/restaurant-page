// Outlets page.
import orientalImg from './assets/oriental_picture.jpg';
import { mainContainer } from './index.js';
import { orientalTitle } from './menu.js';

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

    // outletTitle.append(products());

    mainContainer.append(outletTitle);

}

function outletSect() {

    // Initialize outlet section.
    const outletContainer = document.createElement('div');
    outletContainer.id = 'outletContainer';

    // Add mall images behind each outlet div and make it overlay like menu and product pages.

}

function outletInfo() {

    const kualaLumpurSelangor = [
        {
            name: 'Mid Valley Megamall',
            time: '8am - 10pm',
            location: 'LG-043, Lower Ground Floor'
        },
        {
            name: 'Pavillion Kuala Lumpur',
            time: '9am - 10pm',
            location: 'Lot 1.30, 1.31, Level 1'
        },
        {
            name: 'TRX',
            time: '9am - 10pm',
            location: 'C.45.0 & C.46.0, Level Concourse'
        },
        {
            name: 'KLCC',
            time: '8am - 10pm',
            location: 'Lot 414-415 & OS404, Level 4' 
        },
        {
            name: 'Sunway Pyramid',
            time: ['Mon-Fri: 9am - 10pm', 'Sat-Sun: 8am - 10pm'],
            location: 'Blue Atrium, Lot G1.108 & 109, Ground Floor'
        },
        {
            name: 'Pavillion Bukit Jalil',
            time: '9am - 10pm',
            location: 'Level 1 (No. 22 & 23)'
        },
        {
            name: 'KLIA 2 (Arrival Hall)',
            time: '8am - 11pm',
            location: 'L2-58 & 59, Level 2 (CP4)'
        },
        {
            name: 'KLIA 2 (Departure Hall)',
            time: '4:30am - 8:30pm',
            location: 'Lot L3-41-46, Level 3'
        },
        {
            name: 'Puchong',
            time: '7:30am - 9:30pm',
            location: '69 & 71, Jalan Puteri 2/3, Bandar Puteri'
        }

    ];

    const johorArea = [
        {
            name: 'Mid Valley JB',
            time: '9am - 10pm',
            location: 'LG-054, Lower Ground Floor'
        },
        {
            name: 'JB City Square',
            time: '9am - 10pm',
            location: 'Lot MB-07, Level B1, JB City'
        },
        {
            name: 'AEON Tebrau City',
            time: '10am - 10pm',
            location: 'G117, Ground Floor'
        },
        {
            name: 'Johor Jaya JB',
            time: '7:30am - 8:30pm',
            location: '30 & 32, Jalan Dedap 22, Tmn Johor Jaya'
        }
    ]

    return {
        kualaLumpurSelangor,
        johorArea
    }

}