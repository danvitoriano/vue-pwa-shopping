// https://docs.cypress.io/api/introduction/api.html

describe("Test the Group4 View", () => {
  it("should type on modal, add an user and show success message", () => {
    cy.visit("/group4");
    cy.get("#btn-add").click();
    cy.contains("span", "New User");
    cy.get("#first_name").type("Vincent");
    cy.get("#last_name").type("Cypress");
    cy.get("#email").type("test@gmail.com");
    cy.get("#avatar").type("https://www.segurofacil.com.br/content/images/default-user.png");
    cy.get("#btn-submit").click();
    cy.contains("#msg-success", "Your request was finished successfully.")
  });
});
