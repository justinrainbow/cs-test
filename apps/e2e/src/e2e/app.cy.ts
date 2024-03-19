import { getGreeting } from '../support/app.po';

describe('web-e2e', () => {
  it('should display welcome message', () => {
    cy.visit('/');
    // Custom command example, see `../support/commands.ts` file
    // cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains(/Welcome/);
  });

  describe('/users page', () => {
    it('should redirect to home', () => {
      cy.visit('/users');
      cy.url().should('not.contain', '/users');
    });
  });

  describe('/users/[id] page', () => {
    it('should display users name', () => {
      cy.visit('/users/1');

      // tbd
    });
  });
});
