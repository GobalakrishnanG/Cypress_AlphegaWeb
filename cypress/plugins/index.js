/// <reference types="cypress" />
/// <reference types="@shelex/cypress-allure-plugin" />

// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
const cucumber = require('cypress-cucumber-preprocessor').default

// module.exports = (on, config) => {
//   on('file:preprocessor', cucumber())
// }

// Allure report
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
  allureWriter(on, config);
    // on('task', {
    //     readAllureResults: () => {
    //         try {
    //             const dir = 'cypress/fixtures';
    //             const subdirs = ['basic', 'cucumber'];
    //             return subdirs.reduce((dirMap, subdir) => {
    //                 const dirFiles = fs.readdirSync(path.join(dir, subdir));
    //                 dirMap[subdir] = dirFiles.reduce((fileMap, f) => {
    //                     const getType = (file) => {
    //                         const types = {
    //                             suites: (f) => f.includes('-container'),
    //                             tests: (f) => f.includes('-result'),
    //                             attachments: (f) => f.includes('-attachment')
    //                         };
    //                         return Object.keys(types).find((type) =>
    //                             types[type](file)
    //                         );
    //                     };

    //                     const resultType = getType(f);

    //                     const fileContent = fs.readFileSync(
    //                         path.join(dir, subdir, f),
    //                         {
    //                             encoding: 'utf-8'
    //                         }
    //                     );

    //                     const fileValue = f.endsWith('.json')
    //                         ? {
    //                               ...JSON.parse(fileContent),
    //                               fileName: f
    //                           }
    //                         : {
    //                               content: fileContent.substr(0, 20),
    //                               fileName: f
    //                           };

    //                     !fileMap[resultType] && (fileMap[resultType] = []);

    //                     fileMap[resultType].push(fileValue);
    //                     return fileMap;
    //                 }, {});
    //                 return dirMap;
    //             }, {});
    //         } catch (e) {
    //             return e;
    //         }
    //     }
    // });
    return config;
}
