  let currentStep = 0;
  
  function nextStep() {
    if (currentStep < storySteps.length - 1) {
      currentStep++;
      updateStory();
    } else {
      // Jika sudah mencapai langkah terakhir, pindah ke halaman kedua.html
      window.location.href = 'kedua.html';
    }
  }
  
  function prevStep() {
    if (currentStep > 0) {
      currentStep--;
      updateStory();
    } else {
      // Jika sudah berada di langkah pertama, kembali ke index.html
      window.location.href = 'index.html';
    }
  }
  
  function updateStory() {
    const storyContainer = document.getElementById("story-container");
    const storyText = document.getElementById("story-text");
  
    // Terapkan animasi fade-out sebelum mengganti langkah cerita
    storyContainer.style.animation = "fadeOut 0.5s ease-in-out forwards";
  
    setTimeout(() => {
      storyText.textContent = storySteps[currentStep];
      // Setelah mengganti langkah cerita, terapkan animasi fade-in
      storyContainer.style.animation = "fadeIn 0.5s ease-in-out forwards";
    }, 500);
  }

  // Tambahkan fungsi untuk kembali ke langkah sebelumnya
function prevStep() {
    if (currentStep > 0) {
      currentStep--;
      updateStory();
    }
  }
  
  // Modifikasi fungsi updateStory untuk menangani animasi fade pada kedua tombol "Next" dan "Back"
  function updateStory() {
    const storyContainer = document.getElementById("story-container");
    const storyText = document.getElementById("story-text");
  
    // Terapkan animasi fade-out dengan transisi yang berbeda untuk tombol "Next" dan "Back"
    storyContainer.style.animation = currentStep > 0 ? "fadeOutLeft 0.5s ease-in-out forwards" : "fadeOutRight 0.5s ease-in-out forwards";
  
    setTimeout(() => {
      storyText.textContent = storySteps[currentStep];
      // Setelah mengganti langkah cerita, terapkan animasi fade-in dengan transisi yang berbeda
      storyContainer.style.animation = currentStep > 0 ? "fadeInLeft 0.5s ease-in-out forwards" : "fadeInRight 0.5s ease-in-out forwards";
    }, 500);
  }

  
  
  
  