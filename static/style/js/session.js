function handleLogin(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Aquí puedes añadir la lógica para autenticar al usuario, por ejemplo, enviando los datos a tu servidor
    console.log('Email:', email);
    console.log('Password:', password);
}

function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());

    // Aquí puedes enviar la información del usuario a tu servidor
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}

function handleLogin(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Aquí puedes añadir la lógica para autenticar al usuario, por ejemplo, enviando los datos a tu servidor
    console.log('Login Email:', email);
    console.log('Login Password:', password);
}

function handleSignup(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Aquí puedes añadir la lógica para crear un nuevo usuario, por ejemplo, enviando los datos a tu servidor
    console.log('Signup Email:', email);
    console.log('Signup Password:', password);
}
