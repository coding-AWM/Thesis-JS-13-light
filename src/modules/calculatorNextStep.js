const calculatorNextStep = (accordeonNumber) => {
	const accordeonBlock = document.getElementById(accordeonNumber);
	const constructBtn = document.querySelectorAll('.construct-btn');
	const accordeonContent = accordeonBlock.querySelectorAll('.panel-collapse');
	let currentContent = 0;

	const nextContent = (elem, index) => {
		elem[index +1].style.display = 'block';
	}
	const prevContent = (elem, index) => {
		elem[index].style.display = 'none';
	}

	accordeonBlock.addEventListener('click', e => {
		let target = e.target;
		if (target.closest('.construct-btn')) {
			constructBtn.forEach((elem, index) => {
				if (elem === target) {
					currentContent = index;//это индекс кнопки
				}
			})
		}
		nextContent(accordeonContent, currentContent);
		prevContent(accordeonContent, currentContent);
	})
}

export default calculatorNextStep;