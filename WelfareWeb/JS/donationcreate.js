const insert_URL = 'https://silver-barnacle-r4jqr46v4qrcg4g-6006.app.github.dev/donationscreate';



    document.getElementById('donationsform').addEventListener('submit', async function (e) {
      e.preventDefault();

      const donation_id = parseInt(document.getElementById('donation_id').value.trim());
      const donor_id = parseInt(document.getElementById('donor_id').value.trim());
      const donation_date = document.getElementById('donation_date').value.trim();
      const donation_amount = document.getElementById('donation_amount').value.trim();
      const statusDiv = document.getElementById('status');

      try {
        const response = await fetch(insert_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({donation_id, donor_id, donation_date,donation_amount})
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to insert donation');
        }

        statusDiv.innerHTML = `<div class="alert alert-success">Donation inserted with ID: ${data.donation_id}</div>`;
        document.getElementById('donationsform').reset();
      } catch (err) {
        statusDiv.innerHTML = `<div class="alert alert-danger">${err.message}</div>`;
      }
    });