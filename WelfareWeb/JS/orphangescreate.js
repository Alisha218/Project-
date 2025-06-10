const insert_URL = 'https://silver-barnacle-r4jqr46v4qrcg4g-6006.app.github.dev/orphangescreate';



    document.getElementById('orphangesform').addEventListener('submit', async function (e) {
      e.preventDefault();

      const orphanage_id = parseInt(document.getElementById('orphanage_id').value.trim());
      const name = document.getElementById('name').value.trim();
      const location = document.getElementById('location').value.trim();
      const statusDiv = document.getElementById('status');

      try {
        const response = await fetch(insert_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({orphanage_id,name,location})
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to insert orphanage');
        }

        statusDiv.innerHTML = `<div class="alert alert-success">Orphanage inserted with ID: ${data.orphanage_id}</div>`;
        document.getElementById('orphangesform').reset();
      } catch (err) {
        statusDiv.innerHTML = `<div class="alert alert-danger">${err.message}</div>`;
      }
    });