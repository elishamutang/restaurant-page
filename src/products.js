// Products page

import productHeader from "./assets/products_header.jpg";
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
