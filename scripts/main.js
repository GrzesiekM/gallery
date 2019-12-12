
//const images = [image1, image2, image3];
// images.push(image1, image.2, image.3)

// Pętla: for..of
//for (const image of images) {
//    console.log("To jest obrazek " + image);
//    console.log('PK');
//}

//i++ =>    i=i+1;
//++i =>    i+i+1;

//pętla for
 // for (let i=0; i < images.length; i++ ){
 //   const image = images[i];
 //   console.log("To jest obrazek " + image);
 //   console.log('PK');
// }



// const isEmpty = (images.lenght ===0);
// const isEmpty2 = (images.lenght ==0);

function displayImages () {
    console.log('Liczba obrazków ' + images.length);
    console.log('Pierwszy element listy' + images[0]);
    console.log('Drugi element listy' + images[1]);
}

function displayLastElement (){
    console.log('Ostatni element listy' + images[images.length-1]);
    console.log('/ ' + 67567 / 151612562);
    console.log('* ' + 67567 * 151612562);   //asterix czyli *
    console.log('+ ' + 67567 + 151612562);
    console.log('- ' + (67567 - 151612562));
    console.log('** ' + 67567 ** 151612562);
}

function renderPhoto(photo) {    
    const $card = document.createElement('div');
    $card.classList.add('card', 'col-3', 'mx-4');
    $card.style.width ='30%';

    const $img = document.createElement('img');
    $img.src=photo.imageUrl;

    const $body = document.createElement('div');
    $body.classList.add('card-body');

    const $title = document.createElement('h5');
    $title.classList.add('card-title');
    $title.textContent = photo.description;

    // Group HTML Elements
    $card.append($img);
    $card.append($body);
    $card.append($title);

    console.log(photo.title);

    const main = document.querySelector('main');
    main.append($card); // renderowanie
   // console.log(url);
    //console.log(img);
}


function displayPhotos (photos) { 
    // console.log(photos);
    // for (const photo of photos) {
    //     renderPhoto ( photo);
    // }
    photos.forEach(function (photo) {
        console.group(photo.author.name);
        console.info(photo.title);
        //console.warn(photo.author);
        console.groupEnd();
        renderPhoto(photo);

        // photos.forEach(renderPhoto)
    }
    )
}

//uruchomienie funkcji
//renderPhoto('https://picsum.photos/id/10/300/150');
//renderPhoto('https://picsum.photos/id/20/300/150');
//renderPhoto('https://picsum.photos/id/30/300/150');
// displayPhotos (images);



function  shouldDisplayPhotos() {
    const answer = prompt ('Czy chcesz wyswietlić zdjecia');
    return  (answer.toLowerCase() === 'tak');
    
}



function isEmpty(images) {
    return images.length ===0;
}
  
function main () {
    loader.show();

    fetchPhotosFromRemote()
        .then (function (images) {
    //if (isEmpty()) {
       if (images.length >1 || images.length <1) {
       
           console.log('zdjecia istnieja');
           displayPhotos(images);
    
   
   } else { 
       
       console.log('zdjecia nie istnieja')
       displayMessage ('Nie ma zdjec');
   }


});
}
main();



// setTimeout (function (){
//     console.info('chowamy loaderka');
//     loader.hide();

// }, 1500); //1,5s
    



//displayImages();
//displayLastElement();

const authors = images.map(function (image) {
    return image.author;
});
console.log(authors);

const masterPrice = images.reduce(function (memory, image) {
    console.warn(memory);
    memory = memory + image.price;
    return memory;
}, 0);

const groupByPrice = images.reduce(function (memory, image) {
	memory[image.price] = image;
	return memory;
}, {})