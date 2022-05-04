var gallery = document.querySelector('main');

var imageUrls = [];

var imageUr1Input = document.querySelector('input');
var addImageButton = document.querySelector('button');

addImageButton.addEventListener('click', logClick);
function logClick() {

  if (imageUr1Input.value !== '') {
    imageUrls.push(imageUr1Input.value);
    imageUr1Input.value = '';
    updateGallery();
  }

}

function updateGallery() {
  gallery.innerHTML = '';
  for (let i = 0; i < imageUrls.length; i++) {
    var imageElement = document.createElement('img');
    imageElement.className = 'gallery-image';
    imageElement.src = imageUrls[i];
    gallery.appendChild(imageElement);
  }
}

updateGallery();
