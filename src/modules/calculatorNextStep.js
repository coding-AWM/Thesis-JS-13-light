const calculatorNextStep = (accordeonNumber) => {
	const accordeonBlock = document.getElementById(accordeonNumber);
	const constructBtn = document.querySelectorAll('.construct-btn');
	const accordeonContent = accordeonBlock.querySelectorAll('.panel-collapse');

	const nextContent = (index) => {
		accordeonContent[index +1].style.display = 'block';
		accordeonContent[index].style.display = 'none';
	}	

	accordeonBlock.addEventListener('click', e => {
		event.preventDefault();
		let target = e.target;
		target = target.closest('.construct-btn')

		if (target) {
			constructBtn.forEach((elem, index) => {
				if (elem === target) {
					nextContent(index);
				}
			})
		}
	})

}

export default calculatorNextStep;