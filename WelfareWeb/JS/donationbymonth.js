document.addEventListener('DOMContentLoaded', async () => {
  const chartCanvas = document.getElementById('donationsChart');

  try {
    const response = await fetch('https://silver-barnacle-r4jqr46v4qrcg4g-6006.app.github.dev/donationbymonth');

    if (!response.ok) {
      throw new Error(`Network response was not ok (status ${response.status})`);
    }

    const data = await response.json();
    console.log('API data:', data);

    // Adjust this depending on your API response structure
    // If your data is directly an array of donations:
    let donationsArray = Array.isArray(data) ? data : data.data || data.results;

    if (!Array.isArray(donationsArray) || donationsArray.length === 0) {
      throw new Error('No donation data available');
    }

    const labels = donationsArray.map(item => item.month);
    const totals = donationsArray.map(item => parseFloat(item.total));

    new Chart(chartCanvas, {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: 'Total Donations',
          data: totals,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
          title: {
            display: true,
            text: 'Monthly Donations'
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: 'Amount (USD)' }
          },
          x: {
            title: { display: true, text: 'Month' }
          }
        }
      }
    });

  } catch (error) {
    console.error('Error loading donations chart:', error);
    
  }
});
