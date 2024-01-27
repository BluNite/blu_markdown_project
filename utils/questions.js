/*/ array of questions for user/*/

const questions = [
	{
		type: "input",
		name: "title",
		message: "What is the title of this project?",
	},


	{
		type: "input",
		name: "about",
		message: "Enter one sentence that briefly explains what this project is about;",
	},
	{
		type: "input",
		name: "description",
		message: "Describe what this project does",
	},
	{
		type: "input",
		name: "installation",
		message: "How do you install this project: what are the instructions to install this app",
	},
	{
		type: "input",
		message: "What is the link to clone the repo?",
		name: "clone",
	},
	{
		type: "list",
		name: "license",
		message: "Please select the license you used for this project.",
		choices: [
			"GNU AGPLv3",
			"GNU GPLv3",
			"GNU LGPLv3",
			"Mozilla",
			"MIT",
			"Apache",
			"Boost",
		],
	},
	{
		type: "input",
		message: "Please enter any testing protocols you used for your project?",
		name: "test",
	},
	{
		type: "input",
		name: "author",
		message: "What is your name?",
	},
	{
		type: "input",
		name: "userName",
		message: "What is your GitHub userName?",
	},
	{
		type: "input",
		name: "email",
		message: "What is your email?",
	},


	{
		type: "input",
		name: "URL",
		message: "What is the URl of the projects live site?",
	},
	{
		type: "input",
		name: "repo",
		message: "What is the URL of the github repo?",
	},
]
// export module here
module.exports = {
	questions: questions
};

