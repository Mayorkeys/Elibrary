
     function togglePassword(inputId, eyeId) {
      
      const input = document.getElementById(inputId);
      const eye = document.getElementById(eyeId);

      if (input.type === 'password') {
        input.type = 'text';
        eye.textContent = '👁️‍🗨️';
      } else {
        input.type = 'password';
        eye.textContent = '👁️';
      }
    }