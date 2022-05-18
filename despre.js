window.onload = function () {
  function greet_user() {
    var elements = document.getElementsByClassName('name-field');
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = 'none';
    }
    let p = document.getElementById("welcome-area");
    let text = document.createElement("p");
    text.textContent = "Bună " + localStorage.name + ", bine ai venit!";
    text.setAttribute("id", "welcome-text");
    p.style.display = "block";
    p.appendChild(text);
  }
  document.getElementById("submit-name").onclick = function () {
    var name = document.getElementById("name-user").value;
    if (!name) {
      alert("Vă rog introduceți un nume");
    }
    else {
      localStorage.setItem("name", name);
      greet_user();
      let p = document.getElementById("welcome-area");
      const timeout=setTimeout(()=>{p.remove()}, 6000);
    }
    document.getElementById("name-user").value = ""; 
  }
}
