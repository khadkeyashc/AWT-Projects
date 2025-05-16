function triggerEvent(message) {
  fetch('/log', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message })
  })
  .then(response => response.text())
  .then(data => {
    document.getElementById('status').innerText = data;
  });
}