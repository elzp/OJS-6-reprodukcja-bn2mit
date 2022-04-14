import './style.css';

const PIXEL_COLOR = '#e44d4d';

const fakeCanvas = document.querySelector('.fake-canvas');
const originCanvas = document.querySelector('.original-canvas');
const fakeDivs = fakeCanvas.querySelectorAll('.flex-row > div');
const originDivs = originCanvas.querySelectorAll('.flex-row > div');

originDivs.forEach((item, index) => {
  if (item.className.split(' ').includes('pixel-dot')) {
    fakeDivs[index].classList.add('pixel-dot');
  }
});
