// HTML'den gerekli elementleri alın
const musicList = document.getElementById('music-list');
const musicTitle = document.getElementById('music-title');
const musicImage = document.getElementById('music-image');
const audio = document.getElementById('audio');
const stopButton = document.getElementById('stop');
const loopButton = document.getElementById('loop');
const backButton = document.getElementById('back');
const randomButton = document.getElementById('random'); // Rastgele çal düğmesi

const musicData = [
    { title: 'music1', image: 'music2.png', audioSrc: 'music2.mp3' },
    { title: 'music2', image: 'music2.png', audioSrc: 'music2.mp3' },
    { title: 'music3', image: 'music2.png', audioSrc: 'music2.mp3' },
    { title: 'music4', image: 'music2.png', audioSrc: 'music2.mp3' },
    { title: 'music5', image: 'music2.png', audioSrc: 'music2.mp3' },
    { title: 'music6', image: 'music2.png', audioSrc: 'music2.mp3' },
    { title: 'music7', image: 'music2.png', audioSrc: 'music2.mp3' },
    { title: 'music8', image: 'music2.png', audioSrc: 'music2.mp3' },
    { title: 'music9', image: 'music2.png', audioSrc: 'music2.mp3' },
    { title: 'music10', image: 'music2.png', audioSrc: 'music2.mp3' },

   
    // Diğer müzikleri buraya ekleyin
];


// Müzik kartlarını başlangıçta gösterme işlevi
function showAllMusic() {
    musicList.innerHTML = ''; // Müzik listesini temizle

    musicData.forEach((music, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = music.title;
        listItem.addEventListener('click', () => {
            playMusic(index);
        });
        musicList.appendChild(listItem);

        // Sol taraftaki menüye küçük görsel ekleyin
        const menuImage = document.createElement('img');
        menuImage.src = music.image;
        menuImage.alt = music.title;
        listItem.appendChild(menuImage);
    });
}

// Müzik kartlarını başlangıçta göster
showAllMusic();

// Müzikleri çalmak için playMusic işlevini ekleyin
let currentMusicIndex = 0; // Şu an çalınan müziği izlemek için bir değişken
function playMusic(index) {
    currentMusicIndex = index;
    const music = musicData[index];
    musicTitle.textContent = music.title;
    musicImage.src = music.image;
    audio.src = music.audioSrc;
    audio.play(); // Müziği çalmak için bu komutu ekleyin

    // Tıklanan düğmenin arka plan rengini mavi yap
    resetButtonColors();
    loopButton.style.backgroundColor = 'blue';
}

// Durdur düğmesine tıklamak için işlev
function stopMusic() {
    audio.pause();
    audio.currentTime = 0;
    resetButtonColors();
    stopButton.style.backgroundColor = 'blue';
}

// Sürekli Çal düğmesine tıklamak için işlev
function toggleLoop() {
    if (audio.loop) {
        audio.loop = false;
        loopButton.textContent = 'Sürekli Çal';
    } else {
        audio.loop = true;
        loopButton.textContent = 'Sürekli Çalacak';
    }
    resetButtonColors();
    loopButton.style.backgroundColor = 'blue';
}

// Başa Sar düğmesine tıklamak için işlev
function backToStart() {
    audio.currentTime = 0;
    resetButtonColors();
    backButton.style.backgroundColor = 'blue';
}

// Rastgele çal düğmesine tıklamak için işlev
randomButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * musicData.length);
    playMusic(randomIndex);
    resetButtonColors();
    randomButton.style.backgroundColor = 'blue';
});

// Tüm düğmelerin arka plan rengini sıfırlayan işlev
function resetButtonColors() {
    loopButton.style.backgroundColor = '';
    stopButton.style.backgroundColor = '';
    backButton.style.backgroundColor = '';
    randomButton.style.backgroundColor = '';
}

// Durdur düğmesine tıklamak için dinleyici ekleyin
stopButton.addEventListener('click', stopMusic);

// Sürekli Çal düğmesine tıklamak için dinleyici ekleyin
loopButton.addEventListener('click', toggleLoop);

// Başa Sar düğmesine tıklamak için dinleyici ekleyin
backButton.addEventListener('click', backToStart);
// ...

// Arama çubuğunda her karakter girişi için dinleyici ekleyin
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', filterMusic);

// Başlangıçta müzik kartlarını gösterme işlevi
function showAllMusic() {
    musicList.innerHTML = ''; // Müzik listesini temizle

    musicData.forEach((music, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = music.title;
        listItem.addEventListener('click', () => {
            playMusic(index);
        });
        musicList.appendChild(listItem);

        // Sol taraftaki menüye küçük görsel ekleyin
        const menuImage = document.createElement('img');
        menuImage.src = music.image;
        menuImage.alt = music.title;
        listItem.appendChild(menuImage);
    });
}


// Müzik kartlarını başlangıçta göster
showAllMusic();

// Müzik kartlarını filtreleme işlevi
function filterMusic() {
    const searchTerm = searchInput.value.toLowerCase();

    musicList.innerHTML = ''; // Müzik listesini temizle

    musicData.forEach((music, index) => {
        if (music.title.toLowerCase().includes(searchTerm) || searchTerm === '') {
            const listItem = document.createElement('li');
            listItem.textContent = music.title;
            listItem.addEventListener('click', () => {
                playMusic(index);
            });
            musicList.appendChild(listItem);

            // Sol taraftaki menüye küçük görsel ekleyin
            const menuImage = document.createElement('img');
            menuImage.src = music.image;
            menuImage.alt = music.title;
            listItem.appendChild(menuImage);
        }
    });
}

// ...

