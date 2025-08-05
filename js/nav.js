document.addEventListener('DOMContentLoaded', () => {
  const backButton = document.querySelector('.nav-button.arrow.left');
  const forwardButton = document.querySelector('.nav-button.arrow.right');

  // Désactiver le bouton "précédent" si l'historique est vide
  if (window.history.length <= 1) {
    backButton.classList.add('disabled');
    backButton.disabled = true;
  }

  // Désactiver le bouton "suivant" si pas d'historique suivant
  forwardButton.addEventListener('click', () => {
    if (!window.history.state) {
      forwardButton.classList.add('disabled');
      forwardButton.disabled = true;
    }
  });
});