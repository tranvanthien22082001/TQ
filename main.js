let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};
const sr = ScrollReveal ({
	distance: '65px',
	duration: 2600,
	delay: 450,
	reset: false,
});

sr.reveal('.text',{delay:200, origin:'left'});
sr.reveal('.home-bg',{delay:450, origin:'top'});
sr.reveal('.box',{delay:450, origin:'top'});
