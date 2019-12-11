const image1 = "https://picsum.photos/id/10/300/150";
const image2 = "https://picsum.photos/id/20/300/150";
const image3 = "https://picsum.photos/id/30/300/150";

const images = [image1, image2, image3];
// images.push(image1, image.2, image.3)

// Pętla: for..of
//for (const image of images) {
//    console.log("To jest obrazek " + image);
//    console.log('PK');
//}

//i++ =>    i=i+1;
//++i =>    i+i+1;

//petla for
 // for (let i=0; i < images.length; i++ ){
 //   const image = images[i];
 //   console.log("To jest obrazek " + image);
 //   console.log('PK');
// }

const isEmpty = (images.lenght ===0);
const isEmpty2 = (images.lenght ==0);

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
    console.log('- ' + 67567 - 151612562);
    console.log('** ' + 67567 ** 151612562);
}

function renderPhoto(url) {    
    const img = document.createElement('img');
    img.src=url;

    const main = document.querySelector('main');
    main.append(img); // renderowanie
   // console.log(url);
    //console.log(img);
}


function displayPhotos (photos) { 
    console.log(photos);
    for (const photo of photos) {
        renderPhoto ( photo);
    }
}

//uruchomienie funkcji
//renderPhoto('https://picsum.photos/id/10/300/150');
//renderPhoto('https://picsum.photos/id/20/300/150');
//renderPhoto('https://picsum.photos/id/30/300/150');
displayPhotos (images);

//displayImages();
//displayLastElement();