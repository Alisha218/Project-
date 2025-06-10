const country_URL='https://silver-barnacle-r4jqr46v4qrcg4g-6006.app.github.dev/donors';

fetch(country_URL).then(response=>{
    if(!response.ok)
        throw new Error("Failed to fetch Country DATA");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#donortable tbody");

    data.forEach(donor=>{
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${donor.donor_id} </td>
        <td>${donor.name} </td>
        <td>${donor.contact} </td>
        `;
        tbody.appendChild(row);
    });
}).catch(err=>{
    console.log(err.message);
});