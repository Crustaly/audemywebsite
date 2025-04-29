const showErrorAlert = (message) => {
  alert(message); // Using standard alert for simplicity
};

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
    body: JSON.stringify(formObject),  // Convert the object to JSON
  })
  .then(response => {
    if (!response.ok) {
      // Handle specific error codes
      switch (response.status) {
        case 400:
            showErrorAlert("Bad request: " + (message || "Please check your input"));
            break;
        case 401:
            showErrorAlert("Unauthorized: " + (message || "Invalid credentials"));
            break;
        case 403:
            showErrorAlert("Forbidden: You don't have permission to access this resource");
            break;
        case 404:
            showErrorAlert("Resource not found");
            break;
        case 405:
            showErrorAlert("Method not allowed");
            break;
        case 429:
            showErrorAlert("Too many requests: Please try again later");
            break;
        case 500:
            showErrorAlert("Internal server error. Please try again later.");
            break;
        case 502:
            showErrorAlert("Internal server error. Please try again later.");
            break;
        case 503:
            showErrorAlert("Internal server error. Please try again later.");
            break;
        case 504:
            showErrorAlert("Internal server error. Please try again later.");
            break;
            default:
              showErrorAlert(`Error: ${response.status}. Please try again later.`);
      }
      
      // Return a rejected promise to skip the next then block
      return Promise.reject();
  }
  return response.json();
})
.then(data => {
  console.log('Success:', data);
  // You can handle the response here (e.g., show a success message)
  alert('Signup successful!');
})
.catch((error) => {
  // Only show network errors here - HTTP errors are already handled above
  if (error) {
      console.error('Error:', error);
      if (!error.message || !parseInt(error.message)) {
          showErrorAlert('Network error. Please check your connection and try again.');
      }
  }
});
};

// Attach the submit event listener
document.getElementById('submitBtn').addEventListener('click', submitForm);