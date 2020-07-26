const popupCallToggle = () => {
	const popupCall = document.querySelector('.popup-call');

	document.addEventListener('click', () => {

		const target = event.target;

		if (target.matches('.header-btn')) {
			popupCall.style.display = 'block';
		}

		popupCall.addEventListener('click', () => {

			event.preventDefault();
			const target = event.target;
			if (target.matches('.popup-close') || !target.closest('.popup-content')) {
				popupCall.style.display = 'none';
			}
		});
	});
};

export default popupCallToggle;