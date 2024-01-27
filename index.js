// required packages
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('node:util');

// Variables to connect to app
// questions
const questions = require('./utils/questions').questions;
// license badge
const licenseBadge = require('./utils/licenseBadge').licenseBadge;
// markdown
const generateMarkdown = require("./utils/generateMarkdown");
const { writeFile } = require('fs/promises');
// async func init()and await to get data from user loaded questions obj from inquirer and add to exported/required/
async function init() {
	// try catch method 
	try {
		// await for inquirer prompt()
		const answersUser = await inquirer.prompt(questions);
		// license badge and license data here
		answersUser.licenseBadge = licenseBadge(answersUser.license);
		// var for calling generate markdown with user ans.
		let readMeGenerated = generateMarkdown(answersUser);
		// await for writing data to md file here
		await writeFile("generated-README.md", readMeGenerated)
		// catch for any errors
	} catch (err) {
		// will throw err if process not completed
		throw err;
	}
};

// call init() here async func
init();


