function generateMarkdown(data) {
  const image = `https://github.com/${data.username}.png?size=50`;
  const gitHub = `https://img.shields.io/badge/Github-${data.username}-4cbbb9`;

  return `
# ${data.title}
    
## ${data.description}
    
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Tests](#tests)
- [Contributors](#contributors)
- [Details](#details)
    
## Installation
Packages required to run this program are: ${data.installation}
  
## Usage
Examples of how to use this program: ${data.usage}
## License
${data.license}
## Tests
To test, run the following command: ${data.test}
## Contributors
${data.contributors}
## Contact
\n![Badge](${gitHub}) 
\n![Profile Image](${image})
\nView the project in GitHub at: ${data.url}
\nIf you have any questions, contact the author directly at: ${data.email}.`;
}

module.exports = generateMarkdown;
