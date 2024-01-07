import orientalImg from './assets/oriental_picture.jpeg';

// Oriental kopi picture
export const pictureDiv = document.createElement('div');
pictureDiv.id = 'picture';

const image = document.createElement('img');
image.src = orientalImg;

pictureDiv.append(image);

// Branch address section
