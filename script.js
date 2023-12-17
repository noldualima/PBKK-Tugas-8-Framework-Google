const scriptURL =
  "https://script.google.com/macros/s/AKfycbxIU0rVWF0gThJoTOasu0ejxPLGQ-7sa82slzQyUAXMjL7qEBAw1Fd5qNJW7cAerBvnWA/exec";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(() => alert("Thank you! your form is submitted successfully."))
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});