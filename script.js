function validatePersonalInfo() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var phone = document.getElementById('phone').value;
    var gender = document.getElementById('gender').value;
    var email = document.getElementById('email').value;

    if (firstName.trim() === '') {
        alert('Please enter your First Name.');
        return;
    }

    if (lastName.trim() === '') {
        alert('Please enter your Last Name.');
        return;
    }

    if (phone.trim() === '' || !/^[0-9]{10}$/.test(phone)) {
        alert('Please enter a valid 10-digit Phone Number.');
        return;
    }

    if (gender === '') {
        alert('Please select your Gender.');
        return;
    }

    if (email.trim() === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Please enter a valid Email address.');
        return;
    }

    window.location.href = 'company_details.html';
}
