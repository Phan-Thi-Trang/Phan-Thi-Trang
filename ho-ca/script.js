const changeBgButton = document.getElementById('changeBgButton');
const content = document.getElementById('content');

// Danh sách các URL ảnh nền
const backgroundImages = [
  'url("images/bg2.jpeg")',
  'url("images/bg3.jpeg")',
  'url("images/bg4.jpeg")',
  'url("images/bg5.jpeg")',
];

let currentImageIndex = 0;

changeBgButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;

  content.style.backgroundImage = backgroundImages[currentImageIndex];
});


const playAudioButton = document.getElementById('playAudioButton');
const audio = document.getElementById('my-audio');
playAudioButton.addEventListener('click', () => {
  // Kiểm tra xem audio có đang tạm dừng không
  if (audio.paused) {
    audio.play(); // Nếu đang tạm dừng, phát nhạc
    toggleButton.textContent = 'Tắt'; // Đổi văn bản nút thành "Tắt"
  } else {
    audio.pause(); // Nếu đang phát, tạm dừng nhạc
    toggleButton.textContent = 'Bật'; // Đổi văn bản nút thành "Bật"
  }
});
