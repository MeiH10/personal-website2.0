// Get the current page URL
var currentPageURL = window.location.href;

// Function to manage active and deactivate states of navigation bar buttons
function manageNavButtons() {
  // Get all the navigation bar buttons
  var navButtons = document.getElementsByClassName("nav-btn");

  // Loop through each button and check if its href matches the current page URL
  for (var i = 0; i < navButtons.length; i++) {
    var button = navButtons[i];
    var buttonURL = button.href;

    if (buttonURL === currentPageURL) {
      // Set the active class to the button if its href matches the current page URL
      button.classList.add("active-btn");
      button.classList.remove("deactivate-btn");
    } else {
      // Set the deactivate class to the button if its href does not match the current page URL
      button.classList.add("deactivate-btn");
      button.classList.remove("active-btn");
    }
  }
}

// Call the function when the page finishes loading
window.addEventListener("load", manageNavButtons);
