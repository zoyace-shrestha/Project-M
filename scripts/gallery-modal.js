// Image Modal functionality for photography gallery
document.addEventListener('DOMContentLoaded', function() {
  // Get the modal elements
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const closeBtn = document.querySelector('.image-modal-close');
  
  // Get all gallery images
  const galleryImages = document.querySelectorAll('.gallery img');
  
  // Add click event to each gallery image
  galleryImages.forEach(function(img) {
    img.addEventListener('click', function() {
      modal.classList.add('show');
      modalImg.src = this.src;
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
  });
  
  // Close modal when close button is clicked
  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      modal.classList.remove('show');
      document.body.style.overflow = ''; // Restore scrolling
    });
  }
  
  // Close modal when clicking outside the image
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.classList.remove('show');
      document.body.style.overflow = ''; // Restore scrolling
    }
  });
  
  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
      modal.classList.remove('show');
      document.body.style.overflow = ''; // Restore scrolling
    }
  });
});

