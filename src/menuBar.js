// Menu bar for webpage.

const menuBarItems = ['Pre-Order Egg Tart', 'Merchandise', 'Branch Address', 'Join Member', 'Contact Us' ];
export const menuBarDivs = [];

for(let i = 0; i < 5; i++) {
    const item = document.createElement('div');
    item.dataset.index = `${i}`;
    item.className = 'menu-item';
    menuBarDivs.push(item);

    const itemLink = document.createElement('a');
    itemLink.textContent = `${menuBarItems[i]}`;
    menuBarDivs[i].append(itemLink);
}
