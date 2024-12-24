function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  var modal = document.getElementById("successModal");
  var form = document.querySelector("form");
  var span = document.getElementsByClassName("close")[0];
  form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    modal.style.display = "block";
  });
  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }