// function to process user data
function generateMarkdown(data) {
  return `
#  ${data.title}

  ${data.description}

  ${data.licenseBadge}
  
   [A deployed version of this project can be viewed here:](${data.URL})


  ---

  ## Contents
  1. [About](#about)
  -   [User Story](#user%20story)
   -  [Acceptance criteria](#acceptance%20criteria)
   -  [Visuals](#visuals)
   -  [Build](#build)
  2. [Installation](#installation)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Authors and Acknowledgements](#authors%20and%20acknowledgement)

  ---

## About
${data.about}

---

## User Story

---


## Acceptance Criteria

---

## Visuals
[![]()]
---

## Build

---

## Installation

${data.installation}

 - To Clone The Repo:
   Git Clone ${data.clone}




 ---

## License

- License used for this project:  ${data.license}
* 'Choose A License.com', for more information about the licensing of this project
- [!choose a license][https://choosealicense.com/](https://choosealicense.com/)]
 
---

## Contributing

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

${data.test}


---

## Authors and Acknowledgements

${data.author}
---
## 

## Contact Information:
* GitHub Username: ${data.userName}
* GitHub Email: ${data.userEmail}
  
---
 `
}
module.exports = generateMarkdown;


