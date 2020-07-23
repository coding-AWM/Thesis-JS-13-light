const moreSentens = () => {

	const addSentenceBtn = document.querySelector('.add-sentence-btn');
	const sentensBlock = document.querySelectorAll('.text-center > .row > div');
	addSentenceBtn.addEventListener('click', () => {
		addSentenceBtn.style.display = 'none';
		console.log(sentensBlock);

		sentensBlock.forEach(elem => {
			console.log('elem: ', elem);
			if (elem.classList.contains('hidden')) {
				elem.classList.remove('hidden');
			}

			if (elem.classList.contains('visible-sm-block')) {
				elem.classList.remove('visible-sm-block');
			}

		});
	});
};

export default moreSentens;
