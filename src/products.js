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
    console.log(productTitle);

    mainContainer.append(productTitle);

}

function products() {

    const productNames = ['Classic White Coffee', 'Roasted White Coffee', 'No Sugar Added White Coffee', 'Mocha', 'Teh Tarik',
                            'Drip Coffee', 'Traditional Kaya', 'Pandan Kaya', 'Crunchy Peanut Butter', 'Creamy Peanut Butter',
                            ' Original Pan Mee', 'Spicy Pan Mee', 'Mala Pan Mee', 'Soup Pan Mee', 'Classic Pineapple Tart',
                            'Cheese Pineapple Tart', 'Sambal Rojak'];

    const productImgs = [classicWhiteCoffee, roastedWhiteCoffee, noSugarWhiteCoffee, mocha, tehTarik, dripCoffee, traditionalKaya,
                            pandanKaya, crunchyPeanutButter, creamyPeanutButter, originalPanMee, spicyPanMee, malaPanMee,
                            soupPanMee, classicPineappleTart, cheesePineappleTart, sambalRojak];

}
