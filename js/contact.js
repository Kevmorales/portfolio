const submitBtn = document.getElementById('submit_contact');

const validate = (e) => {
  e.preventDefault();
  const emailAddress = document.getElementById('email');
  const subject = document.getElementById('subject');
    
  if (emailAddress.value === "") {
    alert("Please enter your email address.");
    emailAddress.focus();
    return false;
  }

  if (!emailIsValid(emailAddress.value)) {
    alert("Please enter a valid email address.");
    emailAddress.focus();
    return false;
  }

  if (subject.value === "") {
    alert("Please state your subject.");
    subject.focus();
    return false;
  }
  
  return true; // Can submit the form data to the server
}

const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener('click', validate);