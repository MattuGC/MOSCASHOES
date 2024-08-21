function dissolvePopup(popup) {
    popup.style.opacity = 0;
    setTimeout(() => {
        popup.style.display = 'none';
    }, 500); // Match the duration of the opacity transition
  }