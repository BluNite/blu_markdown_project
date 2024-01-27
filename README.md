# Blunite_README_Generator

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![badge: W3schools](https://img.shields.io/badge/W3Schools-04AA6D.svg?style=for-the-badge&logo=W3Schools&logoColor=white)![badge:stackOverflow](https://img.shields.io/badge/Stack%20Overflow-F58025.svg?style=for-the-badge&logo=Stack-Overflow&logoColor=white)![badge:js](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)



## [Blunite_README_Generator](#blunite_readme_generator)

## [Contents](#contents)

  - [Blunite_README_Generator](#blunite_readme_generator-1)
  - [Contents](#contents)
  - [About](#about)
  - [Technology Used](#technology-used)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Visuals 🖼️](#visuals-️)
  - [Installation 🏗️](#installation-️)
  - [License 📝](#license-)
  - [Contributing ⛑️ 🚧](#contributing-️-)
  - [Tests](#tests)
  - [Challenges and Issues](#challenges-and-issues)
  - [Authors and Acknowledgments](#authors-and-acknowledgments)
  - [Contact Information](#contact-information)

---

## About

```md
A Node CLI app that accepts user input using Inquirer NPM, and fs built-in node module to generate a README.md .
```

## Technology Used

Inquirer- Node Package Manager, FS module, and NodeJS

<svg width="235" height="235" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#F0DB4F" d="M0 0h235v235H0z"/><path fill="#323330" d="M138 163v-5h5v-5h29v5h4v5h5v14h-5v5h-4v5h-5v5h-5v15h-9v-19h5v-5h5v-5h5v-5h5v-6h-5v-5h-21v5h-5v10h-9v-14zM125 162h-20v51h20v9H97v-69h28zM190 162h20v51h-20v9h28v-69h-28zM153 213h9v9h-9z"/></g></svg><svg xmlns="http://www.w3.org/2000/svg" width="589.827" height="361.238" version="1.2" viewBox="0 0 442.37 270.929"><defs><clipPath id="a"><path d="M239.03 226.605l-42.13 24.317c-1.578.91-2.546 2.59-2.546 4.406v48.668c0 1.817.968 3.496 2.546 4.406l42.133 24.336c1.575.907 3.517.907 5.09 0l42.126-24.336c1.57-.91 2.54-2.59 2.54-4.406v-48.668c0-1.816-.97-3.496-2.55-4.406l-42.12-24.317c-.79-.453-1.67-.68-2.55-.68-.88 0-1.76.227-2.55.68"/></clipPath><linearGradient id="b" x1="-.348" x2="1.251" gradientTransform="rotate(116.114 53.1 202.97) scale(86.48)" gradientUnits="userSpaceOnUse"><stop offset=".3" stop-color="#3E863D"/><stop offset=".5" stop-color="#55934F"/><stop offset=".8" stop-color="#5AAD45"/></linearGradient><clipPath id="c"><path d="M195.398 307.086c.403.523.907.976 1.5 1.316l36.14 20.875 6.02 3.46c.9.52 1.926.74 2.934.665.336-.027.672-.09 1-.183l44.434-81.36c-.34-.37-.738-.68-1.184-.94l-27.586-15.93-14.582-8.39c-.414-.24-.863-.41-1.32-.53zm0 0"/></clipPath><linearGradient id="d" x1="-.456" x2=".582" gradientTransform="rotate(-36.46 550.846 -214.337) scale(132.798)" gradientUnits="userSpaceOnUse"><stop offset=".57" stop-color="#3E863D"/><stop offset=".72" stop-color="#619857"/><stop offset="1" stop-color="#76AC64"/></linearGradient><clipPath id="e"><path d="M241.066 225.953c-.707.07-1.398.29-2.035.652l-42.01 24.247 45.3 82.51c.63-.09 1.25-.3 1.81-.624l42.13-24.336c1.3-.754 2.19-2.03 2.46-3.476l-46.18-78.89c-.34-.067-.68-.102-1.03-.102-.14 0-.28.007-.42.02"/></clipPath><linearGradient id="f" x1=".043" x2=".984" gradientTransform="translate(192.862 279.652) scale(97.417)" gradientUnits="userSpaceOnUse"><stop offset=".16" stop-color="#6BBF47"/><stop offset=".38" stop-color="#79B461"/><stop offset=".47" stop-color="#75AC64"/><stop offset=".7" stop-color="#659E5A"/><stop offset=".9" stop-color="#3E863D"/></linearGradient></defs><path fill="#689f63" d="M218.647 270.93c-1.46 0-2.91-.383-4.19-1.12l-13.337-7.896c-1.992-1.114-1.02-1.508-.363-1.735 2.656-.93 3.195-1.14 6.03-2.75.298-.17.688-.11.993.07l10.246 6.08c.37.2.895.2 1.238 0l39.95-23.06c.37-.21.61-.64.61-1.08v-46.1c0-.46-.24-.87-.618-1.1l-39.934-23.04c-.37-.22-.86-.22-1.23 0l-39.926 23.04c-.387.22-.633.65-.633 1.09v46.1c0 .44.24.86.62 1.07l10.94 6.32c5.94 2.97 9.57-.53 9.57-4.05v-45.5c0-.65.51-1.15 1.16-1.15h5.06c.63 0 1.15.5 1.15 1.15v45.52c0 7.92-4.32 12.47-11.83 12.47-2.31 0-4.13 0-9.21-2.5l-10.48-6.04c-2.59-1.5-4.19-4.3-4.19-7.29v-46.1c0-3 1.6-5.8 4.19-7.28l39.99-23.07c2.53-1.43 5.89-1.43 8.4 0l39.94 23.08c2.58 1.49 4.19 4.28 4.19 7.28v46.1c0 2.99-1.61 5.78-4.19 7.28l-39.94 23.07c-1.28.74-2.73 1.12-4.21 1.12"/><path fill="#689f63" d="M230.987 239.164c-17.48 0-21.145-8.024-21.145-14.754 0-.64.516-1.15 1.157-1.15h5.16c.57 0 1.05.415 1.14.978.78 5.258 3.1 7.91 13.67 7.91 8.42 0 12-1.902 12-6.367 0-2.57-1.02-4.48-14.1-5.76-10.94-1.08-17.7-3.49-17.7-12.24 0-8.06 6.8-12.86 18.19-12.86 12.79 0 19.13 4.44 19.93 13.98.03.33-.09.65-.31.89-.22.23-.53.37-.85.37h-5.19c-.54 0-1.01-.38-1.12-.9-1.25-5.53-4.27-7.3-12.48-7.3-9.19 0-10.26 3.2-10.26 5.6 0 2.91 1.26 3.76 13.66 5.4 12.28 1.63 18.11 3.93 18.11 12.56 0 8.7-7.26 13.69-19.92 13.69m48.66-48.89h1.34c1.1 0 1.31-.77 1.31-1.22 0-1.18-.81-1.18-1.26-1.18h-1.38zm-1.63-3.78h2.97c1.02 0 3.02 0 3.02 2.28 0 1.59-1.02 1.92-1.63 2.12 1.19.08 1.27.86 1.43 1.96.08.69.21 1.88.45 2.28h-1.83c-.05-.4-.33-2.6-.33-2.72-.12-.49-.29-.73-.9-.73h-1.51v3.46h-1.67zm-3.57 4.3c0 3.58 2.89 6.48 6.44 6.48 3.58 0 6.47-2.96 6.47-6.48 0-3.59-2.93-6.44-6.48-6.44-3.5 0-6.44 2.81-6.44 6.43m14.16.03c0 4.24-3.47 7.7-7.7 7.7-4.2 0-7.7-3.42-7.7-7.7 0-4.36 3.58-7.7 7.7-7.7 4.15 0 7.69 3.35 7.69 7.7"/><path fill="#333" fill-rule="evenodd" d="M94.936 90.55c0-1.84-.97-3.53-2.558-4.445l-42.356-24.37c-.715-.42-1.516-.64-2.328-.67h-.438c-.812.03-1.613.25-2.34.67L2.562 86.105C.984 87.025 0 88.715 0 90.555l.093 65.64c0 .91.47 1.76 1.27 2.21.78.48 1.76.48 2.54 0l25.18-14.42c1.59-.946 2.56-2.618 2.56-4.44V108.88c0-1.83.97-3.52 2.555-4.43l10.72-6.174c.796-.46 1.67-.688 2.56-.688.876 0 1.77.226 2.544.687l10.715 6.172c1.586.91 2.56 2.6 2.56 4.43v30.663c0 1.82.983 3.5 2.565 4.44l25.164 14.41c.79.47 1.773.47 2.56 0 .776-.45 1.268-1.3 1.268-2.21zm199.868 34.176c0 .457-.243.88-.64 1.106l-14.548 8.386c-.395.227-.883.227-1.277 0l-14.55-8.386c-.4-.227-.64-.65-.64-1.106V107.93c0-.458.24-.88.63-1.11l14.54-8.4c.4-.23.89-.23 1.29 0l14.55 8.4c.4.23.64.652.64 1.11zM298.734.324c-.794-.442-1.76-.43-2.544.027-.78.46-1.262 1.3-1.262 2.21v65c0 .64-.34 1.23-.894 1.55-.55.32-1.235.32-1.79 0L281.634 63c-1.58-.914-3.526-.914-5.112 0l-42.37 24.453c-1.583.91-2.56 2.6-2.56 4.42v48.92c0 1.83.977 3.51 2.56 4.43l42.37 24.47c1.582.91 3.53.91 5.117 0l42.37-24.48c1.58-.92 2.56-2.6 2.56-4.43V18.863c0-1.856-1.01-3.563-2.63-4.47zm141.093 107.164c1.574-.914 2.543-2.602 2.543-4.422V91.21c0-1.824-.97-3.507-2.547-4.425l-42.1-24.44c-1.59-.92-3.54-.92-5.13 0l-42.36 24.45c-1.59.92-2.56 2.6-2.56 4.43v48.9c0 1.84.99 3.54 2.58 4.45l42.09 23.99c1.55.89 3.45.9 5.02.03l25.46-14.15c.8-.45 1.31-1.3 1.31-2.22 0-.92-.49-1.78-1.29-2.23l-42.62-24.46c-.8-.45-1.29-1.3-1.29-2.21v-15.34c0-.916.48-1.76 1.28-2.216l13.26-7.65c.79-.46 1.76-.46 2.55 0l13.27 7.65c.79.45 1.28 1.3 1.28 2.21v12.06c0 .91.49 1.76 1.28 2.22.79.45 1.77.45 2.56-.01zm0 0"/><path fill="#689f63" fill-rule="evenodd" d="M394.538 105.2c.3-.177.676-.177.98 0l8.13 4.69c.304.176.49.5.49.85v9.39c0 .35-.186.674-.49.85l-8.13 4.69c-.304.177-.68.177-.98 0l-8.125-4.69c-.31-.176-.5-.5-.5-.85v-9.39c0-.35.18-.674.49-.85zm0 0"/><g clip-path="url(#a)" transform="translate(-78.306 -164.016)"><path fill="url(#b)" d="M331.363 246.793l-118.715-58.19-60.87 124.174L270.49 370.97zm0 0"/></g><g clip-path="url(#c)" transform="translate(-78.306 -164.016)"><path fill="url(#d)" d="M144.07 264.004l83.825 113.453 110.86-81.906-83.83-113.45zm0 0"/></g><g clip-path="url(#e)" transform="translate(-78.306 -164.016)"><path fill="url(#f)" d="M197.02 225.934v107.43h91.683v-107.43zm0 0"/></g></svg>

---

## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can easily create a README for a new assignment/project
```

## Acceptance Criteria

```md
GIVEN a CLI application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is produced displaying the Title, sections in the app. Also, a Table of Contents, License, Contributions, Tests, and Questions.
WHEN I enter a Description, Installation, Instruction, Usage, Contributing, and Tests
When I choose a license for my project/app from a list of options
Then a badge for that license is rendered at the top of the README page
```

## Visuals 🖼️
- Video can be viewed here

https://drive.google.com/file/d/1YYdjAtkdEVXUkD238r42gF1OWvYb5OFj

## Installation 🏗️

```md
Go to GitHub.com and navigate to the main page of the repository. Then, click <> CODE, above the list of list of files. Then, copy the URL for the repository. Click the applicable clipboard for, HTTPS, SSH, or GitHub CLI. THEN, open Git Bash, and change the current working directory to the location where you want the cloned directory. THEN, type [git clone]. Then, paste the URL you copied [git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY]. THEN, press enter to create your local clone.
```

To clone the repo:

Git Clone https://github.com/BluNite/

---

## License 📝

License used for this project - MIT

- For more information on license types, please reference this website
  for additional licensing information - [https: //choosealicense.com/](https://choosealicense.com/).

---

## Contributing ⛑️ 🚧

To contribute to this application, create a pull request.
Here are the steps needed for doing that:

- Fork the repo
- Create a feature branch (git checkout -b NAME-HERE)
- Commit your new feature (git commit -m 'Add some feature')
- Push your branch (git push)
- Create a new Pull Request

Following a code review, your feature will be merged.

---

## Tests

## Challenges and Issues

```md
- Familiarizing with the Inquirer package
- understanding the flow of data with import/export of modules and rendering data to the markdown file
- fs module and its functions: this project was good practice for understanding the write, read, and updating files in Node FS.
```

---

## Authors and Acknowledgments

```md
Made with 💙 by Nkenge Crowe (bluNite)
```

## Contact Information

- GitHub Username: BluNite
- GitHub Email: ncrowe175@gmail.com
