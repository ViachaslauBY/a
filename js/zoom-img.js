
const images = document.querySelectorAll('.certificates__img');


images.forEach(img => {
  img.addEventListener('click', (event) => {
    const path = img.getAttribute('src');   
    document.body.insertAdjacentHTML('afterbegin', `<div id="overlay"></div><div id="magnify"><img src="${path}"><div id="close-popup"><i></i></div></div>`);  
    document.querySelector('#overlay').style.display = 'block';
    document.querySelector('#magnify').style.display = 'block'; 
    document.querySelector('#magnify').style.top = '50%';  
    document.querySelector('#magnify').style.left = '50%';         
    document.querySelector('#magnify').style.transform = 'translate(-50%, -50%)';  
    
    document.querySelector('#close-popup').addEventListener('click', () => {
      document.querySelector('#overlay').style.display = 'none';
      document.querySelector('#magnify').style.display = 'none';
    });      
  });    
}); 






// $(function(){
//   $('.minimized').click(function(event) {
//     var i_path = $(this).attr('src');
//     $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
//     $('#magnify').css({
//      left: ($(document).width() - $('#magnify').outerWidth())/2,
//      // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
//             top: ($(window).height() - $('#magnify').outerHeight())/2
//    });
//     $('#overlay, #magnify').fadeIn('fast');
//   });
  
//   $('body').on('click', '#close-popup, #overlay', function(event) {
//     event.preventDefault();
//     $('#overlay, #magnify').fadeOut('fast', function() {
//       $('#close-popup, #magnify, #overlay').remove();
//     });
//   });
// });