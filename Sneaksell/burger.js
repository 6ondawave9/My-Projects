let burger = document.querySelector('.burger');
document.querySelector('#burgerBtn').onclick = function(){
    if (burger.classList.contains('hide')) {
    burger.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    document.getElementById("burgerBtn").src="items/icons/x.png";
}
else {
    burger.classList.add('hide');
    document.body.style.overflow = 'scroll';
    document.getElementById("burgerBtn").src="items/icons/menu.png";
}
};