document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const closeBtn = document.getElementsByClassName('close')[0];
    const photos = document.getElementsByClassName('photo');
  
    function openModal(photoSrc) {
      modalContent.src = photoSrc;
      modal.style.display = 'block';
    }
  
    function closeModal() {
      modal.style.display = 'none';
    }
  
    for (let i = 0; i < photos.length; i++) {
      photos[i].addEventListener('click', function () {
        const photoSrc = this.querySelector('img').src;
        openModal(photoSrc);
      });
    }
  
    closeBtn.addEventListener('click', closeModal);
  
    window.addEventListener('click', function (event) {
      if (event.target === modal) {
        closeModal();
      }
    });
  });
  