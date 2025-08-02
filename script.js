document.addEventListener("DOMContentLoaded", function () {
    // All script here
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback")


    form.addEventListener("submit", function(event) {
        event.preventDefault();

         const usernameInput = document.getElementById("username");
       const username = usernameInput.value.trim();

       const emailInput = document.getElementById("email");
       const email = emailInput.value.trim()

        const passwordInput = document.getElementById("password");
       const password = passwordInput.value.trim()

        //Initialize Validation Variables:
       let isValid = true;
       let messages = [];

       //Username Validation:
       if (username.length < 3 ) {
        messages.push("Username should not less than 3 characters");
        isValid = false;
       }

       //Email Validation:
       if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
        messages.push("Please enter a valid email address.");
        isValid = false; 
       }

       //Password Validation:
       if (password.length < 8 ) {
        messages.push("Password must be at least 8 characters.");
        isValid = false 
       } 

       //Feedback Display Logic:
       feedbackDiv.style.display = "block";
        if (isValid) {
          feedbackDiv.textContent = "Registration successful!";
          feedbackDiv.style.color = "#28a745";
        } else {
           feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545"; // Red 
        }
 });
});
