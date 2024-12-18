// Initialize EmailJS
(function() {
    emailjs.init("3q8e_ADO66wDU4wc3"); // Replace with your EmailJS user ID
  })();
  
  // Attach event listener to the form submission
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission (page reload)
  
    // Collect form data
    const name = document.getElementById('contact-name').value;
    const phone = document.getElementById('contact-phone').value;
    const email = document.getElementById('contact-email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('contact-message').value;
  
    // Prepare the template parameters
    const templateParams = {
      from_name: name,
      phone_number: phone,
      user_email: email,
      subject: subject,
      message: message,
    };
  
    // Send the email using EmailJS
    emailjs.send('service_7fasm61', 'template_2fxd2xs', templateParams)
      .then(function(response) {
        alert('Message sent successfully!', response);
      }, function(error) {
        alert('Error: Failed to send message, please try again.', error);
      });
  });
  