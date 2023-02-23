//@prepros-append main.js
// ПодКЛЮЧЕНИЕ ФАЛОВ JS============================================================================


const block = document.querySelector('.block');
const squereBlock = 400;

for (let i = 0; i < squereBlock; i++) {
   const blockItem = document.createElement('div');
   blockItem.classList.add('block__item');

   block.append(blockItem);

   blockItem.addEventListener('mouseover', () => {
      changeColor(blockItem);
   });
   blockItem.addEventListener('mouseleave', () => {
      removeColor(blockItem);
   })
};
function changeColor(element) {
   const color = getRandomColor()
   element.style.background = color;
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
   element.style.background = '#1d1d1d';
   element.style.boxShadow = `0 0 2px #1d1d1d`
}
let mass = ['#CD5C5C', '#FF1493', '#DA70D6', '#00BFFF', '#DEB887']

function getRandomColor() {
   let r = Math.floor(Math.random() * mass.length);
   return mass[r]
}







