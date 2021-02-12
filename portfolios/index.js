// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const questions1 = require('./src/teamQuestions');
const menu = require('./src/menuQuestion');
const enginQuestions = require('./src/enginQuestions')
const interQuestions = require('./src/internQuestions')
const engineerCard = require('./dist/engineerTemp')
const internCard = require('./dist/internTemp')
const managerCard = require('./dist/managerTemp')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')
// const managerCard = require('./dist/managerTemp')
const buildHTMLTemplate = require('./dist/wholeTemp')
const team = []



// TODO: Create an array of questions for user input
async function init() {
    try {
        const userData = await inquirer.prompt(questions1);
        console.log('What are the responses', userData);
        team.push(new Manager(`${userData.managerName}`, `${userData.managerId}`, `${userData.managerEmail}`, `${userData.managerOffice}`))
    
        askTeamQs()

    }
    // }
    catch (error) {
        console.log(error);
    }


}

async function askTeamQs() {

    const menuData = await inquirer.prompt(menu)



    console.log('menuData look like', menuData)

    if (menuData.menu === 'Add an Engineer') {
        const enginData = await inquirer.prompt(enginQuestions)
        team.push(new Engineer(`${enginData.enginName}`, `${enginData.enginId}`, `${enginData.enginEmail}`, `${enginData.enginGithub}`))


        askTeamQs()
    } else if (menuData.menu === 'Add an Intern') {
        const internData = await inquirer.prompt(interQuestions)
        team.push(new Intern(`${internData.internName}`, `${internData.internId}`, `${internData.internEmail}`, `${internData.internSchool}`))
        askTeamQs()
    } else {

        buildPage()
    }


}

const buildPage = () => {

    // manager.push(new Manager(`${userData.managerName}`,`${userData.managerId}`, `${userData.managerEmail}`,`${userData.managerOffice}`))
    //     console.log('????', manager);

    var allTheCards = []

    console.log('team!! arary!!!!', team)

    for (let i = 0; i < team.length; i++) {
     if(team[i].role === 'Engineer' ){
        var newCard = engineerCard(team[i])
        allTheCards.push(newCard)

     }else if(team[i].role === 'Intern'){
        newCard = internCard(team[i])
        allTheCards.push(newCard)
     }else if (team[i].role === 'Manager'){
        newCard = managerCard(team[i])
        allTheCards.push(newCard)
     }
        
    }

   
    // var joinedCards = allTheCards.join(',')
    // Add the information to a card on HTML 

    const myTeam = buildHTMLTemplate(allTheCards);


    fs.writeFileSync('./teamProfile.html', myTeam);
}

init();

// async function menuQ() {
//     try {

//         const userMenu = await inquirer.prompt(menu);
//     console.log('What did they choose', userMenu);

//     if (userMenu.menu === 'Add an Engineer'){
//         // switch case instead of if /else ?? 
//         //answer engineer questions - make new Engineer // append to HTML id = "cardHere"// maybe write file here instead to write everything together 
//     }

//     }
//     catch (error) {
//         console.log(error);
//     }


// }
// menuQ();



// OLD CODE EXAMPLE 
// if (userData.licenseB === 'MIT') {
        //     fs.appendFileSync('./readmeNew.md', (LicenceInfo.MIT))
        // } else if (userData.licenseB === 'Apache 2.0') {
        //     fs.appendFileSync('./readmeNew.md', (LicenceInfo.Apache))
        // } else if (userData.licenseB === 'GNU GPLv.3') {
        //     fs.appendFileSync('./readmeNew.md', (LicenceInfo.GNU))
        // } else {
        //     fs.appendFileSync('./readmeNEW.md', (LicenceInfo.Un));

        //     console.log('File was successfully written.');

