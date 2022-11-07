let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});
var header = $('.header'),
	scrollPrev = 0;

$(window).scroll(function () {
	var scrolled = $(window).scrollTop();

	if (scrolled > 100 && scrolled > scrollPrev) {
		header.addClass('out');

	} else {
		header.removeClass('out');

	}
	scrollPrev = scrolled;
});
$(document).ready(function () {
	$(".header__burger").click(function (event) {
		$('body').toggleClass('lock');
	});
});
const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'vertical',
	allowTouchMove: false,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	autoplay: {
		delay: 4999,
		disableOnInteraction: false,
		pauseOnMouseEnter: true,
	},
	speed: 500,

	// And if we need scrollbar
});
const btnUp = {
	el: document.querySelector('.btn-up'),
	show() {
		// удалим у кнопки класс btn-up_hide
		this.el.classList.remove('btn-up_hide');
	},
	hide() {
		// добавим к кнопке класс btn-up_hide
		this.el.classList.add('btn-up_hide');
	},
	addEventListener() {
		// при прокрутке содержимого страницы
		window.addEventListener('scroll', () => {
			// определяем величину прокрутки
			const scrollY = window.scrollY || document.documentElement.scrollTop;
			// если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
			scrollY > 400 ? this.show() : this.hide();
		});
		// при нажатии на кнопку .btn-up
		document.querySelector('.btn-up').onclick = () => {
			// переместим в начало страницы
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth'
			});
		}
	}
}

btnUp.addEventListener();
