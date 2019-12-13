// Pętla: for..of
// for (const image of images) {
//     console.log("To jest obrazek " + image);
//     console.log('PK');
// }

// Pętla: for
// for (let i = 0; i < images.length; i++) {
//     const image = images[i];
//     console.log("To jest obrazek " + image);
//     console.log('PK');
// }

// const isEmpty = (images.length === 0);
// console.log( 1 === 1);
// console.log( 1 === '1');
// console.log( 1 == '1');
// console.log( 1 == 1);

// Definicja funkcji
// function displayImages() {
//     console.log('Liczba obrazków ' + images.length);
//     console.log('Pierwszy element listy ' + images[0]);
//     console.log('Drugi element listy ' + images[1]);
// }

// function displayLastElement() {
//     // [0]: ...
//     // [1]: ...
//     // [2]: ...
//     // length = 3
//     // LAST_ELEMENT = (3 - 1) => 2;
//     console.log('Ost. element listy ' + images[images.length - 1]);
// }

// function calculator() {
//     console.log(' / ', 876234 / 2378);
//     console.log(' * ', 876234 * 2378); // asterix
//     console.log(' + ', 876234 + 2378);
//     console.log(' - ', 876234 - 2378);
//     console.log(' ** ', 876234 ** 2378);
// }

function renderPhoto(photo) {
    const $card = document.createElement('div');
    $card.classList.add('card', 'col-md-4', 'mb-3');

    const $img = document.createElement('img');
    $img.src = photo.imageUrl;

    const $body = document.createElement('div');
    $body.classList.add('card-body');

    const $title = document.createElement('h5');
    $title.classList.add('card-title');
    $title.textContent = photo.description;

    // Group HTML Elements
    $card.append($img);
    $card.append($body);
    $body.append($title);

    // Render
    const $main = document.querySelector('main');
    $main.append($card);
}

/**
 * @typedef {Object} Photo
 * @property {string} url
 * @property {string} title
 * @property {string} author
 *
 * @typedef {Array<Photo>} Photos
 */

/**
 * @param {Photos} photos
 */
function displayPhotos(photos) {
    // for (const photo of photos) {
    //     renderPhoto(photo);
    // }
    // Collection API — Array.prototype.forEach
    photos.forEach(function (photo) {
        console.group(photo.id);
        console.info(photo.author.name);
        console.groupEnd();
        renderPhoto(photo);
    });
    // photos.forEach(renderPhoto);
}

// Uruchomienie funkcji
// displayImages();
// displayLastElement();

// renderPhoto('https://picsum.photos/id/10/300/150');
// renderPhoto('https://picsum.photos/id/20/300/150');
// renderPhoto('https://picsum.photos/id/30/300/150');

function shouldDisplayPhotos() {
    const answer = prompt('Czy chcesz wyświetlić zdjęcia?');
    return (answer.toLowerCase() === 'tak');
}

function isEmpty(images) {
    return images.length === 0;
}

// setTimeout(function () {
//     // console.info('chowamy loaderka');
//     loader.hide();
// }, 1500); // 1.5s