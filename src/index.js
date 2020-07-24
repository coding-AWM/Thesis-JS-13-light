// eslint-disable-next-line strict
'use strict';

// проверка на модульность, в коце удалить
import helo from './modules/inity';

helo('проверка на моульность');

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

// две формы 

import sendForms from './modules/sendForms';
sendForms('.main-form', '.phone-user');
sendForms('.capture-form', '.phone-user', '.name_2');
