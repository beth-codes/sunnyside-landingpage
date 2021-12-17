const menu = document.querySelector('.menu');
const nav = document.querySelector('.navs');

menu.addEventListener('click', clickMenu);

function clickMenu() {
  let navStyle = menu.getAttribute('class');
   console.log(navStyle);
  if (navStyle === 'menu') {
     console.log('yes');
     menu.setAttribute('class', 'navs');
     nav.style.display = 'block';
  } else if(navStyle === 'navs'){
     menu.setAttribute('class', 'menu');
   nav.style.display = 'none';
   console.log('no');
  }

   
  
}