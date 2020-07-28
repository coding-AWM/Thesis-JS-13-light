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

//калькулятор следующий шаг
import calculatorNextStep from './modules/calculatorNextStep';
calculatorNextStep('accordion');

//калькулятор
import calculator from './modules/calculator';
calculator();


// формы
import sendForms from './modules/sendForms';
sendForms('.main-form', '.phone-user');
sendForms('.capture-form', '.phone-user', '.name_2');
//две верхнгих формы встроенные в вёрстку. они работают

// нижние формы в попапах

import sendFormsModals from './modules/sendFormsModals';

sendFormsModals('.capture-form-consultation', '.phone-user', '.name_13', '.capture-form-btn', '.director-form');
sendFormsModals('.capture-form-discount', '.phone-user', '.name_11', '.capture-form-btn');
sendFormsModals('.capture-form-check', '.phone-user', '.name_12', '.discount-btn');
sendFormsModals('.first-form', '.phone-user', '.name_1', '.capture-form-btn');



