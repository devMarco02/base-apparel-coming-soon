const form = document.querySelector("#form");
const email = document.querySelector("#email");
const formControl = document.querySelector("#form-control");
const emailMessage = document.querySelector("#email-message"); //small element
const mailFormat =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // reset class on submit
  if (
    formControl.classList.contains("hero__form-control--success") ||
    formControl.classList.contains("hero__form-control--error")
  ) {
    formControl.classList.remove("hero__form-control--error");
    formControl.classList.remove("hero__form-control--success");
  }

  checkInput();
});

//===CHECK INPUT

const checkInput = () => {
  const emailValue = email.value.trim();

  if (emailValue === "") {
    setError("Email cannot be blank");
  } else if (!emailValue.match(mailFormat)) {
    setError("Please provide a valid email");
  } else {
    setSuccess();
  }
};

//===ERROR

const setError = (message) => {
  formControl.classList.add("hero__form-control--error");
  emailMessage.innerText = message;
  email.focus();
};

//===SUCCESS

const setSuccess = () => {
  formControl.classList.add("hero__form-control--success");
  emailMessage.innerText = "Success";
  email.focus();
  email.value = "";
};

// reset message when typing

email.oninput = () => {
  formControl.classList.remove("hero__form-control--error");
  formControl.classList.remove("hero__form-control--success");
};
