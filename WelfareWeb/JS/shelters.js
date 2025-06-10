const country_URL='https://silver-barnacle-r4jqr46v4qrcg4g-6006.app.github.dev/shelters';

fetch(country_URL).then(response=>{
    if(!response.ok)
        throw new Error("Failed to fetch Country DATA");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#sheltertable tbody");

    data.forEach(shelters=>{
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${shelters.shelter_id} </td>
        <td>${shelters.location} </td>
        <td>${shelters.capacity} </td>
        <td>${shelters.type} </td>
        `;
        tbody.appendChild(row);
    });
}).catch(err=>{
    console.log(err.message);
});