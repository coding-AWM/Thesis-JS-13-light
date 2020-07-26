const calculator = () => {
	const constructor = document.querySelector('.constructor');
	const calcResult = document.getElementById('calc-result');
	const switcherOfRings = document.getElementById('myonoffswitch');
	const switcherOfRings2 = document.getElementById('myonoffswitch-two');
	const formControl = document.querySelectorAll('.form-control');
	const secondWell = document.querySelectorAll('.second-well');
	

	let switchPrice = 10000;
	let bottomPrice = 1000;

	calcResult.value = switchPrice + bottomPrice;

	const showNumber = function () {
		this.value = this.value.replace(/\D\.?\D/g, '');
		console.log('this.value: ', this.value);
	};

	secondWell.forEach((elem) => {
		elem.style.display = 'none'
	})

	constructor.addEventListener('change', event => {
		const target = event.target;
		if (target.closest('.onoffswitch-checkbox') || target.closest('.form-control ')) {
			calculate();
		}
	})

	const calculate = () => {
		let finalPrice;
		// let switchPrice = 10000;
		let diameterCoeficient = 1;
		let diameterCoeficient2 = 1;
		let amountFirstCoeficient = 1;
		let amountSecondCoeficient = 1;
		let diameterFirstValue = +formControl[0].value.replace(/\D\.?\D/g, '');
		let amountFirstValue = +formControl[1].value.replace(/\D/g, '');
		let diameterSecondValue = +formControl[2].value.replace(/\D\.?\D/g, '');
		let amountSecondValue = +formControl[3].value.replace(/\D/g, '');
		// let bottomPrice = 0;	
		

		if (diameterFirstValue === 2) {
			diameterCoeficient *= 1.2
		} else {
			diameterCoeficient = 1;
		}

		if (diameterSecondValue === 2) {
			diameterCoeficient2 *= 1.2
		} else {
			diameterCoeficient2 = 1;
		}

		if (amountFirstValue === 3) {
			amountFirstCoeficient = 1.5;
		} else if (amountFirstValue === 2) {
			amountFirstCoeficient = 1.3;
		} else {
			amountFirstCoeficient = 1;
		}

		if (amountSecondValue === 3) {
			amountSecondCoeficient = 1.5;
		} else if (amountSecondValue === 2) {
			amountSecondCoeficient = 1.3;
		} else {
			amountSecondCoeficient = 1;
		}

		if (switcherOfRings.checked) {
			switchPrice = +10000;
			diameterCoeficient2 = 1;
			amountSecondCoeficient = 1;
			secondWell.forEach((elem) => {
				elem.style.display = 'none'
			})
		} else {
			switchPrice = +15000;
			secondWell.forEach((elem) => {
				elem.style.display = 'inline-block'
			})
		}

		if (switcherOfRings2.checked) {
			if (switcherOfRings.checked) {
				bottomPrice = 1000;
			} else {
				bottomPrice = 2000;
			}
		} else {
			bottomPrice = 0
		}

		if (switcherOfRings || formControlValue) {
			finalPrice = (switchPrice + bottomPrice) * diameterCoeficient * amountFirstCoeficient * diameterCoeficient2 * amountSecondCoeficient;
		}
		calcResult.value = finalPrice;

		// let res = basePrice * formControlValue;
		// console.log('formControlValue: ', formControlValue);
		// console.log('res: ', res);
	}

}

export default calculator;