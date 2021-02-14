const engineerCard = (engineer) => {

    var card = `<div class="card m-3" style="width: 18rem;">
    <h5 class="card-header bg-primary">${engineer.name}</h5>
    <div class="card-body">
        <h5 class="card-title">${engineer.role}</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"> ID: ${engineer.id}</li>
            <li class="list-group-item"><a href="mailto:${engineer.email}">Email ${engineer.email}</a> </li>
            <li class="list-group-item"><a href="https://github.com/${engineer.github}"> GitHubUsername: ${engineer.github}</a> </li>
        </ul>
    
    </div>
    </div>`
    return card

}


module.exports = engineerCard