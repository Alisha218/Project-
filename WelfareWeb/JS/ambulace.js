const country_URL='https://silver-barnacle-r4jqr46v4qrcg4g-6006.app.github.dev/ambulances';

fetch(country_URL).then(response=>{
    if(!response.ok)
        throw new Error("Failed to fetch Country DATA");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#ambulancetable tbody");

    data.forEach(ambulances=>{
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${ambulances.ambulance_id} </td>
        <td>${ambulances.license_plate} </td>
        <td>${ambulances.status} </td>
        `;
        tbody.appendChild(row);
    });
}).catch(err=>{
    console.log(err.message);
});