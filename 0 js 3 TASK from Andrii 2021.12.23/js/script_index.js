

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    let UserBase = [];

    function formSend(e) {
        e.preventDefault();
        
        let error = formValidate(form);

        if (error === 0) {

        } else {
            alert ('Заполните обязательные поля');
            return error;
        }

        let User = {
            name: document.getElementById('formName').value,
            phone: document.getElementById('formPhoneNumb').value,
        };

        /* ВЫВОД СТРОКИ В ДОКУМЕНТ
        const userListHtml = document.getElementsByClassName('js-list-users');
        const userLineHtml = '<div>' + User.name + ' ' + User.phone + '</div>';
        userListHtml[0].innerHTML = userListHtml[0].innerHTML + userLineHtml;
        */

        UserBase.push(User);
        let UserBaseString = JSON.stringify(UserBase);
        localStorage.setItem('form', UserBaseString);
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('js-phone-input')) {
                if (phoneNumbTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }
    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
    function phoneNumbTest(input) {
        return !/^\d[\d\(\)\ -]{4,14}\d$/.test(input.value);
    }
});