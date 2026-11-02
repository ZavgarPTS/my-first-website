const btn = document.querySelector('.btn')
const log_input = document.querySelector('#login')
const pass_input = document.querySelector('#password')
const forgotLink = document.querySelector('#forgot-link');

function singup() {
    var login = log_input.value
    var password = pass_input.value

    if (login == 'ZAVGARzxc' || password == 'K201035K') {
        alert('Приветствуем вас, ZAVGARzxc. Надеюсь сегодня ваши планы доработать свой проект?\n(^-^)');
    } else {
        console.log('Ваш логин: ' + login)
        console.log('Ваш пароль: ' + password)
        alert('Извините но, вы не наш разработчик. Введите правильные данные и перепроверьте свои \nЛогин:  ' + login + '\nПароль:  ' + password + '\n :3');
    }

}

forgotLink.onclick = function(event) {
    event.preventDefault();
    alert("Извините данная функция находится в разработке. Узнайте данные у разработчика 'ZAVGARzxc'\n^-^");
};

btn.onclick = singup;