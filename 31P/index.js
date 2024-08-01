document.getElementById('changeImageBtn').addEventListener('click', function() {
    const image = document.getElementById('image');
    if (image.src.includes('/women flower.jpg')) {
        image.src = '/nature.webp';
    } else {
        image.src = '/women flower.jpg';
    }
});
