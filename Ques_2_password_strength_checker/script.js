let password = document.getElementById("password");
let strengthBar = document.getElementById("strength-bar");
let strengthText = document.getElementById("strength-text");


password.addEventListener("input", function () {
    let pass = password.value;
    let strength = 0;

   
    if (pass.match(/[a-z]/)) strength++;     
    if (pass.match(/[A-Z]/)) strength++;     
    if (pass.match(/[0-9]/)) strength++;     
    if (pass.match(/[^a-zA-Z0-9]/)) strength++; 
    if (pass.length >= 8) strength++;        

  
    if (strength === 0) {
        strengthBar.style.width = "0%";
        strengthBar.style.background = "red";
        strengthText.innerHTML = "Strength: Very Weak";
    }
    else if (strength === 1 || strength === 2) {
        strengthBar.style.width = "30%";
        strengthBar.style.background = "orange";
        strengthText.innerHTML = "Strength: Weak";
    }
    else if (strength === 3) {
        strengthBar.style.width = "60%";
        strengthBar.style.background = "gold";
        strengthText.innerHTML = "Strength: Medium";
    }
    else if (strength === 4) {
        strengthBar.style.width = "80%";
        strengthBar.style.background = "blue";
        strengthText.innerHTML = "Strength: Strong";
    }
    else {
        strengthBar.style.width = "100%";
        strengthBar.style.background = "green";
        strengthText.innerHTML = "Strength: Very Strong";
    }
});
