const domElements = {
	text: document.querySelector('span'),
	theme: document.querySelector('.theme-container'),
	mainContainer: document.querySelector('.container'),
	breath: document.querySelector('#breathing-container'),
	spin: document.querySelector('.spin'),
	imgF: document.querySelector('#f'),
	imgM: document.querySelector('#m'),
	imgU: document.querySelector('#u'),

	aud: document.querySelector('audio')
};

const breath = {
	totalTime: 7500,
	breathingTime: (this.totalTime / 5) * 2, // 3000
	hold: this.totalTime / 5
};

breathAnim();

domElements.theme.addEventListener('click', themeChange);

function breathAnim() {
	domElements.text.innerText = 'Breath In';
	if (domElements.breath.classList.contains('shrink')) {
		domElements.breath.classList.remove('shrink');
		domElements.breath.classList.add('grow');
	} else {
		domElements.breath.classList.add('grow');
	}

	setTimeout(() => {
		domElements.text.innerText = 'Hold';

		setTimeout(() => {
			domElements.text.innerText = 'Breath Out';
			if (domElements.breath.classList.contains('grow')) {
				domElements.breath.classList.remove('grow');
				domElements.breath.classList.add('shrink');
			} else {
				domElements.breath.classList.add('shrink');
			}
		}, 1500);
	}, 3000);
}
setInterval(breathAnim, 7500);

window.addEventListener('DOMContentLoaded', function () {
	domElements.aud.play();
});
// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// (async function breathAnimation() {
// 	text.innerText = 'Breathe In!';
// 	circle.className = 'grow';
// 	await wait(breathingTime);

// 	text.innerText = 'Hold';
// 	await wait(hold);

// 	text.innerText = 'Breathe Out!';
// 	circle.className = 'shrink';
// 	await wait(breathingTime);

// 	breathAnimation();
// })();
// breathAnimation();
function themeChange(e) {
	if (e.target.id === 'f') {
		domElements.imgM.className = '';
		domElements.imgU.className = '';

		domElements.imgF.className = 'op';
	}

	if (e.target.id === 'm') {
		domElements.imgF.className = '';
		domElements.imgU.className = '';

		domElements.imgM.className = ' op';
	}

	if (e.target.id === 'u') {
		domElements.imgF.className = '';
		domElements.imgM.className = '';

		domElements.imgU.className = ' op';
	}

	e.preventDefault();
}
