
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
     
    /*const loginPage = document.getElementById("login-page")
    loginPage.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = getElementById("email").value;
      const password = getElementById("password").value;

      if(email && password) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        window.location.href = "main.html";
      } else {
        alert("Please enter both email and password");
      }
    })*/