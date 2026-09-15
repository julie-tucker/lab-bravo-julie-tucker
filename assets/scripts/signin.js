console.log("in sign in js");

const signinBtn = document.querySelector('#signin-btn');
const passBox = document.querySelector('#pass-box');
const hardCodePass = 'lasagna';

signinBtn.addEventListener('click', function() {
    console.log("passbox value", passBox.value);
    const userPass = passBox.value;
    if(userPass == hardCodePass){
        console.log("signed in");
        sessionStorage.setItem('signedIn', 'true');
        window.location.href = "private.html"
    }else{
        console.log("not signed in");
        document.querySelector('#message').textContent = "try again."
        passBox.value = '';
    }
})