const html = document.documentElement;

const buttonThemeToggle = document.getElementById('button-toggle');
const iconThemeToggle = document.getElementById('icon-toggle');

buttonThemeToggle.addEventListener('click', (event) => {
  event.preventDefault();  

  localStorage.getItem('theme') === 'dark' ? localStorage.removeItem('theme') : localStorage.setItem('theme', 'dark');  

  addClass();
});

const addClass = () => {  
  if (localStorage.getItem('theme') === 'dark') {
    html.classList.add('dark');
    iconThemeToggle.textContent = 'light_mode'; 
  } else {
    html.classList.remove('dark');
    iconThemeToggle.textContent = 'nightlight_round';
  }       
}

addClass();