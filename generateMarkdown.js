// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadges = {
    'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'GNU Public License': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'MIT License': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'BSD-2 Clause': '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
    'BSD-3 Clause': '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    'Boost Software License': '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
    'Creative Commons Zero': '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)',
    'Eclipse Public License': '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
    'Mozilla Public License': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    'None': ''
  };

  return licenseBadges[license] || '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license === 'None' ? '' : '[License](#licenselink)';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license === 'None' ? '' : `## <a name="licenselink"></a>License  
     ${license}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { title, license, description, install, usage, contribution, test, github, email } = data;
  const licenseBadge = renderLicenseBadge(license);
  const licenseSection = renderLicenseSection(license);

  return `# ${title} ${licenseBadge}
## Table of Contents
[Description](#descriptionlink) |
[Installation](#installlink) |
[Usage](#usagelink) |
${renderLicenseLink(license)} |
[Contributing](#contributelink) |
[Testing](#testslink) |
[Questions](#questionslink)

## <a name="descriptionlink"></a>Description
${description}

## <a name="installlink"></a>Installation 
${install}

## <a name="usagelink"></a>Usage 
${usage}

${licenseSection}

## <a name="contributelink"></a>Contributing 
${contribution}

## <a name="testslink"></a>Tests 
${test}

## <a name="questionslink"></a>Questions 
Github: ${github} 
Email: ${email}
`;
}

module.exports = generateMarkdown;
