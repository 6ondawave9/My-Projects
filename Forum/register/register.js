function register() {
    let login = document.querySelector("#loginReg").value;
    if (login != login.replace(/[^a-zA-ZА-Яа-я0-9]/gi, '') || login.length < 6) {
        show(document.querySelector("#info"));
        document.querySelector("#info").value = "Логин должен быть не короче 6 символов и содержать только буквы или цифры";
        return
    } else {
        hide(document.querySelector("#info"));
        document.querySelector("#info").value = "";
    }
    let password = document.querySelector("#passwordReg").value;
    if (password != password.replace(/[^a-zA-ZА-Яа-я0-9]/gi, '') || password.length < 6) {
        show(document.querySelector("#info"));
        document.querySelector("#info").value = "Пароль должен быть не короче 6 символов и содержать только буквы или цифры";
        return
    } else {
        hide(document.querySelector("#info"));
        document.querySelector("#info").value = "";
    }
    data = {
        "login": login,
        "password": password
    }
    fetch('http://Forum/register/register.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .then(show(document.querySelector("#info")))
    .finally(() => {document.querySelector("#info").value = "Вы успешно зарегестрировались! Зайдите в Ваш аккакунт"});//+логин занят
    document.querySelector("#loginReg").value = "";
    document.querySelector("#passwordReg").value = "";
    document.querySelector("#info").value = "";
}