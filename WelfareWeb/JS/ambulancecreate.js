const insert_URL = 'https://silver-barnacle-r4jqr46v4qrcg4g-6006.app.github.dev/ambulancescreate';



    document.getElementById('ambulanceform').addEventListener('submit', async function (e) {
      e.preventDefault();

      const ambulance_id = parseInt(document.getElementById('ambulance_id').value.trim());
      const license_plate = document.getElementById('license_plate').value.trim();
      const status = document.getElementById('status_input').value.trim();
      const statusDiv = document.getElementById('status');

      try {
        const response = await fetch(insert_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ambulance_id, license_plate, status})
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to insert ambulance');
        }

        statusDiv.innerHTML = `<div class="alert alert-success">Ambulance inserted with ID: ${data.ambulance_id}</div>`;
        document.getElementById('ambulanceform').reset();
      } catch (err) {
        statusDiv.innerHTML = `<div class="alert alert-danger">${err.message}</div>`;
      }
    });