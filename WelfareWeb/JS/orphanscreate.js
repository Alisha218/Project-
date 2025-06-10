const insert_URL = 'https://silver-barnacle-r4jqr46v4qrcg4g-6006.app.github.dev/orphanscreate';



    document.getElementById('orphansform').addEventListener('submit', async function (e) {
      e.preventDefault();

      const orphan_id = parseInt(document.getElementById('orphan_id').value.trim());
      const name = document.getElementById('name').value.trim();
      const age = parseInt(document.getElementById('age').value.trim());
      const orphanage_id = parseInt(document.getElementById('orphanage_id').value.trim());
      const statusDiv = document.getElementById('status');

      try {
        const response = await fetch(insert_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({orphan_id, name, age,orphanage_id})
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to insert orphan');
        }

        statusDiv.innerHTML = `<div class="alert alert-success">Orphan inserted with ID: ${data.orphan_id}</div>`;
        document.getElementById('orphansform').reset();
      } catch (err) {
        statusDiv.innerHTML = `<div class="alert alert-danger">${err.message}</div>`;
      }
    });