const socialMedia = ['facebook', 'twitter', 'instagram', 'linkedin', 'youtube'];

function fallingSocialMedia() {
  const snowflake = document.createElement('span');
  snowflake.classList.add('snowflake');
  const iconClass = 'fab fa-' + socialMedia[Math.floor(Math.random() * socialMedia.length)];
  snowflake.innerHTML = '<i class="' + iconClass + '"></i>';
  snowflake.style.opacity = Math.random();
  snowflake.style.fontSize = `${Math.random() * 20 + 10}px`;
  snowflake.style.left = `${Math.random() * 100}vw`;
  snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'
  document.getElementById('snowfall').appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 3000);
}

setInterval(fallingSocialMedia, 100);