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

        if(menuBarItems[i] == 'Home') {
            itemLink.target = '_blank';
            itemLink.href = 'https://www.google.com/';
            menuBarDivs[i].append(itemLink);
        }

        menuBarDivs[i].append(itemLink);
    }

    menuBarDivs.forEach((div) => {
        tabDiv.append(div);
    });

}
