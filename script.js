let alertContainer;
let mailinglist = [];

window.onload = () => {
    let email = document.getElementById("emailsubmit");
    if(email !== null)
        email.addEventListener('click', HandleEmail);

    alertContainer = document.querySelector("[data-alert-container]");
}

function HandleEmail(e)
{
    let email = document.getElementById("email").value;
    if(validateEmail(email))
    {
        showAlert("Your email is valid! Welcome!", true);

        // Database add would be here
        mailinglist.push(email);
    }
    else 
    {
        showAlert("Your email is invalid! Please try again with a valid email.", false);
    }
}

const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function showAlert(message, valid, duration = 1000) {
    const alert = document.createElement("div");
    alert.textContent = message;
    if(valid)
        alert.classList.add("alert");
    else
        alert.classList.add("alert-red");
    alertContainer.prepend(alert);
    if (duration == null) return;
  
    setTimeout(() => {
      alert.classList.add("hide");
      alert.addEventListener("transitionend", () => {
        alert.remove();
      });
    }, duration);
}