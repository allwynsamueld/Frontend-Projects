let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  password = id("password"),
  confirmpassword = id("confirmpassword"),
  form = id("form"),
  Strength = id("StrengthDisp"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  input(username, 0, "Username cannot be blank");
  input(email, 1, "Email cannot be blank");
  input(password, 2, "Password cannot be blank");
  input(confirmpassword, 3, "Confirm Password cannot be blank");
  this.Validate();
  this.StrengthChecker();
});

let input = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};

function Validate() {
  var Password = password.value;
  var ConfirmPassword = confirmpassword.value;
  if (Password != ConfirmPassword) {
    alert("Passwords do not match.");
    return false;
  }
  return true;
}
