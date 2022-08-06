async function editFormHandler(event) {
  event.preventDefault();

  const parkName = document.querySelector('input[name="park-name"]').value.trim();
  const location = document.querySelector('input[name="location"]').value.trim();
  const review = document.querySelector('textarea[name="review"]').value.trim();
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
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
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);

