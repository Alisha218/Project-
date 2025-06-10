const country_URL='https://silver-barnacle-r4jqr46v4qrcg4g-6006.app.github.dev/donations';

fetch(country_URL).then(response=>{
    if(!response.ok)
        throw new Error("Failed to fetch Country DATA");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#donationtable tbody");

    data.forEach(donation=>{
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${donation.donation_id} </td>
        <td>${donation.donor_id} </td>
        <td>${donation.donation_date} </td>
        <td>${donation.donation_amount} </td>
        `;
        tbody.appendChild(row);
    });
}).catch(err=>{
    console.log(err.message);
});