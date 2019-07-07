let header = document.getElementById('header');
let main = document.getElementById('main');
document.addEventListener('scroll', () => {
  let height = 360 - window.scrollY;
  if (height > 200) {
    header.style.height = `${height}px`;
    header.classList.remove('navbar');
    header.style.boxShadow = '';
    main.style.marginTop = '0';
  } else {
    header.classList.add('navbar');
    header.style.height = null;
    header.style.boxShadow = '0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2)';
    main.style.marginTop = '250px';
  }

})