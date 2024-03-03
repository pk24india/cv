function submitForm() {
    // You can add more validation or customization here before submitting the form

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Here, you can send the form data to your backend or handle it as needed
    // For simplicity, we'll just log the values for now
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);

    // Optionally, you can clear the form fields after submission
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';

    alert('Form submitted successfully! I will get in touch with you soon.');
}
