let inputText = "";
inputText = inputText.replace(/[^a-zа-яё\s]/gi, '');
inputText = inputText.split('  ');
inputText = inputText.sort();
console.log(inputText);