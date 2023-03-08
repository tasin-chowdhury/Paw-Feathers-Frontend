function userLogin() {
    const emailaddress = document.getElementById('emailaddress')
    const password = document.getElementById('password')

    var settings = {
        "url": "http://localhost:3000/v1/auth/login",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "accept": "application/json",
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "email": emailaddress.value,
            "password": password.value
        }),
        success: function (result) {

            window.location = 'index.html'

        },
        error: function () {
            alert("Wrong credentials!")
        }
    };

    $.ajax(settings).done(function (response) {

    });
}
