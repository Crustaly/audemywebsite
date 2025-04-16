const submitForm = () => {
  // Get form data
  const form = document.getElementById("signupForm");
  const formData = new FormData(form);
  // Convert form data to an object
  const formObject = {};
  formData.forEach((value, key) => {
    formObject[key] = value;
  });
  // Send form data as JSON
  fetch('https://audemy-users-api.fly.dev/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formObject), // Convert the object to JSON
  })
  .then(response => {
    if (!response.ok) {
      if (response.status === 400) {
        alert("Bad request: Please check your form data and try again.");
        throw new Error('Bad request');
      } else if (response.status === 401) {
        alert("Unauthorized: You need to be authenticated to sign up.");
        throw new Error('Unauthorized');
      } else if (response.status === 405) {
        alert("Method not allowed: This operation is not supported.");
        throw new Error('Method not allowed');
      } else if (response.status === 429) {
        alert("Too many requests: Please try again later.");
        throw new Error('Too many requests');
      } else {
        alert("An error occurred. Please try again later.");
        throw new Error('Server error');
      }
    }
    return response.json();
  })
  .then(data => {
    console.log('Success:', data);
    // You can handle the response here (e.g., show a success message)
  })
  .catch((error) => {
    console.error('Error:', error);
    // Error is already handled above
  });
};
// Attach the submit event listener
document.getElementById('submitBtn').addEventListener('click', submitForm);