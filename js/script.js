'use strict'
let switcher = document.querySelector('.btn');

switcher.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme')

    let className = document.body.className;
    if (className == 'light-theme') {
        this.textContent = 'Dark';
        console.log('current class name' + className);
    } else {
        this.textContent = 'Light';
    };
});