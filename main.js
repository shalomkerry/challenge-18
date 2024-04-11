let form = document.getElementById("form");
let emailInput = document.querySelector("#input_email");
let errorMes = document.querySelector(".error-message");
let erroIcon = document.querySelector(".icon-error");
form.required = "false";
const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
let check = regex.test(emailInput.value);

console.log(check);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  check = regex.test(emailInput.value);
  if (check) {
    erroIcon.classList.remove("icon-error-show");
    errorMes.innerHTML = "Email Has been sent";
    errorMes.classList.add("go");
    errorMes.style.animation = "none";
    setTimeout(() => {
      emailInput.value = "";
      window.location.reload();
    }, 2000);
  } else {
    errorMes.innerHTML = "Please enter a valid email";
    erroIcon.classList.add("icon-error-show");
    console.log(emailInput.value);
  }
});
