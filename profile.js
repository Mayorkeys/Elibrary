const uploadPicture = document.getElementById("upload-picture");
const profilePicture = document.getElementById("profile-picture");
const upload = document.querySelector(".upload");

upload.addEventListener("click", () => {
    uploadPicture.click();
});

uploadPicture.addEventListener("change", (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
        profilePicture.src = reader.result;
    };

    reader.readAsDataURL(file);
})