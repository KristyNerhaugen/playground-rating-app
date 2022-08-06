async function newFormHandler(event) {
  event.preventDefault();

  const parkName = document.querySelector('input[name="park-name"]').value;
  const location = document.querySelector('input[name="location"]').value;
  const review = document.querySelector('textarea[name="review"]').value;

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      parkName,
      location,
      review
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
