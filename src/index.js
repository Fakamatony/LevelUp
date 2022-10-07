import './styles/global.scss';

// import Swiper JS
import Swiper, { Pagination } from 'swiper';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// configure Swiper to use modules
Swiper.use([Pagination]);

const swiper = new Swiper('.swiper', {
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
})

document.querySelector('.form').addEventListener('submit', (event) => {
  event.preventDefault()
})

const form = document.querySelector('.form');
const scrollBtns = document.querySelectorAll('.property-button');

scrollBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        window.scrollTo({
            top: form.offsetTop,
            behavior: "smooth"
        });
    })
})
const timerOutput = document.querySelector('.timer');

const savedEndDate = +localStorage.getItem('savedEndDate');
const endDate = savedEndDate || new Date().setMinutes(new Date().getMinutes() + 30);

if (!savedEndDate) {
  localStorage.setItem('savedEndDate', endDate.toString());
}

const interval = setInterval(() => {
  const diff = new Date(endDate - new Date());
  if (diff.getMinutes() < 0) {
    clearInterval(interval);
  }
  timerOutput.innerHTML = `Акция закончится через:  ${diff.getMinutes()}:${diff.getSeconds()}`;
}, 1000)
