// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const questions1 = require('./src/teamQuestions');
// const buildHTMLTemplate = require('./utils/template');
// const renderLicenseLink = require('./utils/generateMarkdown');
// const LicenceInfo = require('./utils/licenseInfo')

// TODO: Create an array of questions for user input
async function init() {
    try {
        const userData = await inquirer.prompt(questions1);

        // userData.license = renderLicenseLink(userData.license);;

        // const readmeNew = buildHTMLTemplate(userData);


        // fs.writeFileSync('./readmeNew.md', readmeNew);
        // if (userData.licenseB === 'MIT') {
        //     fs.appendFileSync('./readmeNew.md', (LicenceInfo.MIT))
        // } else if (userData.licenseB === 'Apache 2.0') {
        //     fs.appendFileSync('./readmeNew.md', (LicenceInfo.Apache))
        // } else if (userData.licenseB === 'GNU GPLv.3') {
        //     fs.appendFileSync('./readmeNew.md', (LicenceInfo.GNU))
        // } else {
        //     fs.appendFileSync('./readmeNEW.md', (LicenceInfo.Un));

        //     console.log('File was successfully written.');

        // }
    }
    catch (error) {
        console.log(error);
    }


}


init();

