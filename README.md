# Portfolio - Using React
[![License:  MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Index

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Features](#features)
5. [Technology](#technology)
6. [Contributing](#contributing)
7. [Resources](#resources)
8. [License](#license)

## Description

```
This app allows me to detail my professional experience as well as my recent journey learning to be a full-stack developer.

Potential employers can review who I am and my coding projects. This is a single page app built using React.

```

## Installation

Setup: 
- (1) Fork the repo, (2) Clone the forked repo locally, (3) Run `npm i` to install dependancies, and (4) "npm run start" to build the app, deploy the local server and open the app. To deploy to GitHub pages, run "npm run deploy" from the root in the terminal.

## Usage

This app is a deployed using GitHub pages. From a development perspective, this app uses Node.js and React. See the technology list below for more detail.

## Features

This app includes a variety of API routes (see list below). In addition, the following features exist.

1. `Single-page app` built using React.
2. `Component` based approach which breaks down each page and major function. For example, the header, footer and each navigation bar link is a unique component.
3. `Bootstap` is used for the majority of the html and css including the nav bar, cards, and form.
4. `Footer` component includes a share icon that allows the user to share information (my resume, Linkedin & GitHub profile) via the natively available `navigator.share` api. If `navigator.share` is not available on the users browser (such as chrome on mac) then a bootstrap model is available which allows the user to email the info.
5. `About me`, `Portfolio`, `Resume` and `Contact me` pages.
6. `Resume` can be downloaded from the resume page.
7. `Contact me` form is fully operational, and upon submit the user's default email platform will open with all form content pre-populated in the email. The user can then forward the email.
8. `Contact me` form includes validation. The submit button is disabled until all forms are filled in. Upon submit, the validation (a) checks to ensure all fields are populated and (b) verifies the email is valid. If both checks are satisfied, the submit is accepted and the email platform is launched with the form input.
9. `Share` functionality is included so the user can quickly sent an email to contacts with my information.
10. `Portfolio` page includes more than 6 projects.
12. Fully `mobile responsive` including a nav bar transition to a hamburger menu.
13. Future enhancements: (a) Connect `contact me` to a server-side database, (b) Send server-side upon contact me submit, (c) enhance PWA to work both on- and off-line, and (d) Add more contact to highlight my unique skills and value proposition.

## Technology

1. `React:` JavaScript transcompiler mainly used to convert ECMAScript 2015+ code into a backwards-compatible version of JavaScript.
2. `Git/Github:` Repo and version management.
3. `GitHub Pages:` Deployment.
---

## App Preview - WalkThrough Video

Video #1: Demonstrates all of the content, functional and technical acceptance criteria.

[Link to WalkThrough Video](https://youtu.be/k6Rsua0mPys)

![Build & deploy video](./src/assets/images/demo-video.gif)

## Tests

No tests at this time.

## Contributing

Contributor Covenant Code of Conduct

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md)

## Resources

1. Project Manager: [Steve Calla - GitHub Profile](https://github.com/stevecalla)
2. Deployed Site URL - GitHub Pages: [LINK](https://stevecalla.github.io/scalla-portfolio/)
3. GitHub Repo: <https://github.com/stevecalla/scalla-portfolio >
4. Contact: [Email Steve](mailto:callasteven@gmail.com)

## License 

[![License:  MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
This project is licensed under the terms of the <span style="color:red">The MIT License</span>. Please click on the license badge for more information.