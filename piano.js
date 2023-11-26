var totalKeys = document.querySelectorAll(".keys").length;
for (var i = 0; i < totalKeys; i++) {
  document
    .getElementsByClassName("keys")
    [i].addEventListener("click", function () {
      var currKey = this.getAttribute("name");
      var keySound = new Audio(`sounds/${currKey}.mp3`);
      keySound.play();
      this.classList.add("pressed");
      setTimeout(() => {
        this.classList.remove("pressed");
      }, 200);
      
    });
    
}



    

