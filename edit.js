const editProfile = document.getElementById("password")
editProfile.addEventListener("submit", (e) => {
    e.preventDefault();
    const newPassword = document.getElementById("newPassword").value;
    const newConfirmPassword = document.getElementById("confirmPassword").value;
    const newMail = document.getElementById("email");
    const newNickname = document.getElementById("nickname");


    localStorage.setItem("pass", newPassword);
    localStorage.setItem("cpass", newConfirmPassword);
    localStorage.setItem("mail", newMail);
    localStorage.setItem("nick", newNickname);


    updateProfile(newPassword, newConfirmPassword);
})

function updateProfile(pass, cpass, mail, nick) {
    document.getElementById("pass").innerText = pass;
    document.getElementById("cpass").innerText = cpass;
    document.getElementById("mail").innerText = mail;
    document.getElementById("nick").innerText = nick;
}
