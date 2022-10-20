# Cypress Research

[![Automatio_Trainee](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/detailed/8fcew8&style=social&logo=cypress)](https://dashboard.cypress.io/projects/8fcew8/runs)

**Circle CI status:**
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/marc31yn/Cypress-AutomatioTrainee/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/marc31yn/Cypress-AutomatioTrainee/tree/master)

This is cypress research assigned by the trainee program of QA Automation.

The objective of this project is to be able to demonstrate the skills acquired in test automation, using the following tools:

- Cypress E2E (Scenario)
  - Use of assertions
  - Use Cypress Dashboard 
- Design patterns (POM)
- API (Cy. Request)
- Browserstack
- GIT
- CircleCI
<p align="right">
  <a>
  <img src="https://yt3.ggpht.com/iD0oePTGV8tZwEEP_WEG2rvyNiQAVfmjhawFMCj17ARjjmw-J70k9NDjSE5QTzD9Vk3ayBU=s88-c-k-c0x00ffffff-no-rj" width="50"/>
    <img src="https://skillicons.dev/icons?i=js,nodejs,git,github" />
    <img src="https://cdn.icon-icons.com/icons2/2622/PNG/512/brand_circleci_icon_158961.png" width="50"/>
  </a>
</p>

<h2><span class="emoji">💻</span> Installing Cypress </h2>

1. Create folder where the project will be
2. Go to the your folder
> cd /your/project/path
3. Create your package.json file
> npm init
4. Install Cypress via npm:
> npm install cypress --save-dev
5. In package.json add the following in scripts:
>{
  "scripts": {
    "cypress:open": "cypress open"
  }
}
6. Execute the following to open Cypress
>npm run cypress:open 

<strong><g-emoji class="g-emoji" alias="bulb" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4a1.png">💡</g-emoji> For more information:</strong> go to [Cypress webpage](https://docs.cypress.io/guides/getting-started/installing-cypress#What-you-ll-learn)

![image](https://user-images.githubusercontent.com/23398107/195535737-e7c6d2d6-1270-426f-9ba5-5795655fb188.png)


<h2><span class="emoji">💻</span> Installing Browserstack </h2>

To run your first Cypress test with BrowserStack, perform the following steps:

1. Install the BrowserStack CLI
> npm install -g browserstack-cypress-cli

2. Create and configure the browserstack.json file which contains configurations
> browserstack-cypress init

3. After the browserstack.json file is created, modify or add the mandatory configurations that are required to run the Cypress test as shown in the following sample code.

```bash
  // browserstack.json

{
  "auth": {
    "username": <ENTER USERNAME>,
    "access_key": <ENTER ACCESS KEY>
  },
  "browsers": [{
      "browser": "chrome",
      "os": "Windows 10",
      "versions": ["latest", "latest - 1"]
    },
    {
      "browser": "edge",
      "os": "Windows 10",
      "versions": ["latest"]
    }
  ],
  "run_settings": {
    "cypress_config_file": "./cypress.config.js",
    "cypress_version": "10",
    "project_name": "Cypress Example",
    "build_name": "Build no: 1",
}
```
4. Run the test using the following command:
> browserstack-cypress run

<strong><g-emoji class="g-emoji" alias="bulb" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4a1.png">💡</g-emoji> For more information:</strong> go to [Circle webpage](https://circleci.com/developer/orbs/orb/cypress-io/cypress)
![image](https://user-images.githubusercontent.com/23398107/196533432-2702392f-4dae-4847-9a42-420b73ebce55.png)


