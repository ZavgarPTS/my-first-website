const btn = document.querySelector('.btn')
const log_input = document.querySelector('#login')
const pass_input = document.querySelector('#password')

function singup() {
    var login = log_input.value
    var password = pass_input.value

    if (login == '' || password == '') {
        alert('Заполните все поля пожалуйста \n(^-^)');
    } else {
        console.log('Ваш логин: ' + login)
        console.log('Ваш пароль: ' + password)
        alert('Функция в бета-тесте, но мы знаем уже ваш логин и пароль \nЛогин:  ' + login + '\nПароль:  ' + password);
    }

}

btn.onclick = singup;