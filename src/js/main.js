const navBtn = document.querySelector('.ti-menu-2');
const burgerLetters = document.querySelectorAll('.nav_span');
const burgerBtn = document.querySelector('.menu__button');
const navMenu = document.querySelector('.menu');
const navList = document.querySelector('.menu__ulList');
const allLinks = document.querySelectorAll('.menu__link');
const openBtn = document.querySelector('.button-more');
const closeBtn = document.querySelector('.button-close');
const aboutMore = document.querySelector('.about-more');
const footerSpan = document.querySelector('.footer__main-bnc span');

const accordeonBoxes = document.querySelectorAll('.accordeon__card');
const allSections = document.querySelectorAll('section');

const handleBurgerAnim = () => {
	burgerLetters.forEach((leter) => leter.classList.toggle('nav__span'));
};

const handleShowMenu = () => {
	navMenu.classList.toggle('showNavigation');
	navList.classList.toggle('showMenu');
	navMenu.classList.remove('hideNavigation');
};

const handlehideMenu = () => {
	navMenu.classList.toggle('hideNavigation');
};

const handleOpenMore = () => {
	aboutMore.classList.toggle('showMore');
	aboutMore.classList.remove('hideMore');
};
const handleCloseMore = () => {
	aboutMore.classList.toggle('showMore');
	aboutMore.classList.add('hideMore');
	goToTheTop();
};

const goToTheTop = () => {
	window.aboutMore.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
};

function handleAccordeon() {
	if (this.classList.contains('accordeonOpen')) {
		this.classList.remove('accordeonOpen');
		handleIconRotation();
	} else {
		closeAccordeon();
		handleIconRotation();
		this.classList.add('accordeonOpen', 'rotateBtn');
	}
}

const closeAccordeon = () => {
	const allActiveItems = document.querySelectorAll('.accordeonOpen');
	allActiveItems.forEach((item) => item.classList.remove('accordeonOpen'));
};

const handleIconRotation = () => {
	accordeonBoxes.forEach((box) => box.classList.remove('rotateBtn'));
};

const handleObserverAccordeon = () => {
	const current = window.scrollY;
	allSections.forEach((section) => {
		if (
			section.classList.contains('contact') &&
			section.offsetTop <= current + 300
		) {
			closeAccordeon();
			handleIconRotation();
		}
	});
};

const handleYear = () => {
	const date = new Date().getFullYear();
	footerSpan.textContent = date;
};

handleYear();
navBtn.addEventListener('mouseenter', handleBurgerAnim);
navBtn.addEventListener('mouseleave', handleBurgerAnim);
navBtn.addEventListener('click', handleShowMenu);
burgerBtn.addEventListener('click', handleShowMenu);
burgerBtn.addEventListener('click', handlehideMenu);
allLinks.forEach((link) => link.addEventListener('click', handleShowMenu));
allLinks.forEach((link) => link.addEventListener('click', handlehideMenu));
openBtn.addEventListener('click', handleOpenMore);
closeBtn.addEventListener('click', handleCloseMore);
accordeonBoxes.forEach((box) => box.addEventListener('click', handleAccordeon));
window.addEventListener('scroll', handleObserverAccordeon);
