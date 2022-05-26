/*Всего 2 поля в скрипте, 2 в разметке для добавления категорий и словарь*/

//Лого + версия
let version = "1.0.0";
let logo = "***************************\n*                         *\n*  OOOOO  DDDD   W  W  W  *\n*  O   O  D   D  W WWW W  *\n*  O   O  D   D  W W W W  *\n*  O   O  D   D  W W W W  *\n*  O   O  D   D  W W W W  *\n*  OOOOO  DDDD    W   W   *\n*                         *\n***************************";
console.log(logo + "\n" + "Ver. " + version);
//
//Общие поля и функции
mout = document.querySelector("#mainOutput");
pointsToWin = 0;
timeToTimer = 0;
listStack = [];
fullList = [];
comands = {};
curTeam = 0;
timeToPause = 0;
let intervalID;
let timeOutID;
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
//
//Таймер
    var fn =  function fn() {
        nextTeam();
        show(document.querySelector('#wait'));
        hide(document.querySelector('#game'));
        document.querySelector("#pointBtn").removeEventListener("click", fn);
        for (let i = 0; i < Object.values(comands).length; i++) {
            if (Object.values(comands)[i] >= pointsToWin) {
                hide(document.querySelector("#game"));
                hide(document.querySelector("#wait"));
                show(document.querySelector("#win"));
                document.querySelector("#winner").value = Object.keys(comands)[i];
            }
        }
    };   
    function timer(time) {
        document.querySelector("#points").value = comands[document.querySelector("#curCom").value];
        newTime = time*1000;
        document.querySelector("#timer").value = time;
        intervalID = setInterval(
            () => {
                time -= 1;
                timeToPause--;
                document.querySelector("#timer").value = time;
            }   , 1000)
        timeOutID = setTimeout(
            () => {
                clearInterval(intervalID);
                document.querySelector("#timer").value = "Последнее слово";
                var el = document.querySelector("#pointBtn");
                if (fullList.length <= 0) {
                    return
                } else {
                el.addEventListener("click", fn);
                }
            }
        ,newTime)
    }
//
//Пауза
function pause() {
    if (document.querySelector("#pauseBtn").value == "Пауза") {
        document.querySelector("#minBtn").disabled = true;
        document.querySelector("#plusBtn").disabled = true;
        clearInterval(intervalID);
        clearTimeout(timeOutID);
        hide(document.querySelector("#skrit3"));
        document.querySelector("#pauseBtn").value = "Продолжить";
    } else {
        document.querySelector("#minBtn").disabled = false;
        document.querySelector("#plusBtn").disabled = false;
        timer(timeToPause);
        show(document.querySelector("#skrit3"));
        document.querySelector("#pauseBtn").value = "Пауза";
    }
}
//
//Кнопки добавления словарей



test4Btn = document.querySelector("#test4Btn");
brandsBtn = document.querySelector("#brandsBtn");
customBtn = document.querySelector("#customBtn");



//
//Добавление и удаление команды 
function addCom() {
    if (document.querySelector("#comName").value == "" || document.querySelector("#comName").value == " ") {
        return
    }
    comToAdd = document.querySelector("#comName").value;
    comands[comToAdd] = 0;
    document.querySelector("#comands").value = Object.keys(comands);
    document.querySelector("#comName").value = "";
}
function delCom() {
    delete comands[Object.keys(comands).pop()];
    document.querySelector("#comands").value = Object.keys(comands);
}
//
//Создание стэка
function addList(arrayToAdd, btn) {
    if (btn.style.backgroundColor == "rgb(31, 209, 31)") {
        listStack.push(arrayToAdd);
        btn.style.backgroundColor = "red"
    } else {
        listStack.splice(listStack.indexOf(arrayToAdd), 1);
        btn.style.backgroundColor = "rgb(31, 209, 31)"
    }
}
//
//Добавление словаря из стэка в общий список и очистка стэка
function stackGen() {    



if (listStack.includes('test4')) {
    fullList = fullList.concat(listOfWords_test4);
}
if (listStack.includes('brands')) {
    fullList = fullList.concat(listOfWords_brands);
}
if (listStack.includes('custom')) {
    fullList = fullList.concat(listOfWords_custom);
}



listStack = [];
}
//
//Генерация слова из общего списка, удаление его из списка
function wordGen() {
    if (fullList.length <= 0) {
        document.querySelector("#plusBtn").disabled = true;
        document.querySelector("#minBtn").disabled = true;
        show(document.querySelector("#dictRes"));
        mout.value = "Слова закончились!";
        hide(document.querySelector("#pauseBtn"));
        hide(document.querySelector("#skrit1"));
        hide(document.querySelector("#skrit2"));
    } else {
        mout.value = fullList[randomInteger(1, fullList.length)-1];
        fullList.splice(fullList.indexOf(mout.value), 1);
    }
}
//
//Добавление очков
function plusPoint() {
    comands[document.querySelector("#curCom").value]++;
    document.querySelector("#points").value = comands[document.querySelector("#curCom").value];
}
//
//Смена команды
function nextTeam() {
    timeToPause = timeToTimer;
    document.querySelector("#curCom").value = Object.keys(comands)[curTeam];
    a = (JSON.stringify(comands)).replace(/[{}"]/g, '');
    a = a.replace(/,/g, '\n');
    a = a.replace(/:/g, ': ');
    document.querySelector("#curCount").value = a;
    if (curTeam < Object.keys(comands).length-1) {
        curTeam++;
    } else {
        curTeam = 0;
    }
}
//
//Hide&Show
function hide(elem){
    elem.classList.add("hide")
}
function show(elem){
    elem.classList.remove("hide")
}
//
//Переход от команд дальше
function goTeam() {
    if (Object.keys(comands).length == 0) {
        return
    } else {
        show(document.querySelector('#dictChoose'));
        hide(document.querySelector('#comandsStart'));
    }
}
//
//Переход от словарей дальше
function goDict() {
    if (listStack.length == 0) {
        return
    } else {
        stackGen();
        nextTeam();
        show(document.querySelector('#wait'));
        hide(document.querySelector('#dictChoose'));
    }
}
//
//Переход от правил дальше
function goRules() {
    if (document.querySelector("#pointInput").value == "" || document.querySelector("#timerInput").value == "") {
        return
    } else {
    pointsToWin = document.querySelector("#pointInput").value;
    timeToTimer = document.querySelector("#timerInput").value;
    show(document.querySelector('#comandsStart'));
    hide(document.querySelector('#ruleSet'));
    timeToPause = timeToTimer;
    }
}
//
//Рестарт
function restart() {
    hide(document.querySelector("#dictRes"));
    k = Object.keys(comands);
    for (let i = 0; i < k.length; i++) {
        comands[k[i]] = 0;
    }
    nextTeam();
    hide(document.querySelector('#win'));
    show(document.querySelector('#wait'));
}
//
//Кастомный словарь
listOfWords_custom = [];
if (JSON.parse(localStorage.getItem('cusDict')) != null && JSON.parse(localStorage.getItem('cusDict')).length != 0) {
    listOfWords_custom = (JSON.parse(localStorage.getItem('cusDict')));
    console.log("Словарь получен!");
} else {
    console.log("Хранилище пустое!");
}
customCheck();
document.querySelector("#allCustomWords").value = listOfWords_custom;
function addCustom() {
    if (document.querySelector("#customInput").value != "") {
    listOfWords_custom.push(document.querySelector("#customInput").value);
    document.querySelector("#allCustomWords").value = listOfWords_custom;
    document.querySelector("#customInput").value = "";
    localStorage.setItem('cusDict', null);
    localStorage.setItem('cusDict', JSON.stringify(listOfWords_custom));
    } else {
        return
    }
}
function deleteCustom() {
    if (document.querySelector("#customInput").value != "") {
        if (listOfWords_custom.includes(document.querySelector("#customInput").value)) {
        listOfWords_custom.splice(listOfWords_custom.indexOf(document.querySelector("#customInput").value), 1);
        document.querySelector("#allCustomWords").value = listOfWords_custom;
        document.querySelector("#customInput").value = "";
        localStorage.setItem('cusDict', null);
        localStorage.setItem('cusDict', JSON.stringify(listOfWords_custom));
        } else {
            return
        }
    } else {
        return
    }
}
function customCheck() {
    if (listOfWords_custom.length <= 0) {
        hide(customBtn);
    } else {
        show(customBtn);
    }
}
//