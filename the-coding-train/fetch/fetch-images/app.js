console.log('about to fetch a rainbow');

async function catchRainbbow() {
    const response1 = await fetch('files/rainbow-zoltan-tasi.jpg');
    const blob1 = await response1.blob();
    document.getElementById('rainbow').src = URL.createObjectURL(blob1);

    const response2 = await fetch('files/rainbow2-steve-johnson.jpg');
    const blob2 = await response2.blob();
    document.getElementById('rainbow2').src = URL.createObjectURL(blob2);

    const response3 = await fetch('files/rainbow3-guy-stevens.jpg');
    const blob3 = await response3.blob();
    document.getElementById('rainbow3').src = URL.createObjectURL(blob3);

    const response4 = await fetch('files/poem.txt');
    const text = await response4.text();
    document.getElementById('text').innerHTML = text;
}

catchRainbbow()
    .catch(error => {
        console.log('error!');
        console.error(error);
    });

// fetch('rainbow-zoltan-tasi.jpg')
// .then(response => {
//     console.log(response);
//     return response.blob();
// })
// .then(blob => {
//     console.log(blob);
//     document.getElementById('rainbow').src = URL.createObjectURL(blob);
// })
// .catch(error => {
//     console.log('error!')
//     console.error(error);
// })