// Telegram form validation script

// Cloudflare Worker URL for validating the turnstile token and providing secure redirection
const VALIDATION_ENDPOINT = "https://captcha.lonelyhackers.club";

// Elements
let form;
let submitButton;
let errorMessage;
let successMessage;
let turnstileResponse = null;

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  form = document.getElementById("telegram-form");
  submitButton = document.getElementById("submit-button");
  errorMessage = document.getElementById("error-message");
  successMessage = document.getElementById("success-message");

  // Add form submission handler
  form.addEventListener("submit", handleFormSubmit);
});

// Turnstile callback function
function turnstileCallback(token) {
  turnstileResponse = token;
  submitButton.disabled = false;
}

// Handle form submission
async function handleFormSubmit(event) {
  event.preventDefault();
  
  // Hide any previous messages
  errorMessage.style.display = "none";
  successMessage.style.display = "none";
  
  // Validate turnstile response
  if (!turnstileResponse) {
    showError("Please complete the Cloudflare Turnstile challenge.");
    return;
  }
  
  // Disable submit button during validation
  submitButton.disabled = true;
  submitButton.textContent = "Verifying...";
  
  try {
    // Send token to Cloudflare Worker for validation
    const response = await fetch(VALIDATION_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: turnstileResponse,
      }),
    });
    
    const data = await response.json();
    
    if (data.success) {
      // Show success message
      successMessage.style.display = "block";
      
      // Redirect to the URL provided by the server after a short delay
      setTimeout(() => {
        if (data.redirectUrl) {
          window.location.href = data.redirectUrl;
        } else {
          showError("Redirect URL not provided by server.");
          submitButton.disabled = false;
          submitButton.textContent = "Join Telegram Group";
        }
      }, 2000);
    } else {
      showError(data.error || "Verification failed. Please try again.");
      submitButton.disabled = false;
      submitButton.textContent = "Join Telegram Group";
    }
  } catch (error) {
    showError("An error occurred. Please try again later.");
    console.error("Validation error:", error);
    submitButton.disabled = false;
    submitButton.textContent = "Join Telegram Group";
  }
}

// Show error message
function showError(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
}