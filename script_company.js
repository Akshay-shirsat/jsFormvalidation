function validateCompanyDetails() {
    var companyName = document.getElementById('companyName').value;
    var industry = document.getElementById('industry').value;
    var location = document.getElementById('location').value;
    var employeeCount = document.getElementById('employeeCount').value;

    if (companyName.trim() === '') {
        alert('Please enter the Company Name.');
        return;
    }

    if (industry.trim() === '') {
        alert('Please enter the Industry.');
        return;
    }

    if (location.trim() === '') {
        alert('Please enter the Location.');
        return;
    }

    if (employeeCount.trim() === '' || isNaN(employeeCount) || parseInt(employeeCount) < 1) {
        alert('Please enter a valid Employee Count (a positive number).');
        return;
    }

    alert('Form submitted successfully!');
}
