const accordeon = (accordeonNumber) => {
	const accordeonBlock = document.getElementById(accordeonNumber);
	const accordeonHeader = accordeonBlock.querySelectorAll('.panel-default');
	const accordeonContent = accordeonBlock.querySelectorAll('.panel-collapse');

	const toggleAccordeonContent = index => {
		for (let i = 0; i < accordeonContent.length; i++) {
			if (index === i) {
				accordeonContent[i].style.display = 'block';
			} else {
				accordeonContent[i].style.display = 'none';
			}
		}
	};

	accordeonBlock.addEventListener('click', event => {
		let target = event.target;
		target = target.closest('.panel-default'); // если не нашел, то идёт выше и ищет у родителя.
		
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