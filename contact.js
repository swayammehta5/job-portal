function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    console.log('Form submitted:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    document.getElementById('contactUsForm').reset();
}
