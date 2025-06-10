const insert_URL = 'https://silver-barnacle-r4jqr46v4qrcg4g-6006.app.github.dev/inventorycreate';



    document.getElementById('inventoryform').addEventListener('submit', async function (e) {
      e.preventDefault();

      const item_id = parseInt(document.getElementById('item_id').value.trim());
      const name = document.getElementById('name').value.trim();
      const quantity = parseInt(document.getElementById('quantity').value.trim());
      const category = document.getElementById('category').value.trim();
      const statusDiv = document.getElementById('status');

      try {
        const response = await fetch(insert_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({item_id, name,quantity,category})
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to insert inventory');
        }

        statusDiv.innerHTML = `<div class="alert alert-success">Inventory inserted with ID: ${data.item_id}</div>`;
        document.getElementById('inventoryform').reset();
      } catch (err) {
        statusDiv.innerHTML = `<div class="alert alert-danger">${err.message}</div>`;
      }
    });