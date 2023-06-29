function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message");

  // Check that the first name and last name fields are filled
  if (name === "" || email === "" || message === "") {
    return false;
  }

  return true;
}

function sendEmail() {
  if (validateForm()) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.querySelectorId("subject").value;
    let message = document.querySelectorId("message").value;
    let body = "Name: " + name + "<br>" +
               "Message: " + message + "<br>" 
               ;

    Email.send({
      SecureToken: "a7380de7-a3c9-43b3-85ae-eb19aa7b828b",
      To: "sanfranciscohopeproject@gmail.com",
      From: email,
      Subject: subject,
      Body: body,
    }).then(name = "", email = "", subject = "", message = "");
  }
}