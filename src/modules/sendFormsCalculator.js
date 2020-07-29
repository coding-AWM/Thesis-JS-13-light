const sendFormsCalculator = (tag, phoneNum, userName, sendButton) => {
  const errorMessage = 'Что то не так пошло...';
  const loadMessage = 'Загрузка...';
  const successMessage = 'Спасибо! Мы скоро с вами свяжемся!';
  const form = document.querySelector(tag);
  const statusMessage = document.createElement('div');

  const popupDiscount = document.querySelector('.popup-discount');
  const switcherOfRings = document.getElementById('myonoffswitch');
  const formControl = document.querySelectorAll('.form-control');
  const switcherOfRings2 = document.getElementById('myonoffswitch-two');
  const distanceToHome = document.querySelector('.distance-to-home');
  const calcResult = document.getElementById('calc-result');

  const sendFormsCalculator = () => {
    form.addEventListener('input', event => {
      const target = event.target;

      const noShowNumber = function () {
        this.value = this.value.replace(/[\da-zA-Z]/g, '');
      };

      const phoneNumber = function () {
        if (this.value.lenth < 18) {
          this.style.backgroundColor = 'red';
        } else {
          this.style.backgroundColor = '';
        }
      }

      function maskPhone(selector, masked = '+7 (___) ___-__-__') {
        const elems = document.querySelectorAll(selector);

        function mask(event) {
          const keyCode = event.keyCode;
          const template = masked,
            def = template.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");
          // console.log(template);
          let i = 0,
            newValue = template.replace(/[_\d]/g, a => (i < val.length ? val.charAt(i++) || def.charAt(i) : a));
          i = newValue.indexOf("_");
          if (i != -1) {
            newValue = newValue.slice(0, i);
          }
          let reg = template.substr(0, this.value.length).replace(/_+/g,
            a => "\\d{1," + a.length + "}").replace(/[+()]/g, "\\$&");
          reg = new RegExp("^" + reg + "$");
          if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
            this.value = newValue;
          }
          if (event.type == "blur" && this.value.length < 15) {
            this.value = "";
            this.style.backgroundColor = '';
          }
        }

        for (const elem of elems) {
          elem.addEventListener("input", mask);
          elem.addEventListener("focus", mask);
          elem.addEventListener("blur", mask);
        }
      }

      if (target.matches(userName)) {
        target.addEventListener('input', noShowNumber)
      }
      if (target.closest(phoneNum)) {
        target.addEventListener('input', maskPhone(phoneNum));
      }
      if (target.matches(phoneNum)) {
        target.addEventListener('input', phoneNumber);
      }
    });

    const bodyAddedForms = {};

    document.addEventListener('click', event => {

      let diameterFirstValue = +formControl[0].value.replace(/\D\.?\D/g, '');
      let amountFirstValue = +formControl[1].value.replace(/\D/g, '');
      let diameterSecondValue = +formControl[2].value.replace(/\D\.?\D/g, '');
      let amountSecondValue = +formControl[3].value.replace(/\D/g, '');

      if (event.target.matches('.discount-btn')) {
        bodyAddedForms['Итоговая сумма'] = calcResult.value + ' руб.';
        
        if (distanceToHome.value === '') {
          bodyAddedForms['Расстояние до дома'] = distanceToHome.value + ' вплотную';
        } else {
          bodyAddedForms['Расстояние до дома'] = distanceToHome.value + ' метров';
        }

        if (diameterFirstValue === 2) {
          bodyAddedForms['Диаметр первого колодца'] = '2 метра';
        } else {
          bodyAddedForms['Диаметр первого колодца'] = '1,4 метра';
        }

        if (amountFirstValue === 3) {
          bodyAddedForms['Количество колец первого колодца'] = '3 кольца';
        } else if (amountFirstValue === 2) {
          bodyAddedForms['Количество колец первого колодца'] = '2 кольца';
        } else {
          bodyAddedForms['Количество колец первого колодца'] = '1 кольцо';
        }

        if (switcherOfRings.checked) {
          bodyAddedForms['Тип колодца'] = 'Однокамерный';
          if (switcherOfRings2.checked) {
            bodyAddedForms['Днище первого колодца'] = 'Есть';
          } else {
            bodyAddedForms['Днище первого колодца'] = 'Нет';
          }
        } else {
          bodyAddedForms['Тип колодца'] = 'Двухкамерный';
          if (switcherOfRings2.checked) {
            bodyAddedForms['Днище у колодцев'] = 'Есть';
          } else {
            bodyAddedForms['Днище у колодцев '] = 'Нет';
          }

          if (diameterSecondValue === 2) {
            bodyAddedForms['Диаметр второго колодца'] = '2 метра';
          } else {
            bodyAddedForms['Диаметр второго колодца'] = '1,4 метра';
          }

          if (amountSecondValue === 3) {
            bodyAddedForms['Количество колец второго колодца'] = '3 кольца';
          } else if (amountSecondValue === 2) {
            bodyAddedForms['Количество колец второго колодца'] = '2 кольца';
          } else {
            bodyAddedForms['Количество колец второго колодца'] = '1 кольца';
          }
        }
      }

    })
    form.addEventListener('click', event => {
      if (event.target.closest(sendButton)) {
        event.preventDefault();
        
        setTimeout(() => {popupDiscount.style.display = 'none'}, 2000);

        form.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;

        const formData = new FormData(form);
        const body = {};

        if (Object.keys(bodyAddedForms).length == 0) {} else {
          Object.assign(body, bodyAddedForms)
        }

        formData.forEach((val, key) => {
          body[key] = val;
        });

        postData(body)
          .then(response => {
            if (response.status !== 200) {
              throw new Error('status network not 200!')
            }
            statusMessage.textContent = successMessage;
            setTimeout(() => {
              statusMessage.textContent = '';
            }, 5000)
          })
          .catch(error => {
            console.log('error: ', error);
            statusMessage.textContent = errorMessage;
          });

        const inputs = form.querySelectorAll('input');
        inputs.forEach(val => {
          val.value = '';
        });
      }
    })
  };
  sendFormsCalculator();

  const postData = body =>
    fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/json'
      },
      body: JSON.stringify(body)
    });
};

export default sendFormsCalculator;