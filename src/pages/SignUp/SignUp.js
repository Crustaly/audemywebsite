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
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    // You can handle the response here (e.g., show a success message)
  })
  .catch((error) => {
    console.error('Error:', error);
    // You can handle errors here
  });
};

// Attach the submit event listener
document.getElementById('submitBtn').addEventListener('click', submitForm);
