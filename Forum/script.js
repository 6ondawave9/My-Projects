const ws = new WebSocket('ws://localhost:2346');

ws.onmessage = response => warmLoad();

function show(el) {
    el.classList.remove("hide");
}
function hide(el) {
    el.classList.add("hide");
}

coldLoad();

let curLogin;
let curPass;

//Часть логин

if (!localStorage.getItem('curUser')) {
    console.log('No user')
} else {
    curLogin = JSON.parse(localStorage.getItem('curUser'));
    curPass = JSON.parse(localStorage.getItem('curPassword'));
    login_script();
    //document.querySelector('#currentUser').innerHTML = "@" + curLogin;
    //show(document.querySelector("#createPost"));
    //show(document.querySelector("#logOut"));
    //hide(document.querySelector("#login"));
    //hide(document.querySelector("#ili"));
    //hide(document.querySelector("#register"));
}


function logOut() {
    localStorage.removeItem('curUser');
    localStorage.removeItem('curPassword');
    //hide(document.querySelector("#createPost"));
    //hide(document.querySelector("#logOut"));
    //show(document.querySelector("#register"));
    //show(document.querySelector("#ili"));
    //show(document.querySelector("#login"));
    location.reload();
}

function addEventListener_for_label () {
    document.querySelector('#php_post_area').classList.add('php_post_area');
    document.querySelector('#myFile').addEventListener('change', (event) => {
        document.querySelector('#fileLabel').innerHTML = document.querySelector('#myFile').files[0].name;
})}