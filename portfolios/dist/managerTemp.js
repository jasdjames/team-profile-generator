const Manager = require ('../lib/Manager')
const managerCard =
`<div class="card m-3" style="width: 18rem;">
<h5 class="card-header">${Manager.name}</h5>
<div class="card-body">
    <h5 class="card-title">${Manager.role}</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item"> ID: ${Manager.id}</li>
        <li class="list-group-item"><a href="mailto:${Manager.email}">Email ${Manager.email}</a> </li>
        <li class="list-group-item"> Office Number: ${Manager.officeNumber}</li>
    </ul>

</div>
</div>`

module.exports = managerCard