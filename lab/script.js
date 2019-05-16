let imageNumber = 0;

let images = [
    document.getElementById('img1'),
    document.getElementById('img2'),
    document.getElementById('img3'),
    document.getElementById('img4'),
    document.getElementById('img5')
];

window.onload = async function() {
    while (true) {
        changeSlide(true);
        await sleep(4000);
    }
}

function changeSlide(isNext) {
    images[imageNumber].style.opacity = '0';

    if (isNext) {
        if (imageNumber == 4)
            imageNumber = 0;
        else imageNumber++;
    } else {
        if (imageNumber == 0)
            imageNumber = 4;
        else imageNumber--;
    }

    images[imageNumber].style.opacity = '1';

    console.log(imageNumber);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById('prev-slide').onclick = function() {
    changeSlide(false);
}

document.getElementById('next-slide').onclick = function() {
    changeSlide(true);
}