const url = "http://localhost:3000"
const form = document.getElementById('signupForm')
if (form) {
    form.addEventListener("submit", (e) => {
        // alert("Testing again")
        e.preventDefault()
        userSignup()
    })
}

const userSignup = () => {
    const fullnames = document.getElementById('signup-name').value
    const username = document.getElementById('signup-username').value
    const email = document.getElementById('signup-email').value
    const password = document.getElementById('signup-password').value

    console.log(`${fullnames} and ${email} are right here`)
}

// userSignup()
