const passField = document.getElementById("pass");
const passConfirmField = document.getElementById("passConfirm");
passConfirmField.setCustomValidity("inv");

passConfirmField.addEventListener("keyup", () => {
  if (passField.value == passConfirmField.value)
    passConfirmField.setCustomValidity("");
});
