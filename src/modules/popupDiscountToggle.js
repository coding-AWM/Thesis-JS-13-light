const popupDiscountToggle = () => {
	const popupDiscount = document.querySelector('.popup-discount');
	document.addEventListener('click', () => {
		const target  = event.target;
		if (target.matches('.discount-btn ')) {
			popupDiscount.style.display = 'block';
		}
	});

	popupDiscount.addEventListener('click', () => {
		event.preventDefault();
		const target = event.target;
		if (target.matches('.popup-close') || !target.closest('.popup-content')) {
			popupDiscount.style.display = 'none';
		}
	});
};
export default popupDiscountToggle;
