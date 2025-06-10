const insert_URL = 'https://silver-barnacle-r4jqr46v4qrcg4g-6006.app.github.dev/servicescreate';



    document.getElementById('servicesform').addEventListener('submit', async function (e) {
      e.preventDefault();

      const service_id = parseInt(document.getElementById('service_id').value.trim());
      const  name = document.getElementById('name').value.trim();
      const statusDiv = document.getElementById('status');

      try {
        const response = await fetch(insert_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({service_id,name})
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to insert service');
        }

        statusDiv.innerHTML = `<div class="alert alert-success">Service inserted with ID: ${data.service_id}</div>`;
        document.getElementById('servicesform').reset();
      } catch (err) {
        statusDiv.innerHTML = `<div class="alert alert-danger">${err.message}</div>`;
      }
    });