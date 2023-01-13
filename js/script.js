function goToHome() {
    const homePage = document.getElementById("homepage");
    homePage.scrollIntoView();
}

function goToCafe() {
    const cafePage = document.getElementById("cafePage");
    cafePage.scrollIntoView();
}

function goToNotebook() {
    const notebookPage = document.getElementById("notebookPage");
    notebookPage.scrollIntoView();
}

function goToGallery() {
    const galleryPage = document.getElementById("galleryPage");
    galleryPage.scrollIntoView();
}

function goToAbout() {
    const aboutPage = document.getElementById("aboutPage");
    aboutPage.scrollIntoView();
}

function goToContact() {
    const contactPage = document.getElementById("contactPage");
    contactPage.scrollIntoView();
}

const firstName = document.getElementById("firstName");
const emailAddress = document.getElementById("emailAddress");
const message = document.getElementById("message");
const submitButton = document.getElementById("submitButton");
const errorSpan = document.getElementById("errorSpan");
const errorSpan2 = document.getElementById("errorSpan2");
const errorSpan3 = document.getElementById("errorSpan3");

const handleSubmit = (e) => {

  if (!firstName.value) {
    event.preventDefault();
    errorSpan.style.display = "inline-block";
    firstName.classList.add("error_field");
  }

  else if (!emailAddress.value) {
    event.preventDefault();
    errorSpan2.style.display = "inline-block";
    emailAddress.classList.add("error_field");
  }

  else if (!message.value) {
    event.preventDefault();
    errorSpan3.style.display = "inline-block";
    message.classList.add("error_field");
  }

  else {
    errorSpan.style.display = "none";
    errorSpan2.style.display = "none";
    errorSpan3.style.display = "none";
    firstName.classList.remove("error_field");
    emailAddress.classList.remove("error_field");
    message.classList.remove("error_field");
    alert ("Your message has been sent!");
  }

}