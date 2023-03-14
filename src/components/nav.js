const nav = () => {
	const navFixed = document.querySelectorAll('.nav__fixed');
	window.addEventListener('scroll', navOneScroll);
	function navOneScroll() {
		navFixed.forEach(element => scrollY > 175 ? element.classList.add('nav__active') : element.classList.remove('nav__active'));
	}
}

export default nav