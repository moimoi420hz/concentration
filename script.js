const initialImage = 'image/000_none.png'; // 初期値の画像
const images = [
    initialImage, 
    'image/001_plusone.png',
    'image/002_bonus.png',
    'image/003_catnips.png',
    'image/004_yang.png',
    'image/005_common.png',
    'image/006_tsukuyomi.png',
    'image/008_king.png',
    'image/009_wesson.png',
    'image/010_metallia.png',
    'image/011_wolf.png',
    'image/012_zombie.png',
    'image/013_spacezombie.png',
    'image/014_worm.png'
];
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.cell').forEach(cell => {
        cell.addEventListener('click', () => changeImage(cell));
        cell.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            resetImage(cell);
        });
    });
});

function changeImage(cell) {
    let img = cell.querySelector('img');

    if (!img) {
        img = document.createElement('img');
        img.src = initialImage;
        cell.appendChild(img);
    }

    let currentImageSrc = img.src.split('/').pop();
    let currentImageIndex = images.findIndex(image => image.endsWith(currentImageSrc));
    let nextImageIndex = (currentImageIndex + 1) % images.length;

    img.src = images[nextImageIndex];
    console.log(img.src);
}

function resetImage(cell) {
    let img = cell.querySelector('img');
    if (img) {
        img.src = initialImage; // 初期値
        console.log(img.src);
    }
}