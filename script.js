function startAnimation() {
  const imageSelect = document.getElementById('image-select');
  const selectedImage = imageSelect.options[imageSelect.selectedIndex].value;

  for (let i = 0; i < 100000; i++) {
    createBubble(selectedImage);
    createBubble(selectedImage);
  }

  // Solicitar el modo de pantalla completa
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}


function createBubble(imageSrc) {
  const bubble = document.createElement('img');
  bubble.src = imageSrc;
  bubble.className = 'bubble';

  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;

  bubble.style.left = x + 'px';
  bubble.style.top = y + 'px';

  document.getElementById('container').appendChild(bubble);

  animateBubble(bubble);
}

function animateBubble(bubble) {
  const speed = Math.random() * 4 + 1; // Velocidad aleatoria

  function moveBubble() {
    const x = parseFloat(bubble.style.left);
    const y = parseFloat(bubble.style.top);

    const newX = x + speed * (Math.random() - 0.5);
    const newY = y + speed * (Math.random() - 0.5);

    bubble.style.left = newX + 'px';
    bubble.style.top = newY + 'px';

    if (newX < -50 || newX > window.innerWidth + 50 || newY < -50 || newY > window.innerHeight + 50) {
      bubble.remove();
      createBubble(bubble.src);
    } else {
      requestAnimationFrame(moveBubble);
    }
  }

  moveBubble();
}
