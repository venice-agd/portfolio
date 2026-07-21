let galleryImages = [];
let currentImage = 0;

function openGallery(images) {
    galleryImages = images;
    currentImage = 0;
    document.getElementById("galleryModal").style.display = "flex";
    document.getElementById("galleryImage").src = galleryImages[currentImage];
}

function closeGallery() {
    document.getElementById("galleryModal").style.display = "none";
}

function nextImage() {
    currentImage++;
    if (currentImage >= galleryImages.length) {
        currentImage = 0;
    }
    document.getElementById("galleryImage").src = galleryImages[currentImage];
}

function prevImage() {
    currentImage--;
    if (currentImage < 0) {
        currentImage = galleryImages.length - 1;
    }
    document.getElementById("galleryImage").src = galleryImages[currentImage];
}

window.onclick = function (event) {
    const modal = document.getElementById("galleryModal");
    if (event.target == modal) {
        closeGallery();
    }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeGallery();
    }
});