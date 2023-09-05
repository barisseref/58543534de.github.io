const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const searchInput = document.getElementById("search");
const randomButton = document.getElementById("random");
const images = document.querySelectorAll(".carousel img");
let currentIndex = 0;

// İleri geri işlevi
function showImage(index) {
    images.forEach((img, i) => {
        if (i === index) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });
}

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

// Arama işlevi
searchInput.addEventListener("keyup", () => {
    const searchTerm = searchInput.value.toLowerCase();
    images.forEach((img, i) => {
        const altText = img.alt.toLowerCase();
        if (altText.includes(searchTerm)) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });
});

// Rastgele işlevi
randomButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    currentIndex = randomIndex;
    showImage(currentIndex);
});

// Başlangıçta ilk görseli göster
showImage(currentIndex);