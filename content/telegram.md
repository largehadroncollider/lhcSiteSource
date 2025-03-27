---
title: "Join our Telegram"
type: page
menu:
  main:
    name: Telegram
    weight: 20
---

<div class="telegram-join-container">
  <p>To join our Telegram group, please complete the verification below.</p>
  
  <form id="telegram-form" class="telegram-form">
  <div class="form-group">
    <div
      class="cf-turnstile"
      data-sitekey="0x4AAAAAABCICC2i_PBR3jc2"
      data-callback="turnstileCallback"
    ></div>
  </div>
  <div class="form-group">
    <button type="submit" id="submit-button" class="btn btn-primary" disabled>
      Join Telegram Group
    </button>
  </div>
  
  <div id="error-message" class="alert alert-danger" style="display: none;"></div>
  <div id="success-message" class="alert alert-success" style="display: none;">
    Verification successful! Redirecting to Telegram...
  </div>
  </form>
</div>

<style>
.telegram-join-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.telegram-join-container p {
  color: black;
}

.telegram-form {
  margin-top: 20px;
}

.form-group {
  margin-bottom: 20px;
}

/* .btn-primary {
  background-color: #0088cc;
  border-color: #0088cc;
}

.btn-primary:hover {
  background-color: #006699;
  border-color: #006699;
}

.btn-primary:disabled {
  background-color: #cccccc;
  border-color: #cccccc;
} */

.alert-success{
  background-color: lightgreen;
  color: black;
}

.alert-danger{
  background-color: crimson;
  color: black;
}
</style>

<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
<script src="/telegram-validation.js" defer></script>