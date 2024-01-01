// Menu bar for webpage.

const menuBarItems = ['Pre-Order Egg Tart', 'Custom Gifts', 'Branch Address', 'Join Member', 'Contact Us' ];
export const menuBarDivs = [];

for(let i = 0; i < 5; i++) {
    const item = document.createElement('div');
    item.dataset.index = `${i}`;
    item.textContent = `${menuBarItems[i]}`;
    menuBarDivs.push(item);
}

console.log(menuBarDivs);
