function toggleNavigationLinks() {
  try {
    const x = document.getElementById("myLinks");
    if (!x) throw new Error("Element with ID 'myLinks' not found.");
    
    x.style.display = x.style.display === "block" ? "none" : "block";
  } catch (error) {
    console.error("Error toggling navigation links: ", error.message);
    alert("An error occurred while toggling the navigation links. Please try again.");
  }
}

function closeNavigationLinks() {
  const x = document.getElementById("myLinks");
  if (x) {
    x.style.display = "none";
  }
}
// Form validation function (Simplified)
function validateForm() {
  try {
    const firstName = document.getElementById("fname").value.trim();
    const lastName = document.getElementById("lname").value.trim();
    const letterRegex = /^[A-Za-z]+$/;

    if (!letterRegex.test(firstName)) {
      alert("First Name should only contain letters.");
      return false;  // Prevent form submission
    }

    if (!letterRegex.test(lastName)) {
      alert("Last Name should only contain letters.");
      return false;  // Prevent form submission
    }

    // If validation passes, show success modal
    showSuccessModal();
    return false;  // Prevent form submission to show the modal

  } catch (error) {
    console.error("Form validation error: ", error.message);
    alert("An error occurred during form validation. Please try again.");
    return false;  // Prevent form submission
  }
}

// Show success modal (Simplified)
function showSuccessModal() {
  try {
    const modal = document.getElementById("successModal");
    if (modal) {
      modal.style.display = "block";  // Show modal
    } else {
      throw new Error("Modal element not found.");
    }
  } catch (error) {
    console.error("Error displaying the modal: ", error.message);
    alert("An error occurred while displaying the success message. Please try again.");
  }
}

// Close the modal when clicked on the close button
document.querySelector(".close").onclick = function() {
  document.getElementById("successModal").style.display = "none";
}

// Close the modal if clicked outside of it
window.onclick = function(event) {
  const modal = document.getElementById("successModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}