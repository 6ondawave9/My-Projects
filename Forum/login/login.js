async function login() {
    let login = document.querySelector("#loginLogin").value;
    let password = document.querySelector("#passwordLogin").value;
    data = {
        "login": login,
        "password": password
    }
    let response = await fetch('http://Forum/login/login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(data)
    })

    let commits = await response.text();
    if (commits == "Неверный логин или пароль") {
        let info = document.querySelector("#info");
        show(info);
        info.value = "Неверный логин или пароль!"
    } else {
    
        document.querySelector("#php_post_area").innerHTML = commits;
        addEventListener_for_label();
        document.querySelector("#log_reg_box").remove();
        hide(document.querySelector("#info"));
        //hide(document.querySelector("#login"));
        //hide(document.querySelector("#register"));
        //hide(document.querySelector("#ili"));

        curLogin = login;
        curPass = password;
        document.querySelector('#currentUser').innerHTML = "@"+login;
    
        
        localStorage.setItem('curUser', JSON.stringify(login));
        curLogin = JSON.parse(localStorage.getItem('curUser'));
        localStorage.setItem('curPassword', JSON.stringify(password));
        curPass = JSON.parse(localStorage.getItem('curPassword'));
        
       
    }
}

async function login_script() {
    let login = curLogin;
    let password = curPass;
    data = {
        "login": login,
        "password": password
    }
    let response = await fetch('http://Forum/login/login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(data)
    })

    let commits = await response.text();
    if (commits == "Неверный логин или пароль") {
        let info = document.querySelector("#info");
        show(info);
        info.value = "Ошибка авторизации"
    } else {
    
        document.querySelector("#php_post_area").innerHTML = commits;
        addEventListener_for_label();
        document.querySelector("#log_reg_box").remove();
        hide(document.querySelector("#info"));
        //hide(document.querySelector("#login"));
        //hide(document.querySelector("#register"));
        //hide(document.querySelector("#ili"));

        curLogin = login;
        curPass = password;
        document.querySelector('#currentUser').innerHTML = "@"+login;
    
        
        localStorage.setItem('curUser', JSON.stringify(login));
        curLogin = JSON.parse(localStorage.getItem('curUser'));
        localStorage.setItem('curPassword', JSON.stringify(password));
        curPass = JSON.parse(localStorage.getItem('curPassword'));
        
       
    }
}

async function login_post() {
    let login = curLogin;
    let password = curPass;
    data = {
        "login": login,
        "password": password
    }
    let response = await fetch('http://Forum/login/login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(data)
    })

    let commits = await response.text();
    if (commits == "Неверный логин или пароль") {
        let info = document.querySelector("#info");
        show(info);
        info.value = "Ошибка авторизации";
        return "Error_fake_pass"
    } else {
        return "Access"
    }            
}