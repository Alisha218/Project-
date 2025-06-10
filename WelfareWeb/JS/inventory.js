const country_URL='https://silver-barnacle-r4jqr46v4qrcg4g-6006.app.github.dev/inventory';

fetch(country_URL).then(response=>{
    if(!response.ok)
        throw new Error("Failed to fetch Country DATA");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#inventorytable tbody");

    data.forEach(inventory=>{
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${inventory.item_id} </td>
        <td>${inventory.name} </td>
        <td>${inventory.quantity} </td>
        <td>${inventory.category} </td>
        `;
        tbody.appendChild(row);
    });
}).catch(err=>{
    console.log(err.message);
});