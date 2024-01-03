// Content after header

export const content = document.createElement('div');
content.className = 'content';
content.id = 'content';

content.textContent = 'Testing, this is a main content div';

// Oriental kopi picture
const pictureDiv = document.createElement('div');
pictureDiv.id = 'picture';

const image = document.createElement('img');
image.src = './assets/oriental_picture.jpeg';

pictureDiv.append(image);