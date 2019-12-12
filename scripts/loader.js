const loader = {};

loader.show =  function () {
// 1. stworzenie HTMLImageElementu
const img = document.createElement('img');
// Dodanie klasy CSS do elementu drzewa DOM
img.classList.add('loader');

// 2. Ustawienie atrybutu "src"
img.src = 'images/loader.svg';
// 3. Pobranie referencji do kontenera w którym loader sie wyswietli
const $main = document.querySelector('main');

// 4. Dodanie loadera do powyższego kontenera
$main.append(img);

};


loader.hide = function () {
    // 1. Pobrać referencje do loader
    const $loader =document.querySelector('.loader');
    // 2. Usunąc element z DOMa
    $loader.remove();
}


console.log(loader);