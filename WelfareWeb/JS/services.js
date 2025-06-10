const country_URL='https://silver-barnacle-r4jqr46v4qrcg4g-6006.app.github.dev/services';

fetch(country_URL).then(response=>{
    if(!response.ok)
        throw new Error("Failed to fetch Country DATA");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#servicestable tbody");

    data.forEach(services=>{
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${services.service_id} </td>
        <td>${services.name} </td>
        `;
        tbody.appendChild(row);
    });
}).catch(err=>{
    console.log(err.message);
});