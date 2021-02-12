const internCard = (intern) => {
var card =
    `<div class="card m-3" style="width: 18rem;">
<h5 class="card-header">${intern.name}</h5>
<div class="card-body">
    <h5 class="card-title">${intern.role}</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item"> ID: ${intern.id}</li>
        <li class="list-group-item"><a href="mailto:${intern.email}">Email ${intern.email}</a> </li>
        <li class="list-group-item"> Office Number: ${intern.school}</li>
    </ul>

</div>
</div>`
return card 
}

module.exports = internCard