let brands = document.querySelectorAll('.card');

//click

document.querySelector('#Nike').addEventListener('click', () => {
    let data = document.querySelector('#Nike').value;
    for (let i = 0; i < brands.length; i++) {
        if (document.querySelector('#Nike').checked === false) {
            if (brands[i].getAttribute('brand') == data) {
                brands[i].classList.add('hideBrand');
            }
        }
        else {
            if (brands[i].getAttribute('brand') == data) {
                brands[i].classList.remove('hideBrand');
            }
        }
}});

document.querySelector('#Jordan').addEventListener('click', () => {
    let data = document.querySelector('#Jordan').value;
    for (let i = 0; i < brands.length; i++) {
        if (document.querySelector('#Jordan').checked === false) {
            if (brands[i].getAttribute('brand') == data) {
                brands[i].classList.add('hideBrand');
            }
        }
        else {
            if (brands[i].getAttribute('brand') == data) {
                brands[i].classList.remove('hideBrand');
            }
        }
}});

document.querySelector('#Adidas').addEventListener('click', () => {
    let data = document.querySelector('#Adidas').value;
    for (let i = 0; i < brands.length; i++) {
        if (document.querySelector('#Adidas').checked === false) {
            if (brands[i].getAttribute('brand') == data) {
                brands[i].classList.add('hideBrand');
            }
        }
        else {
            if (brands[i].getAttribute('brand') == data) {
                brands[i].classList.remove('hideBrand');
            }
        }
}});

document.querySelector('#size9').addEventListener('click', () => {
    let data = document.querySelector('#size9').value;
    for (let i = 0; i < brands.length; i++) {
        if (document.querySelector('#size9').checked === false) {
            if (brands[i].getAttribute('size') == data) {
                brands[i].classList.add('hideSize');
            }
        }
        else {
            if (brands[i].getAttribute('size') == data) {
                brands[i].classList.remove('hideSize');
            }
        }
}});

document.querySelector('#size10').addEventListener('click', () => {
    let data = document.querySelector('#size10').value;
    for (let i = 0; i < brands.length; i++) {
        if (document.querySelector('#size10').checked === false) {
            if (brands[i].getAttribute('size') == data) {
                brands[i].classList.add('hideSize');
            }
        }
        else {
            if (brands[i].getAttribute('size') == data) {
                brands[i].classList.remove('hideSize');
            }
        }
}});

document.querySelector('#sale').addEventListener('click', () => {
    let data = document.querySelector('#sale').value;
    for (let i = 0; i < brands.length; i++) {
        if (document.querySelector('#sale').checked) {
            if (brands[i].getAttribute('sale') !== data) {
                brands[i].classList.add('hideSale');
            }
        }
        else {
            if (brands[i].getAttribute('sale') !== data) {
                brands[i].classList.remove('hideSale');
            }
        }
}});

//window.onload

window.onload = () => {
    let data = document.querySelector('#Nike').value;
    for (let i = 0; i < brands.length; i++) {
        if (document.querySelector('#Nike').checked === false) {
            if (brands[i].getAttribute('brand') == data) {
                brands[i].classList.add('hideBrand');
            }
        }
        else {
            if (brands[i].getAttribute('brand') == data) {
                brands[i].classList.remove('hideBrand');
            }
        }
}};

window.onload = () => {
    let data = document.querySelector('#Jordan').value;
    for (let i = 0; i < brands.length; i++) {
        if (document.querySelector('#Jordan').checked === false) {
            if (brands[i].getAttribute('brand') == data) {
                brands[i].classList.add('hideBrand');
            }
        }
        else {
            if (brands[i].getAttribute('brand') == data) {
                brands[i].classList.remove('hideBrand');
            }
        }
}};

window.onload = () => {
    let data = document.querySelector('#Adidas').value;
    for (let i = 0; i < brands.length; i++) {
        if (document.querySelector('#Adidas').checked === false) {
            if (brands[i].getAttribute('brand') == data) {
                brands[i].classList.add('hideBrand');
            }
        }
        else {
            if (brands[i].getAttribute('brand') == data) {
                brands[i].classList.remove('hideBrand');
            }
        }
}};

window.onload = () => {
    let data = document.querySelector('#size9').value;
    for (let i = 0; i < brands.length; i++) {
        if (document.querySelector('#size9').checked === false) {
            if (brands[i].getAttribute('size') == data) {
                brands[i].classList.add('hideSize');
            }
        }
        else {
            if (brands[i].getAttribute('size') == data) {
                brands[i].classList.remove('hideSize');
            }
        }
}};

window.onload = () => {
    let data = document.querySelector('#size10').value;
    for (let i = 0; i < brands.length; i++) {
        if (document.querySelector('#size10').checked === false) {
            if (brands[i].getAttribute('size') == data) {
                brands[i].classList.add('hideSize');
            }
        }
        else {
            if (brands[i].getAttribute('size') == data) {
                brands[i].classList.remove('hideSize');
            }
        }
}};

/*show all

document.querySelector('#showAll').addEventListener('click', () => {
    document.querySelector('#Nike').checked = true;
    document.querySelector('#Jordan').checked = true;
    document.querySelector('#Adidas').checked = true;
    document.querySelector('#size9').checked = true;
    document.querySelector('#size10').checked = true;
});*/