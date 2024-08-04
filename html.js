document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Form को सबमिट होने से रोकें

    // फ़ॉर्म डेटा को कैप्चर करें
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;

    // डेटा को कंसोल में लॉग करें
    console.log('Username:', username);
    console.log('Email:', email);

    // डेटा को वेलिडेट करें
    if (validateForm(username, email)) {
        alert('Form submitted successfully!');
    } else {
        alert('Please fill out all fields correctly.');
    }
});

// फ़ॉर्म वेलिडेशन के लिए फ़ंक्शन
function validateForm(username, email) {
    if (username.trim() === '' || email.trim() === '') {
        return false;
    }
    return true;
}