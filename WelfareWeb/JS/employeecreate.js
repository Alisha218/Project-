const insert_URL = 'https://silver-barnacle-r4jqr46v4qrcg4g-6006.app.github.dev/employeescreate';



    document.getElementById('employeesform').addEventListener('submit', async function (e) {
      e.preventDefault();

      const employee_id = parseInt(document.getElementById('employee_id').value.trim());
      const name = document.getElementById('name').value.trim();
      const salary = document.getElementById('salary').value.trim();
      const statusDiv = document.getElementById('status');

      try {
        const response = await fetch(insert_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({employee_id,name,salary})
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to insert employee');
        }

        statusDiv.innerHTML = `<div class="alert alert-success">Employee inserted with ID: ${data.employee_id}</div>`;
        document.getElementById('employeesform').reset();
      } catch (err) {
        statusDiv.innerHTML = `<div class="alert alert-danger">${err.message}</div>`;
      }
    });