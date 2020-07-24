const text = document.querySelector('.text');
const circle = document.querySelector('#cont');
const themeContainer = document.querySelector('.theme-container');
const mainContainer = document.querySelector('.container');
const conic = document.querySelector('#breathing-container');
const inner = document.querySelector('.inner-container');
const spin = document.querySelector('.spin');
const imgF = document.querySelector('#f');
const imgM = document.querySelector('#m');
const imgU = document.querySelector('#u');
const h3 = document.querySelector('.heading h3');

const totalTime = 7500;
const breathingTime = (totalTime / 5) * 2; // 3000
const hold = totalTime / 5;

// breathAnim();

themeContainer.addEventListener('click', themeChange);
// window.addEventListener('DOMContentLoaded', BreathAnim);

// function breathAnim() {
// 	text.innerText = 'Breath In...';
// 	circle.className = 'grow';

// 	setTimeout(() => {
// 		text.innerText = 'Hold';

// 		setTimeout(() => {
// 			text.innerText = 'Breath Out...';
// 			circle.className = 'shrink';
// 		}, hold);
// 	}, breathingTime);
// }
// setInterval(breathAnim, totalTime);

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

(async function breathAnimation() {
	text.innerText = 'Breathe In!';
	circle.className = 'grow';
	await wait(breathingTime);

	text.innerText = 'Hold';
	await wait(hold);

	text.innerText = 'Breathe Out!';
	circle.className = 'shrink';
	await wait(breathingTime);

	breathAnimation();
})();
// breathAnimation();
function themeChange(e) {
	if (e.target.id === 'f') {
		imgM.className = '';
		imgU.className = '';
		imgF.className = 'op';
		conic.className = 'breathing-container fconic';
		inner.style.background = '#000';
		text.style.color = '#fff';
		h3.style.color = '#fff';

		// setInterval(BreathAnim, totalTime);
	}

	if (e.target.id === 'm') {
		imgF.className = '';
		imgU.className = '';
		imgM.className = 'op';
		conic.className = 'breathing-container mconic';
		inner.style.background = '#fff';
		text.style.color = '#000';
		h3.style.color = '#fff';
		// setInterval(BreathAnim, totalTime);
	}

	if (e.target.id === 'u') {
		imgF.className = '';
		imgM.className = '';
		imgU.className = 'op';
		conic.className = 'breathing-container uconic';
		inner.style.background = '#000';
		text.style.color = '#fff';
		h3.style.color = '#fff';
		// setInterval(BreathAnim, totalTime);
	}
	e.preventDefault();
}
