// Menu bar for webpage.

const menuBarItems = ['Home', 'Menu', 'Products', 'Egg Tarts', 'Outlets', 'Contact Us'];
export const menuBarDivs = [];

for(let i = 0; i < menuBarItems.length; i++) {
    const item = document.createElement('div');
    item.dataset.index = `${i}`;
    item.className = 'menu-item';
    menuBarDivs.push(item);

    const itemLink = document.createElement('a');
    itemLink.textContent = `${menuBarItems[i]}`;
    menuBarDivs[i].append(itemLink);
}
