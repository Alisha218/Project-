const country_URL='https://silver-barnacle-r4jqr46v4qrcg4g-6006.app.github.dev/volunteers';

fetch(country_URL).then(response=>{
    if(!response.ok)
        throw new Error("Failed to fetch Country DATA");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#volunteerstable tbody");

    data.forEach(volunteers=>{
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${volunteers.volunteer_id} </td>
        <td>${volunteers.name} </td>
        <td>${volunteers.skill} </td>
        <td>${volunteers.service_id} </td>
        `;
        tbody.appendChild(row);
    });
}).catch(err=>{
    console.log(err.message);
});