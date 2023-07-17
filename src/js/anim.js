gsap.registerPlugin(ScrollTrigger, TextPlugin);

const headerBtn = document.querySelector('.header__btn');
const aboutSection = document.querySelector('.about');
const logo = document.querySelector('.nav__logo');
const pdfIcon = document.querySelector('.work__icon');

const bubbleOne = document.querySelector('.contact__main-bubble--one')
const bubbleTwo = document.querySelector('.contact__main-bubble--two')
const bubbleThree = document.querySelector('.contact__main-bubble--three')

let resolution = gsap.matchMedia();

resolution.add('(min-width: 768px)', () => {
	gsap.fromTo(
		bubbleOne,
		{ y: 0, x: 0},
		{
			y: '-=400',
			x: '+=200',
			stagger: 0.2,
			duration: 1,
			ease: 'easeInOut',
			scrollTrigger: {
				trigger: bubbleOne,
				start: 'top 10%',
				end: 'top -50%', //gdzie ma sie skonczyc
				scrub: true, //scroll dziala w obie strony
			},
		}
	);
	gsap.fromTo(
		bubbleTwo,
		{ y: 0, x: 0},
		{
			y: '-=600',
			x: '-=200',
			stagger: 0.2,
			duration: 1,
			ease: 'easeInOut',
			scrollTrigger: {
				trigger: bubbleTwo,
				start: 'top 20%',
				end: 'top -50%', //gdzie ma sie skonczyc
				scrub: true, //scroll dziala w obie strony
			},
		}
	);
	gsap.fromTo(
		bubbleThree,
		{ y: 0},
		{
			y: '-=700',
			stagger: 0.2,
			duration: 1,
			ease: 'easeInOut',
			scrollTrigger: {
				trigger: bubbleTwo,
				start: 'top 15%',
				end: 'top -50%', //gdzie ma sie skonczyc
				scrub: true, //scroll dziala w obie strony
			},
		}
	);
});

gsap.fromTo(
	headerBtn,
	{ y: 0, x: 0, opacity: 1 },
	{
		y: '+=400',
		x: '-=200',
		opacity: 0,
		stagger: 0.2,
		duration: 1,
		ease: 'easeInOut',
		scrollTrigger: {
			trigger: headerBtn,
			start: 'top 50%',
			end: 'top 0%', //gdzie ma sie skonczyc
			pin: true,
			scrub: true, //scroll dziala w obie strony
		},
	}
);

gsap.fromTo(
	pdfIcon,
	{ x: 0 },
	{
		x: '+=1100px',
		stagger: 0.2,
		duration: 3,
		ease: 'easeInOut',
		scrollTrigger: {
			trigger: pdfIcon,
			start: 'top 50%',
			end: 'top 0%', //gdzie ma sie skonczyc
			scrub: true, //scroll dziala w obie strony
		},
	}
);

const handleObserver = () => {
	const currentSection = window.scrollY;
	// let aboutText = document.querySelector('.about__main-txt h3');
	if (aboutSection.offsetTop <= currentSection + 300) {
		// aboutText.classList.add('about-txt-anim');
		handleText();
	}
};

// const handleText = () => {
// 	const aboutTxt = document.querySelector('.about-txt-anim');
// 	gsap.to(aboutTxt, {
// 		duration: 1,
// 		delay: 0,
// 		text: 'Dlaczego my?',
// 		ease: 'easeInOut',
// 	});
// };
const handleText = () => {
	const aboutTxt = document.querySelector('.about__main-txt h3');
	gsap.to(aboutTxt, {
		duration: 1,
		delay: 0,
		text: 'Ponieważ zapewniamy:',
		ease: 'easeInOut',
	});
};

const removeLogo = () => {
	if (window.scrollY >= 100) {
		logo.style.visibility = 'hidden';
	} else {
		logo.style.visibility = 'visible';
	}
};

window.addEventListener('scroll', handleObserver);
window.addEventListener('scroll', removeLogo);
