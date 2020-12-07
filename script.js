'use strict';

document.querySelector('.check').addEventListener('click', function () {
  document.querySelector('.message').textContent =
    'You entered ' + document.querySelector('.guess').value;
});
