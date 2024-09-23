const imageContainer = document.body;
const description = document.getElementById('bg_intro');
const images = [
  { url: 'img/nanhai.jpg', text: '背景：南海（摄于海南陵水）' },
  { url: 'img/huanghai2.jpg', text: '背景：黄海（摄于山东青岛）' },
  { url: 'img/huanghai1.jpg', text: '背景：黄海（摄于山东威海）' },
  { url: 'img/bohai.jpg', text: '背景：渤海（摄于天津）' }
];
let currentIndex = 0;
var is_first = true;
imageContainer.style.backgroundImage = `url(${images[currentIndex].url})`;
description.textContent = images[currentIndex].text;
description.style.top = '-320px';
setTimeout(() => {
  description.style.top = '20px';
}, 1000);
function changeImage() {
  imageContainer.style.backgroundImage = `url(${images[currentIndex].url})`;
  description.textContent = images[currentIndex].text;
  if(is_first)
  {
    description.style.top = '20px';
    is_first = false
  }
  else
  {
    description.style.top = '-320px';
  setTimeout(() => {
    description.style.top = '20px';
  }, 1000);
  }
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeImage, 4000);