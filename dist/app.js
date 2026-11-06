'use strict';
document.getElementById('year').textContent = new Date().getFullYear();
const replay = document.getElementById('replay');
replay.addEventListener('click', () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  window.scrollTo({ top: 0, behavior: 'instant' });
  for (const animation of document.getAnimations()) {
    if (['curtain', 'logo-enter', 'progress', 'fade-in', 'reveal'].includes(animation.animationName)) {
      animation.cancel();
      animation.play();
    }
  }
});
