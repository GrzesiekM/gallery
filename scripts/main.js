const image1 = "https://picsum.photos/300/150";
const image2 = "https://picsum.photos/300/200";
const image3 = "https://picsum.photos/300/150";

const images = [image1, image2, image3];
// images.push(image1, image.2, image.3)

// Pętla: for..of
for (const image of images) {
    console.log("To jest obrazek " + image);
    console.log('PK');
}

//i++ =>    i=i+1;
//++i =>    i+i+1;

for (let i=0; < images.length; i++ ){
    const image = images[i];
    console.log("To jest obrazek " + image);
    console.log('PK');

}