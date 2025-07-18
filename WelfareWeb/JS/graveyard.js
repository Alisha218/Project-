const country_URL='https://silver-barnacle-r4jqr46v4qrcg4g-6006.app.github.dev/graveyard';

fetch(country_URL).then(response=>{
    if(!response.ok)
        throw new Error("Failed to fetch Country DATA");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#graveyardtable tbody");

    data.forEach(graveyard=>{
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${graveyard.graveyard_id} </td>
        <td>${graveyard.location} </td>
        <td>${graveyard.total_plots} </td>
        <td>${graveyard.status} </td>
        `;
        tbody.appendChild(row);
    });
}).catch(err=>{
    console.log(err.message);
});