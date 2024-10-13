const cl = console.log;

const loginForm = document.getElementById("loginForm");
const email = document.getElementById("email");
const pass = document.getElementById("pass");

const snackBar = (title, icon) => {
    Swal.fire({
        position: "center",
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 1500
      });
}


const verify = (obj) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(obj.email === "pavan887@gmail.com" && obj.pass === "swaraj123"){
                resolve("Logged In Successfully");
            }else{
                reject("Email or Password is Incorrect");
            }
        }, 800);
    })
}



const onLogin = (e) => {
    e.preventDefault();
    let obj = {
        email : email.value,
        password: password.value,
    };

    verify(obj)
            .then(res => {
                snackBar(res, "success")
            })
            .catch(err => {
                snackBar(err, "error");
            })
            .finally (loginForm.reset());
}





loginForm.addEventListener("submit", onLogin);