document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        const username = document.getElementById('username').value;
        alert(`Login successful! Welcome, ${username}.`);
        // Optionally, you can submit the form programmatically if needed
        // this.submit();
    });
});