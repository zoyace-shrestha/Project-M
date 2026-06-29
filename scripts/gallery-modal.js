document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const closeBtn = document.querySelector('.image-modal-close');
  const prevBtn = document.querySelector('.image-modal-prev');
  const nextBtn = document.querySelector('.image-modal-next');

  if (!modal || !modalImg) return;

  const galleryImages = Array.from(document.querySelectorAll('.gallery img'));
  let currentIndex = 0;

  function showImage(index) {
    if (!galleryImages.length) return;

    currentIndex = (index + galleryImages.length) % galleryImages.length;
    const img = galleryImages[currentIndex];
    modalImg.src = img.src;
    modalImg.alt = img.alt || 'Gallery image';
  }

  function openModal(index) {
    showImage(index);
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  galleryImages.forEach(function (img, index) {
    img.addEventListener('click', function () {
      openModal(index);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      showImage(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      showImage(currentIndex + 1);
    });
  }

  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (!modal.classList.contains('show')) return;

    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowLeft') {
      showImage(currentIndex - 1);
    } else if (e.key === 'ArrowRight') {
      showImage(currentIndex + 1);
    }
  });
});
