function toggleImpressum(event) {
    event.preventDefault();
    const impressum = document.getElementById('impressum-text');
    impressum.classList.toggle('hidden');
  }