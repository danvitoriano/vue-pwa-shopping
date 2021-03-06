// https://docs.cypress.io/api/introduction/api.html

describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("/");
  });
});
