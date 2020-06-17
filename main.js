const inquiryForm = document.querySelector("#inquiryForm");
const nameInput = document.querySelector("#name");
const companyInput = document.querySelector("#company");
const emailInput = document.querySelector("#email");
const contaceNumberInput = document.querySelector("#contaceNumber");
const messageInput = document.querySelector("#message");
var error = document.querySelector(".error");
var submitted = document.querySelector(".submitted");

inquiryForm.addEventListener("submit", onsubmit);
function onsubmit(e) {
  e.preventDefault();
  if (
    nameInput.value === "" ||
    emailInput.value === "" ||
    messageInput.value === ""
  ) {
    error.innerHTML = "please fill in all * fields";
    setTimeout(() => (error.innerHTML = ""), 3000);
  } else {
    nameInput.value = "";
    companyInput.value = "";
    emailInput.value = "";
    contaceNumberInput.value = "";
    messageInput.value = "";
    submitted.innerHTML = "You inquiry is submitted ";
    setTimeout(() => (submitted.innerHTML = ""), 3000);
  }
}
