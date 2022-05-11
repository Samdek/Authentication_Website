var objPeople = [
    {
        username: "Olhighjay",
        password: "coding"
    },
    {
        username: "Samuel",
        password: "mayowa"
    }
]

//login functionality
function login() {
    //retrieve data input from the form
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value


    //loop through all the user and confirm the username and password are correct
    for(i = 0; i < objPeople.length; i++) {
        if(username == objPeople[i].username && password == objPeople[i].password) {
            alert(username + " is logged in!!!")
            return
        }
    }

    //error message if not correct
    alert("Incorrect username or password")
}


function registerUser() {
    var registerUser = document.getElementById("signupUsername").value
    var registerPassword = document.getElementById("signupPassword").value

    var newUser = {
        username: registerUser,
        password: registerPassword
    }

    for(i = 0; i < objPeople.length; i++) {
        if(registerUser == objPeople[i].username) {
            alert("the username is already taken!!")
            return
        } else if(registerUser.length < 5) {
            alert("username must up to 5 characters!!")
            return
        } else if(registerPassword.length < 6) {
            alert("the password is too short, include 6 or more characters!")
            return
        } 
    }

    objPeople.push(newUser)
    alert(`Registration successful, your username is ${newUser.username} and your password is ${newUser.password}. Login to continue!`)
}


document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        createAccountForm.classList.remove("form-hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form-hidden");
        createAccountForm.classList.add("form-hidden");
    });
});