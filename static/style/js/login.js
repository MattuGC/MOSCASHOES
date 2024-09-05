function checkEmailValue(email) {
    // Expresión regular para validar un correo electrónico
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

const minLegth = 8;
const maxLength = 20;

function passwordConditions(password) {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);
    const hasSpaces = /\s/.test(password);
    
    const longitudValida = password.length >= minLegth && password.length <= maxLength;

    return [hasUpperCase, hasLowerCase, hasNumber, hasSpecialChar, !hasSpaces, longitudValida];
}

function checkPassword(password) {
    const [hasUpperCase, hasLowerCase, hasNumber, hasSpecialChar, hasSpaces, longitudValida] = passwordConditions(password);
  
    return (
      longitudValida &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumber &&
      hasSpecialChar &&
      hasSpaces
    );
}

function setValid(element) {
    element.style.borderColor = getCssVariable('--secundary-color');
    element.style.outlineColor = getCssVariable('--secundary-color');
}

function setInvalid(element) {
    element.style.borderColor = getCssVariable('--pay-attention-color');
    element.style.outlineColor = getCssVariable('--pay-attention-color');
}

// at-least-8-char
// not-more-20-char
// at-least-1-uc
// at-least-1-lc
// at-least-1-number
// at-least-1-special-char
// no-black-space

function validarEmail(email) {
    const regexUserName = /^[a-zA-Z0-9._-]+/;
    const regexAtSymbol = /@/;
    const regexDomain = /[a-zA-Z0-9.-]+/;
    const regexExtention = /\.\s*[a-zA-Z]{2,6}$/;
    const regexNoSpaces = /^\S*$/;

    const hasAt = regexAtSymbol.test(email);
    const hasUserName = regexUserName.test(email.split('@')[0]);
    var hasDomain =  false;
    if(email.includes('@')) {
        hasDomain = regexDomain.test(email.split('@')[1]?.split('.')[0]);
    }
    const hasExtention = regexExtention.test(email);
    const noSpaces = regexNoSpaces.test(email);

    return [hasUserName, hasAt, hasDomain, hasExtention, noSpaces];
}

function loginSignUpUpdatecontextTitle(containerID, inputID) {
    const contextTitle = document.getElementById(containerID);
    
    const input = document.querySelector('#' + inputID);

    const textContent = input.value;

    if(inputID.toLowerCase().includes('email')){
        // console.log('Checking email...');

        const [hasUserName, hasAt, hasDomain, hasExtention, noSpaces] = validarEmail(textContent);
        
        // Updating User Name Check
        const userName = contextTitle.getElementsByClassName('user-name')[0];
        const userNameCheck = userName.getElementsByClassName('user-name-check')[0];
        userNameCheck.setAttribute('data-check', hasUserName);

        // Updating At Check
        const at = contextTitle.getElementsByClassName('arroba')[0];
        const atCheck = at.getElementsByClassName('arroba-check')[0];
        atCheck.setAttribute('data-check', hasAt);
        
        // Updating Domain Check
        const domain = contextTitle.getElementsByClassName('domain')[0];
        const domainCheck = domain.getElementsByClassName('domain-check')[0];
        domainCheck.setAttribute('data-check', hasDomain);

        // Updating Domain Extention Check
        const domainExtention = contextTitle.getElementsByClassName('domain-extention')[0];
        const domainExtentionCheck = domainExtention.getElementsByClassName('domain-extention-check')[0];
        domainExtentionCheck.setAttribute('data-check', hasExtention);

        // Updating Black Spaces Check
        const blankSpaces = contextTitle.getElementsByClassName('no-spaces')[0];
        const blankSpacesCheck = blankSpaces.getElementsByClassName('no-spaces-check')[0];
        blankSpacesCheck.setAttribute('data-check', noSpaces);
    }
    if(inputID.toLowerCase().includes('password')){
        // console.log('Checking password...');

        const [hasUpperCase, hasLowerCase, hasNumber, hasSpecialChar, hasSpaces, longitudValida] = passwordConditions(textContent);

        // Updating User Name Check
        const minMaxChar = contextTitle.getElementsByClassName('min-max-char')[0];
        const minMaxCharCheck = minMaxChar.getElementsByClassName('min-max-char-check')[0];
        minMaxCharCheck.setAttribute('data-check', longitudValida);

        // Updating Upper Case Check
        const upperCase = contextTitle.getElementsByClassName('upper-case')[0];
        const upperCaseCheck = upperCase.getElementsByClassName('upper-case-check')[0];
        upperCaseCheck.setAttribute('data-check', hasUpperCase);

        // Updating Lower Case Check
        const lowerCase = contextTitle.getElementsByClassName('lower-case')[0];
        const lowerCaseCheck = lowerCase.getElementsByClassName('lower-case-check')[0];
        lowerCaseCheck.setAttribute('data-check', hasLowerCase);

        // Updating Lower Case Check
        const number = contextTitle.getElementsByClassName('number')[0];
        const numberCheck = number.getElementsByClassName('number-check')[0];
        numberCheck.setAttribute('data-check', hasNumber);

        // Updating Special Char Check
        const specialChar = contextTitle.getElementsByClassName('special-char')[0];
        const specialCharCheck = specialChar.getElementsByClassName('special-char-check')[0];
        specialCharCheck.setAttribute('data-check', hasSpecialChar);

        // Updating Spaces Check
        const spaces = contextTitle.getElementsByClassName('spaces')[0];
        const spacesCheck = spaces.getElementsByClassName('spaces-check')[0];
        spacesCheck.setAttribute('data-check', hasSpaces);
    }
}

// Listners
// --------

const logInButton = document.getElementById('login-button');
logInButton.addEventListener('click', function() {
    const loginEmail = document.getElementById('loginEmail');
    const loginEmailValue =  loginEmail.value;
    
    const loginPassword = document.getElementById('loginPassword');
    const loginPasswordValue =  loginPassword.value;
    
    var userEmail = false;
    var userPassword = false;

    const loginRequirements = document.getElementById('requirements');
    if (checkEmailValue(loginEmailValue)) {
        setValid(loginEmail);
        userEmail = true;
        // loginRequirements.style.opacity = 0;
    } else {
        setInvalid(loginEmail);
        // loginRequirements.style.opacity = 1;
    }
    
    if (checkPassword(loginPasswordValue)) {
        setValid(loginPassword);
        userPassword = true;
    } else {
        setInvalid(loginPassword);
        // loginRequirements.style.opacity = 1;
    }

    if (userEmail && userPassword) {
        loginRequirements.style.opacity = 0;
        logIn(loginEmailValue, loginPasswordValue);
    } else {
        loginRequirements.style.opacity = 1;
    }
});

const signUpButton = document.getElementById('sign-up-button');
signUpButton.addEventListener('click', function() {
    const signUpEmail = document.getElementById('signupEmail');
    const signUpEmailValue =  signUpEmail.value;
    var error = false;
    
    const signUpRequirements = document.getElementById('requirements');
    if (checkEmailValue(signUpEmailValue)) {
        setValid(signUpEmail);
        signUpRequirements.style.opacity = 0;
    } else {
        setInvalid(signUpEmail);
        signUpRequirements.style.opacity = 1;
        error = true;
    }
    
    const signUpPassword = document.getElementById('signupPassword');
    const signUpPasswordValue =  signUpPassword.value;
    
    if (checkPassword(signUpPasswordValue)) {
        setValid(signUpPassword);
        if(!error) {
            signUpRequirements.style.opacity = 0;
        }
    } else {
        setInvalid(signUpPassword);
        signUpRequirements.style.opacity = 1;
    }
});

