const refs = {
  form: document.querySelector("form.login-form"),
};

const onSubmit = (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    event.preventDefault();
    window.alert("Please fill in all the fields!");
  }
  const newObj = {
    email: email.value,
    password: password.value,
  };
  console.log(newObj);

  event.currentTarget.reset();
};

refs.form.addEventListener("submit", onSubmit);
