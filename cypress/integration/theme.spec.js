import { themeSwitch } from '../support';

const getAppBackgroundColor = () => Cypress.$('body').css('background-color');

beforeEach(() => {
  cy.visit('/');
});

context('Theme', () => {
  specify('user should be able to switch theme', () => {
    const originalBgColor = getAppBackgroundColor();

    themeSwitch()
      .find('input')
      .check()
      .then(() => {
        const newBgColor = getAppBackgroundColor();
        cy.wrap(newBgColor).should('not.be.equal', originalBgColor);
      });
  });
});
