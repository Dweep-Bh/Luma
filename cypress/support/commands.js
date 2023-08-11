// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

import Signinpage from "./pageobjects/Signinpage";

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('clickOnProductWithTitle', { prevSubject: 'element' }, ($subject, productTitle) => {
    // `$subject` is the result of the previous command in the chain (e.g., cy.get())
    return cy.wrap($subject).each(($ele, index, $list) => {
        const currentProductTitle = $ele.find('img').attr('alt');
        if (currentProductTitle === productTitle) {
            cy.wrap($ele).click();
            return false; // Stop iterating
        }
    });
});
Cypress.Commands.add('clickOnElementWithTextAndAssertVisibility', { prevSubject: 'element' }, ($subject, searchText) => {
    // `$subject` is the result of the previous command in the chain (e.g., cy.get())
    return cy.wrap($subject)
        .each(($ele, index, $list) => {
            const elementText = $ele.text().trim();
            if (elementText === searchText) {
                cy.wrap($ele).click({ force: true });
            }
        })
        .should('be.visible');
});
Cypress.Commands.add('clickOnElementAtIndex', { prevSubject: 'element' }, ($subject, targetIndex) => {
    // `$subject` is the result of the previous command in the chain (e.g., cy.get())
    return cy.wrap($subject)
        .each(($ele, index) => {
            if (index === targetIndex) {
                cy.wrap($ele).click({ force: true });
            }
        });
});
Cypress.Commands.add('customClick', { prevSubject: 'element' }, ($subject) => {
    // `$subject` is the result of the previous command in the chain (e.g., cy.get())
    cy.wrap($subject).click({ force: true });
});
Cypress.Commands.add("clickNEnterText", (elementSelector, text) => {
    //cy.get(elementSelector, { timeout: elementTimeout }).clear({ force: true });
    // cy.log(`Clicked on ${elementText}`);
    cy.get(elementSelector, { timeout: elementTimeout }).type(text);
    //cy.get(elementSelector).type(text);
});
// commands.js

Cypress.Commands.add('signInWithEmail', () => {
    const email = Cypress.env('email');

    Signinpage.getEmail().type(email);
});
Cypress.Commands.add('enterPassword', () => {
    const password = Cypress.env('password');
    Signinpage.getPassword().type(password);
});


