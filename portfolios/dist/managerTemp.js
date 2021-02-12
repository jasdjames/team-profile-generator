
const managerCard = (manager) => {
    var card =
`<div class="card m-3" style="width: 18rem;">
<h5 class="card-header">${manager.name}</h5>
<div class="card-body">
    <h5 class="card-title">${manager.role}</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item"> ID: ${manager.id}</li>
        <li class="list-group-item"><a href="mailto:${manager.email}">Email ${manager.email}</a> </li>
        <li class="list-group-item"> Office Number: ${manager.officeNumber}</li>
    </ul>

</div>
</div>`
return card
}
module.exports = managerCard