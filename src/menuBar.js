// Menu bar for webpage.
export default function navBar() {

    const menuBarItems = ['Home', 'Menu', 'Products', 'Outlets'];
    const menuBarDivs = [];
    const tabDiv = document.querySelector('#tabDiv'); 

    for(let i = 0; i < menuBarItems.length; i++) {
        const item = document.createElement('div');
        item.dataset.index = `${i}`;
        item.className = 'menu-item';
        menuBarDivs.push(item);

        const itemLink = document.createElement('a');
        itemLink.textContent = `${menuBarItems[i]}`;
        menuBarDivs[i].append(itemLink);
    }

    menuBarDivs.forEach((div) => {
        tabDiv.append(div);
    });

}
