const myoshi = document.querySelector('.myoshi');
const chargin = document.querySelector('.chargin');

const jump = () => {
  myoshi.classList.add('jump');
  
  setTimeout(() => {
    myoshi.classList.remove('jump');
  }, 500);
}

const loop = setInterval(() => {

  console.log('loop')
  
  const charginPosition = chargin.offsetLeft;
  const myoshiPosition = +window.getComputedStyle(myoshi).bottom.replace('px', '');
  
  if (charginPosition <= 100 && charginPosition > 0 && myoshiPosition < 90) {
   
   chargin.style.animation = 'none';
   chargin.style.left = `${charginPosition}px`;

   myoshi.style.animation = 'none';
   myoshi.style.bottom = `${myoshiPosition}px`;
   
   myoshi.src = './imagens/gover1.png'
   myoshi.style.width = '50px'
   

   clearInterval(loop);

  }

}, 10);

document.addEventListener('keydown', jump);
