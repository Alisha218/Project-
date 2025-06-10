const insert_URL = 'https://silver-barnacle-r4jqr46v4qrcg4g-6006.app.github.dev/donorscreate';



    document.getElementById('donorForm').addEventListener('submit', async function (e) {
      e.preventDefault();

      const donor_id = parseInt(document.getElementById('donor_id').value.trim());
      const name = document.getElementById('name').value.trim();
      const contact = document.getElementById('contact').value.trim();
      const statusDiv = document.getElementById('status');

      try {
        const response = await fetch(insert_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ donor_id, name, contact })
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to insert donor');
        }

        statusDiv.innerHTML = `<div class="alert alert-success">Donor inserted with ID: ${data.donor_id}</div>`;
        document.getElementById('donorForm').reset();
      } catch (err) {
        statusDiv.innerHTML = `<div class="alert alert-danger">${err.message}</div>`;
      }
    });