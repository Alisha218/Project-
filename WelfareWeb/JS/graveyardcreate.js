const insert_URL = 'https://silver-barnacle-r4jqr46v4qrcg4g-6006.app.github.dev/graveyardcreate';



    document.getElementById('graveyardform').addEventListener('submit', async function (e) {
      e.preventDefault();

      const graveyard_id = parseInt(document.getElementById('graveyard_id').value.trim());
      const location = document.getElementById('location').value.trim();
      const total_plots = parseInt(document.getElementById('total_plots').value.trim());
      const status = document.getElementById('status_input').value.trim();
      const statusDiv = document.getElementById('status');

      try {
        const response = await fetch(insert_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({graveyard_id, location, total_plots,status})
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to insert graveyard');
        }

        statusDiv.innerHTML = `<div class="alert alert-success">Graveyard inserted with ID: ${data.graveyard_id}</div>`;
        document.getElementById('graveyardform').reset();
      } catch (err) {
        statusDiv.innerHTML = `<div class="alert alert-danger">${err.message}</div>`;
      }
    });