// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const questions1 = require('./src/teamQuestions');
const menu = require ('./src/menuQuestion');
const Manager = require('./lib/Manager');
// const managerCard = require('./dist/managerTemp')
const buildHTMLTemplate = require('./dist/wholeTemp')
const manager = []

// TODO: Create an array of questions for user input
async function init() {
    try {
        const userData = await inquirer.prompt(questions1);
    console.log('What are the responses', userData);
        
        manager.push(new Manager(`${userData.managerName}`,`${userData.managerId}`, `${userData.managerEmail}`,`${userData.managerOffice}`))
        console.log('????', manager);

        // Add the information to a card on HTML 
        const myTeam = buildHTMLTemplate(userData);
        

        fs.writeFileSync('./teamProfile.html', myTeam);
       

        }
    // }
    catch (error) {
        console.log(error);
    }


}


init();

// async function menuQ() {
//     try {
      
//         const userMenu = await inquirer.prompt(menu);
//     console.log('What did they choose', userMenu);

//     if (userMenu.menu === 'Add an Engineer'){
//         //answer engineer questions - make new Engineer 
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

