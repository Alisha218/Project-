const country_URL='https://silver-barnacle-r4jqr46v4qrcg4g-6006.app.github.dev/orphans';

fetch(country_URL).then(response=>{
    if(!response.ok)
        throw new Error("Failed to fetch Country DATA");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#orphanstable tbody");

    data.forEach(orphans=>{
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${orphans.orphan_id} </td>
        <td>${orphans.name} </td>
        <td>${orphans.age} </td>
        <td>${orphans.orphanage_id} </td>
        `;
        tbody.appendChild(row);
    });
}).catch(err=>{
    console.log(err.message);
});