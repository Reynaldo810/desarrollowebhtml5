function Comprobacion() {

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    switch (email) {
        case "reynaldo@email.com":
            if (password === "12345678") {
                alert('Sesion Iniciada');
                window.location = "https://www.youtube.com/";
                return;
            }
            alert('Contraseña incorrecta')
            break;
        case "fabian@email.com":
            if (password === "12345678") {
                alert('Sesion Iniciada');
                window.location = "https://www.youtube.com/";
                return;
            }
            alert('Contraseña incorrecta')
            break;
        case "carlos@email.com":
            if (password === "12345678") {
                alert('Sesion Iniciada');
                window.location = "https://www.youtube.com/";
                return;
            }
            alert('Contraseña incorrecta')
            break;
        case "smith@email.com":
            if (password === "12345678") {
                alert('Sesion Iniciada');
                window.location = "https://www.youtube.com/";
                return;
            }
            alert('Contraseña incorrecta')
            break;

        default:
            alert('El usuario no existe');
            break;
    };
};