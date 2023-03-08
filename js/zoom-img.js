const images = document.querySelectorAll('.certificates__img');
const overlay = document.querySelector('#overlay');
const magnify = document.querySelector('#magnify');
const closeBtn = document.querySelector('#close-popup');

const addPopup = (e) => {        
  overlay.style.display = 'block';
  magnify.style.display = 'block';         
}

const closePopup = () => {
  overlay.style.display = 'none';
  magnify.style.display = 'none';
}

images.forEach(img => img.addEventListener('click', () => {
  const path = img.getAttribute('src'); 
  addPopup();  
  magnify.firstElementChild.src = path;
}));

closeBtn.addEventListener('click', closePopup); 

overlay.addEventListener('click', e => {
  if(!e.target.closest('#img')) {
    closePopup();
  } 
});

