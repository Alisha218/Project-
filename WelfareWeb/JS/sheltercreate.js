const insert_URL = 'https://silver-barnacle-r4jqr46v4qrcg4g-6006.app.github.dev/shelterscreate';



    document.getElementById('sheltersform').addEventListener('submit', async function (e) {
      e.preventDefault();

      const shelter_id = parseInt(document.getElementById('shelter_id').value.trim());
      const location = document.getElementById('location').value.trim();
      const capacity = parseInt(document.getElementById('capacity').value.trim());
      const type = document.getElementById('type').value.trim();
      const statusDiv = document.getElementById('status');

      try {
        const response = await fetch(insert_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({shelter_id, location, capacity,type})
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to insert shelter');
        }

        statusDiv.innerHTML = `<div class="alert alert-success">Shelter inserted with ID: ${data.shelter_id}</div>`;
        document.getElementById('sheltersform').reset();
      } catch (err) {
        statusDiv.innerHTML = `<div class="alert alert-danger">${err.message}</div>`;
      }
    });