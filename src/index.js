// eslint-disable-next-line strict
'use strict';

// попапка  popupCallToggle
import popupCallToggle from './modules/popupCallToggle';

popupCallToggle();

//попапка popupCheckToggle

import popupCheckToggle from './modules/popupCheckToggle';

popupCheckToggle();

// поле на кнопку БОЛЬШЕ
import moreSentens from './modules/moreSentens';

moreSentens();

// попапка popupDiscountToggle

import popupDiscountToggle from './modules/popupDiscountToggle';

popupDiscountToggle();

//попап popupConsultationToggle

import popupConsultationToggle from './modules/popupConsultationToggle';
popupConsultationToggle();

//аккордеон

import accordeon from './modules/accordeon';
accordeon('accordion-two');
accordeon('accordion');

//калькулятор

import calculator from './modules/calculator';
calculator();

// //калькулятор следующий шаг
// import calculatorNextStep from './modules/calculatorNextStep';
// calculatorNextStep('accordion');


// две формы 

import sendForms from './modules/sendForms';

sendForms('.main-form', '.phone-user');
sendForms('.capture-form', '.phone-user', '.name_2');
sendForms('.capture-form-popup', '.phone-user', '.name_13');
sendForms('.capture-form-popup', '.phone-user', '.name_11');


