document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registration-form");
     form.addEventListener("submit", function(event) {
        event.preventDefault();
        const feedbackDiv = document.getElementById("form-feedback");
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        feedbackDiv.innerHTML = "";

        //validation logic
        let isValid = true;
        const messages = [];

        //usename validation
        if(username.length < 3){
            messages.push("User name must be more than 3 characters!");
            isValid = false;
        }

        //email validation
        if(!email.includes("@") || !email.includes(".")){
            messages.push("Enter a valid email!");
            isValid = false;
        }
        

        //password validation
        if(password.length < 8){
            messages.push("Password must be atleast 8 characters!")
            isValid = false;
        }

        //checking form validity
        
        if(!isValid){
            feedbackDiv.style.display = "block"; 
            const allErrors =  messages.join("<br>");
            feedbackDiv.innerHTML = allErrors;
            feedbackDiv.style.color = "#dc3545";    
        }else{
            feedbackDiv.style.display = "block";
            feedbackDiv.textContent = "Registration successful";
            feedbackDiv.style.color = "#28a745";
            form.reset();
        }

     })
})

