describe("Tests Pokemon Page", () => {
  it("Should search Mew", () => {
    cy.visit("/pokemon");

    cy.get("#search-pokemon").type("Mew");
    cy.get("#btn-src").click();

    cy.get("#card-name").should("have.text", "Mew");
    cy.get("#chip-name").should("have.text", "Psychic");
  });
});
