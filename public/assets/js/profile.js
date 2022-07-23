$('head').append(
  '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/css/bootstrap.min.css"/>'
);

const profile = async () => {
  // Make a POST request to destroy the session on the back end
  const response = await fetch('/api/user/profile', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    // If successfully logged out, redirect to the login page
  } else {
    alert(response.statusText);
  }
};

profile();
