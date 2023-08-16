//sign up handler if creating new user
const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#user-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      //after they create account redirect wherever we want
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

//event listener for signup button
document.querySelector(".auth-link[data-bs-target='#signupModal']").addEventListener("click", () => {
  const template = document.getElementById("signup-template").innerHTML;
  const compiledTemplate = Handlebars.compile(template);
  const modalBody = document.querySelector("#signupModal .modal-body");
  modalBody.innerHTML = compiledTemplate();
});

document.querySelector("#signup").addEventListener("click", signupFormHandler);