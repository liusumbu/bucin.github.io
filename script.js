// Buka Hadiah
function openGift() {
    // Mengganti gambar hadiah dengan foto kalian berdua
    document.getElementById('giftImage').src = 'your-photo.jpg'; // Ganti dengan nama file foto kalian
    alert('Ini hadiah spesial untukmu! ❤️');
}

// Kirim Feedback ke WhatsApp
function sendToWhatsApp() {
    let message = document.getElementById('feedbackMessage').value;
    if(message.trim() === '') {
        alert('Silakan tulis pesan terlebih dahulu.');
        return;
    }
    let phoneNumber = '6282229094416'; // Nomor WA Anda
    let url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Tombol 'Tidak' bergerak
function moveButton() {
    let noButton = document.getElementById('noButton');
    noButton.style.position = 'absolute';
    noButton.style.top = Math.random() * (window.innerHeight - 50) + 'px';
    noButton.style.left = Math.random() * (window.innerWidth - 100) + 'px';
}

// Menampilkan pesan ketika tombol 'Ya' diklik
function showYesMessage() {
    alert('Aku juga sayang kamu! ❤️');
}

// Musik Latar
window.onload = function() {
    let music = document.getElementById('bgMusic');
    music.play().catch(function() {
        // Otomatis memulai musik jika browser mencegah autoplay
        let playButton = document.createElement('button');
        playButton.innerHTML = 'Mulai Musik 🎵';
        playButton.onclick = function() {
            music.play();
            playButton.style.display = 'none';
        };
        playButton.style.position = 'fixed';
        playButton.style.bottom = '20px';
        playButton.style.right = '20px';
        playButton.style.zIndex = '1000';
        document.body.appendChild(playButton);
    });
}

// Efek Bunga Jatuh
function createFlower() {
    let flower = document.createElement('div');
    flower.classList.add('flower');
    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.animationDuration = Math.random() * 5 + 5 + 's';
    document.body.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 10000);
}

setInterval(createFlower, 500);
