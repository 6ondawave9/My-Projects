document.querySelector('.sortUp').onclick = mySort;
document.querySelector('.sortDown').onclick = mySortDown;

function mySort() {
 let allCards = document.querySelector('.allCards');
 for (let i = 0; i < allCards.children.length; i++) {
     for (let j = i; j < allCards.children.length; j++){
         if (+allCards.children[i].getAttribute('price') > +allCards.children[j].getAttribute('price')) {
             replacedNode = allCards.replaceChild(allCards.children[j], allCards.children[i]);
             insertAfter(replacedNode, allCards.children[i]);
         }
     }
 }
}

function mySortDown() {
    let allCards = document.querySelector('.allCards');
    for (let i = 0; i < allCards.children.length; i++) {
        for (let j = i; j < allCards.children.length; j++){
            if (+allCards.children[i].getAttribute('price') < +allCards.children[j].getAttribute('price')) {
                replacedNode = allCards.replaceChild(allCards.children[j], allCards.children[i]);
                insertAfter(replacedNode, allCards.children[i]);
            }
        }
    }
}

function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}