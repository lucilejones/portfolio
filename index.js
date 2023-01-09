const form = document.contactForm

form.addEventListener("submit", submitForm)

function submitForm(e) {
    e.preventDefault()
    
    let senderName = form.Name
    let email = form.Email
    let message = form.Message

    const params = {
        from_name : senderName.value,
        email_id : email.value,
        message : message.value
    }
    
    //using emailjs to send messages from contact form
    emailjs.send("service_gilxx9n", "template_hmihjsy", params)
    .then(function() {
        console.log(params.from_name, params.email_id, params.message, "test")
        alert("Email sent successfully!")
        clearForm()
    }, function(error) {
        console.log('FAILED...', error);
        alert("Email failed to send!")
    })

    // clear inputs after submission
    function clearForm() {
        senderName.value = "",
        email.value = "",
        message.value = ""
    }
}