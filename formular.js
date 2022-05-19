window.onload = function () {
    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');
    const h2 = document.querySelector('.header > h2');
  
    form.addEventListener('submit', e => {
      e.preventDefault();
      const areAllValid = checkInputs();
      if (areAllValid === true) {
        console.log(e.target);
        const formData = new FormData(e.target);
        const body = {};

        for (const key of formData.keys()) {
          body[key] = formData.get(key);
        }

        fetch("http://localhost:3000/contact", {
          method: "POST",
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(body)
        });

        form.style.display = "none";
        h2.innerHTML = "Submiterea s-a realizat cu succes!";
      }
    });
  
    function checkInputs() {
      // trim to remove the whitespaces
      const usernameValue = username.value.trim();
      const emailValue = email.value.trim();
      const passwordValue = password.value.trim();
      const password2Value = password2.value.trim();
      let areAllValid = true;
  
      if (usernameValue === '') {
        setErrorFor(username, 'Completati cu un username!');
        areAllValid = false;
      } else {
        setSuccessFor(username);
      }
  
      if (emailValue === '') {
        setErrorFor(email, 'Completati cu un email!');
        areAllValid = false;
      } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email-ul nu este valid!');
        areAllValid = false;
      } else {
        setSuccessFor(email);
      }
  
      if (passwordValue === '') {
        setErrorFor(password, 'Completati cu o parola!');
        areAllValid = false;
      } else {
        setSuccessFor(password);
      }
  
      if (password2Value === '') {
        setErrorFor(password2, 'Completati cu o parola!');
        areAllValid = false;
      } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Parolele nu corespund!');
        areAllValid = false;
      } else {
        setSuccessFor(password2);
      }
      return areAllValid;
    }
    function setErrorFor(input, message) {
      const formControl = input.parentElement;
      const small = formControl.querySelector('small');
      formControl.className = 'form-control error';
      small.innerText = message;
    }
    function setSuccessFor(input) {
      const formControl = input.parentElement;
      formControl.className = 'form-control success';
    }
    function isEmail(email) {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
  }