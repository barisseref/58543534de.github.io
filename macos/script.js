// İconları ve popupları seçin
const icons = document.querySelectorAll('.icon');
const popups = document.querySelectorAll('.popup');
const closeButtons = document.querySelectorAll('.close-button');

// Başlangıçta popupları gizle
popups.forEach(popup => {
    popup.style.display = 'none';
});


// zamanlayici-başlangıç

const zamanlayiciPopup = document.querySelector(".zamanlayici-popup");
const countdownDisplay = document.getElementById("countdown");
let timerInterval;

function updatePopup() {
    zamanlayiciPopup.style.display = "block";
    setTimeout(() => {
        zamanlayiciPopup.style.display = "none";
    }, 2000); // 2 saniye sonra popup'ı kapat
}

const buttons = document.querySelectorAll(".zamanlayici-buttons button");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        const minutes = parseInt(this.getAttribute("data-minutes"), 10);
        startTimer(minutes);
    });
});

function formatTime(seconds) {
    const minutesRemaining = Math.floor(seconds / 60);
    const secondsRemaining = seconds % 60;
    return `${minutesRemaining}:${secondsRemaining < 10 ? '0' : ''}${secondsRemaining}`;
}

function startTimer(minutes) {
    clearInterval(timerInterval);
    zamanlayiciPopup.style.display = "none";
    let remainingTime = minutes * 60; // Dakikaları saniyeye çevir

    timerInterval = setInterval(function () {
        remainingTime--;

        if (remainingTime <= 0) {
            updatePopup();
            clearInterval(timerInterval);
        }

        countdownDisplay.textContent = formatTime(remainingTime);
    }, 1000); // Her 1 saniyede bir çalışır (1000 milisaniye)

    countdownDisplay.textContent = formatTime(minutes * 60); // Geri sayım başladığında süreyi başlat
}

// Sayfa yüklendiğinde herhangi bir zamanlayıcı çalışmasın, sadece düğmelere tıklandığında çalışsın
window.onload = function() {
    clearInterval(timerInterval);
    zamanlayiciPopup.style.display = "none";
    countdownDisplay.textContent = "0:00";
};


// zamanlayıcı-bitiş














// İconlara tıklama olayını ekle
icons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
        // Diğer iconları ve popupları kapat
        for (let i = 0; i < icons.length; i++) {
            popups[i].style.display = 'none';
        }

        // Tıklanan icona göre ilgili popup'ı aç
        popups[index].style.display = 'block';

        // İframe yüklemesi tamamlandığında soyutluğu gizle
        popups[index].querySelector('iframe').addEventListener('load', () => {
            popups[index].style.opacity = 1;
        });
    });
});

// Kapatma butonlarına tıklama olayını ekle
closeButtons.forEach((closeButton, index) => {
    closeButton.addEventListener('click', () => {
        popups[index].style.display = 'none';
    });
});

// İçerik alanına tıklama olayını ekle
popups.forEach(popup => {
    const content = popup.querySelector('.popup-content');
    content.addEventListener('click', (e) => {
        // Eğer içerik üzerinde tıklanırsa, popup kapanmamasını sağla
        e.stopPropagation();
    });
});

// Popupları kapatma olayını devre dışı bırak
popups.forEach(popup => {
    popup.addEventListener('click', () => {
        popup.style.display = 'none';
    });
});














