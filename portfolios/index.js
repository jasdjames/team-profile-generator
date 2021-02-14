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
// Tutor helped me recognize that this should be a function that pushed the information from the card into a array 
const buildPage = () => {


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

   
    // Add the information to a card on HTML 

    const myTeam = buildHTMLTemplate(allTheCards.join(''));


    fs.writeFileSync('./teamProfile.html', myTeam);
}

init();

