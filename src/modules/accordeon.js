const accordeon = () => {
	const accordeonBlock = document.getElementById('accordion-two');
	const accordeonHeader = accordeonBlock.querySelectorAll('.panel-default');
	const accordeonContent = accordeonBlock.querySelectorAll('.panel-collapse');

	accordeonContent[1].display = 'block';

	const toggleAccordeonContent = index => {
		for (let i = 0; i < accordeonContent.length; i++) {
			if (index === i) {
				// accordeonHeader[i].classList.add('active');
				// accordeonContent[i].classList.remove('d-none');
				accordeonContent[i].style.display = 'block';
			} else {
				// accordeonHeader[i].classList.remove('active');
				// accordeonContent[i].classList.add('d-none');
				accordeonContent[i].style.display = 'none';
			}
		}
	};

	accordeonBlock.addEventListener('click', event => {
		let target = event.target;
		target = target.closest('.panel-default'); // если не нашел, то идёт выше и ищет у родителя.
		console.log('target: ', target);
		
		if (target) {
			accordeonHeader.forEach((item, i) => {
				if (item === target) {
					toggleAccordeonContent(i);
				}
			});
		}
	});
};
export default accordeon;