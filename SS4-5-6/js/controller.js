const controller = {}

controller.register = (data) => {
  if (data.firstName.trim() === "") {
    document.getElementById("first-name-error").
      innerText = "*Please input first name";
  }
  else {
    document.getElementById("first-name-error").
      innerText = "";
  }

  if (data.lastName.trim() === "") {
    document.getElementById("last-name-error").
      innerText = "*Please input last name";
  }
  else {
    document.getElementById("last-name-error").
      innerText = "";
  }

  if (data.email.trim() === "") {
    document.getElementById("email-error").innerText = "*Please input email";
  }
  else {
    document.getElementById("email-error").innerText = "";
  }

  if (data.password.trim() === "") {
    document.getElementById("password-error").innerText = "*Please input password";
  }
  else {
    document.getElementById("password-error").innerText = "";
  }

  if (data.confirmPassword.trim() === "") {
    document.getElementById("confirm-password-error").innerText = "*Please input confirm password";
  }
  else {
    document.getElementById("confirm-password-error").innerText = "";
  }
}