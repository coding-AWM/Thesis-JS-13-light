const popupConsultationToggle = () => {
	const popupCons = document.querySelector('.popup-consultation');

	document.addEventListener('click', () => {

		const target = event.target;

		if (target.matches('.consultation-btn')) {
			popupCons.style.display = 'block';
		}

		popupCons.addEventListener('click', () => {

			event.preventDefault();
			const target = event.target;
			if (target.matches('.popup-close') || !target.closest('.popup-content')) {
				popupCons.style.display = 'none';
			}
		});
	});
};

export default popupConsultationToggle;