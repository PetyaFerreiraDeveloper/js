const filenames = [
    'files/rainbow-zoltan-tasi.jpg',
    'files/rainbow2-steve-johnson.jpg',
    'files/rainbow3-guy-stevens.jpg',
];

async function printRainbows(filenames) {
    for (let filename of filenames) {
        const response = await fetch(filename);
        const blob = await response.blob();
        const img = document.createElement('img');
        img.src = URL.createObjectURL(blob);
        img.width ='200';
        document.body.append(img);
    }
}
    

printRainbows(filenames);