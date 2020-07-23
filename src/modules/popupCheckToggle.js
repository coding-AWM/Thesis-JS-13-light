const popupCheckToggle = () => {
	const popupCheck = document.querySelector('.popup-check');

	document.addEventListener('click', () => {

		const target = event.target;

		if (target.matches('.check-btn')) {
			popupCheck.style.display = 'block';
		}

		popupCheck.addEventListener('click', () => {

			event.preventDefault();
			const target = event.target;
			if (target.matches('.popup-close') || !target.closest('.popup-content')) {
				popupCheck.style.display = 'none';
			}
		});
	});
};

export default popupCheckToggle;