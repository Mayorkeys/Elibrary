const uploadPicture = document.getElementById("upload-picture");
const upload = document.querySelector(".upload");


if (localStorage.getItem("uploadPicture")) {
  uploadPicture.src = localStorage.getItem("uploadPicture"); 
}


upload.addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
          const file = e.target.files[0];
          const reader = new FileReader();
         
          reader.onload = () => {
              uploadPicture.src = reader.result;
              localStorage.setItem("uploadPicture", reader.result);
          };

          reader.readAsDataURL(file);
        };
        input.click();
          
          });
      
