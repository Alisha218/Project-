const country_URL='https://silver-barnacle-r4jqr46v4qrcg4g-6006.app.github.dev/orphanges';

fetch(country_URL).then(response=>{
    if(!response.ok)
        throw new Error("Failed to fetch Country DATA");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#orphanagetable tbody");

    data.forEach(orphanages=>{
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${orphanages.orphanage_id} </td>
        <td>${orphanages.name} </td>
        <td>${orphanages.location} </td>
        `;
        tbody.appendChild(row);
    });
}).catch(err=>{
    console.log(err.message);
});