const inputFeilds = {
  ///label:{type,id,placeholder}
  Username: {
    type: "text",
    id: "name",
    placeholder: "Username",
  },
  Email: {
    type: "email",
    id: "email",
    placeholder: "EmailID",
  },
  Password: {
    type: "password",
    id: "password",
    placeholder: "Password",
  },
  "ReType Password": {
    type: "password",
    id: "retype-password",
    placeholder: "Retype-password",
  },
};

const container = document.getElementById("container");

const header = document.createElement("h1");
header.textContent = "Create new account";
container.appendChild(header);

const form = document.createElement("form");
container.appendChild(form);

Object.keys(inputFeilds).forEach((key) => {
  const values = inputFeilds[key];

  const label = document.createElement("label");
  label.innerHTML = key;
  label.setAttribute("for", values.id);
  form.appendChild(label);

  const element = document.createElement("input");
  element.setAttribute("type", values.type);
  element.setAttribute("placeholder", values.placeholder);
  element.setAttribute("id", values.id);
  element.setAttribute("name", values.id);
  element.className = "input-field";
  form.appendChild(element);

  const small = document.createElement("small");
  small.className = "content-error";
  form.appendChild(small);
});

const submit = document.createElement("button");
submit.innerHTML = "Submit"
submit.setAttribute("type", "submit");
submit.addEventListener("click", (event) => {
  event.preventDefault();
  validateInput();
});
form.appendChild(submit);

function validateInput() {
  const inputs = document.querySelectorAll(".input-field");
  inputs.forEach((input, index) => {
    if (input.value.trim() === "") {
      setError(input.name, index);
      input.classList.add("invalid")
      input.classList.remove("valid")
    } else {
      clearError(index);
      input.classList.add("valid")
      input.classList.remove("invalid")

    }
  });

  const password = document.getElementById("password");
  const retypePassword = document.getElementById("retype-password");

  if (password.value !== retypePassword.value) {
    setPasswordError(3);
    retypePassword.classList.add("invalid")
    retypePassword.classList.remove("valid")
  } else if (password.value && retypePassword.value) {
    clearError(3);
    retypePassword.classList.add("valid")
    retypePassword.classList.remove("invalid")
    password.classList.add("valid")
    password.classList.remove("invalid")
    
  }
}

function setError(content, i) {
  const errorTags = document.querySelectorAll(".content-error");
  if (errorTags[i]) {
    errorTags[i].textContent = `${content} cannot be empty`;
  }
}
function setPasswordError(i) {
  const errorTags = document.querySelectorAll(".content-error");
  if (errorTags[i]) {
    errorTags[i].textContent = "Passwords no do match";
  }
}

function clearError(i) {
  const errorTags = document.querySelectorAll(".content-error");
  if (errorTags[i]) {
    errorTags[i].textContent = "";
  }
}
