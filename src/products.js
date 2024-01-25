// Products page
import productHeader from "./assets/products_header.jpg";
import classicWhiteCoffee from "./assets/classic-white-coffee.jpg";
import roastedWhiteCoffee from "./assets/roasted-white-coffee.jpg";
import noSugarWhiteCoffee from "./assets/no-sugar-added-white-coffee.jpg";
import mocha from "./assets/mocha.jpg";
import tehTarik from "./assets/teh-tarik-product.jpg";
import dripCoffee from "./assets/drip-coffee.jpg";
import traditionalKaya from "./assets/traditional-kaya.jpg";
import pandanKaya from "./assets/pandan-kaya.jpg";
import crunchyPeanutButter from "./assets/crunchy-peanut-butter.jpg";
import creamyPeanutButter from "./assets/creamy-peanut-butter.jpg";
import originalPanMee from "./assets/original-pan-mee.jpg";
import spicyPanMee from "./assets/spicy-pan-mee.jpg";
import malaPanMee from "./assets/mala-pan-mee.jpg";
import soupPanMee from "./assets/soup-pan-mee.jpg";
import classicPineappleTart from "./assets/classic-pineapple-tart.jpg";
import cheesePineappleTart from "./assets/cheese-pineapple-tart.jpg";
import sambalRojak from "./assets/sambal-rojak-product.jpg";
import { orientalTitle } from "./menu.js";
import { mainContainer } from "./index.js";
import { linkImgs } from "./home";


export default function productPage() {

    // Header image
    const productHeaderDiv = document.createElement('div');
    productHeaderDiv.id = 'productHeader';
    productHeaderDiv.className = 'headerImg';

    const productHeaderImg = document.createElement('img');
    productHeaderImg.src = productHeader;

    productHeaderDiv.append(productHeaderImg);
    mainContainer.append(productHeaderDiv);

    // Product title
    const productTitle = orientalTitle('productSection', 'All Products');

    productTitle.append(products());

    mainContainer.append(productTitle);

}

function products() {

    const allProducts = productObject();

    const productImgs = [];
    
    for(let idx in allProducts) {
        productImgs.push(allProducts[idx].img);
    }

    // Allocate each image into its own div.
    const productItems = linkImgs(allProducts.length, productImgs, allProducts.length, 'productItem', 'productItems');

    const productContainer = document.createElement('div');
    productContainer.id = 'productContainer';

    for(let i=0; i<productItems.length; i++) {

        // Add overlay for each food item to display name.
        const productNameDiv = document.createElement('div');
        productNameDiv.className = 'productName';
        productNameDiv.textContent = allProducts[i].name;

        // Event listener for mouse over.

        productItems[i].addEventListener('mouseover', (e) => {
            productItems[i].insertAdjacentElement('afterbegin', productNameDiv);
            
            if(e.target.className == 'productName') {
                e.target.className = 'productName fade-in';
            }

        })

        productItems[i].addEventListener('mouseout', (e) => {
            if(e.target.className == 'productName fade-in') {
                e.target.className = 'productName';
            }

        })

        productContainer.append(productItems[i]);

    }

    return productContainer;

}

function productObject() {

    return [
        {
            name: 'Classic White Coffee',
            img: classicWhiteCoffee,
            price: 'RM18.90'
        },
        {
            name: 'Roasted White Coffee',
            img: roastedWhiteCoffee,
            price: 'RM21.90'
        },
        {
            name: 'No Sugar Added White Coffee',
            img: noSugarWhiteCoffee,
            price: 'RM21.90'
        },
        {
            name: 'Mocha',
            img: mocha,
            price: 'RM23.90'
        },
        {
            name: 'Teh Tarik',
            img: tehTarik,
            price: 'RM18.90'
        },
        {
            name: 'Drip Coffee',
            img: dripCoffee,
            price: 'RM28.90'
        },
        {
            name: 'Traditional Kaya',
            img: traditionalKaya,
            price: 'RM8.90'
        },
        {
            name: 'Pandan Kaya',
            img: pandanKaya,
            price: 'RM8.90'
        },
        {
            name: 'Crunchy Peanut Butter',
            img: crunchyPeanutButter,
            price: 'RM14.90'
        },
        {
            name: 'Creamy Peanut Butter',
            img: creamyPeanutButter,
            price: 'RM14.90'
        },
        {
            name: 'Original Pan Mee',
            img: originalPanMee,
            price: 'RM4.90'
        },
        {
            name: 'Spicy Pan Mee',
            img: spicyPanMee,
            price: 'RM5.90'
        },
        {
            name: 'Mala Pan Mee',
            img: malaPanMee,
            price: 'RM6.90'
        },
        {
            name: 'Soup Pan Mee',
            img: soupPanMee,
            price: 'RM5.90'
        },
        {
            name: 'Classic Pineapple Tart',
            img: classicPineappleTart,
            price: 'RM39.00'
        },
        {
            name: 'Cheese Pineapple Tart',
            img: cheesePineappleTart,
            price: 'RM46.00'
        },
        {
            name: 'Sambal Rojak',
            img: sambalRojak,
            price: 'RM13.90'
        }

    ];

}
