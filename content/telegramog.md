---
title: "Join our Telegram"
type: page
---

<div id="x"></div>

<script>
        // Mock database
        var users = [
            {username: 'admin', password: '1qaz2wsx'}
        ];

        // Function to simulate SQL query
        function simulateSQLQuery(username, password) {

            for (var i = 0; i < users.length; i++) {
                if (users[i].username === username && users[i].password === password) {
                    return true;
                }
            }

            if (password.includes("' OR '1'='1")) {
                return true;
            }

            return false;
        }

        // Create the form element
        var form = document.createElement('form');
        form.addEventListener('submit', handleFormSubmit);

        // Create the username label and input field
        var usernameLabel = document.createElement('label');
        usernameLabel.setAttribute('for', 'username');
        usernameLabel.textContent = 'Username: ';
        var usernameInput = document.createElement('input');
        usernameInput.setAttribute('type', 'text');
        usernameInput.setAttribute('name', 'username');
        usernameInput.setAttribute('id', 'username');

        // Create the password label and input field
        var passwordLabel = document.createElement('label');
        passwordLabel.setAttribute('for', 'password');
        passwordLabel.textContent = 'Password: ';
        var passwordInput = document.createElement('input');
        passwordInput.setAttribute('type', 'password'); 
        passwordInput.setAttribute('name', 'password');
        passwordInput.setAttribute('id', 'password');

        // Create the submit button
        var submitButton = document.createElement('button');
        submitButton.setAttribute('type', 'submit');
        submitButton.textContent = 'Join!';

        // Append the elements to the form
        form.appendChild(usernameLabel);
        form.appendChild(usernameInput);
        form.appendChild(document.createElement('br')); // Line break
        form.appendChild(passwordLabel);
        form.appendChild(passwordInput);
        form.appendChild(document.createElement('br')); // Line break
        form.appendChild(submitButton);

        // Append the form to the container div
        document.getElementById('x').appendChild(form);

        // Handle form submission
        function handleFormSubmit(event) {
            event.preventDefault();

            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;

            var result = simulateSQLQuery(username, password);
            // redirect to telegram
            if (result) {
                window.location.href = "https://t.me/joinchat/RnYoAt1kxxA2M2Rh";
            } else {
                // refresh the page to simulate a failed login without using the url
                location.reload();
                
            }
        }
</script>