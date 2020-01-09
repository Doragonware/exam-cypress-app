import { Given, Then } from "cypress-cucumber-preprocessor/steps";
 
const url = 'http://localhost:4200'
Given('I open the home page', () => {
  cy.visit(url);
});

Then('the title on the page says {string}', (check) => {
  cy.title().should('include', check);
});