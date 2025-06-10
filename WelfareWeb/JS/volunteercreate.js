const insert_URL = 'https://silver-barnacle-r4jqr46v4qrcg4g-6006.app.github.dev/volunteerscreate';



    document.getElementById('volunteersform').addEventListener('submit', async function (e) {
      e.preventDefault();

      const volunteer_id = parseInt(document.getElementById('volunteer_id').value.trim());
      const name = document.getElementById('name').value.trim();
      const skill = document.getElementById('skill').value.trim();
      const service_id = parseInt(document.getElementById('service_id').value.trim());
      const statusDiv = document.getElementById('status');

      try {
        const response = await fetch(insert_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({volunteer_id, name, skill,service_id})
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to insert volunteer');
        }

        statusDiv.innerHTML = `<div class="alert alert-success">Volunteer inserted with ID: ${data.volunteer_id}</div>`;
        document.getElementById('volunteersform').reset();
      } catch (err) {
        statusDiv.innerHTML = `<div class="alert alert-danger">${err.message}</div>`;
      }
    });