// https://docs.cypress.io/api/introduction/api.html

describe("Validação de busca de notícia", () => {
    it("Visits the app root url", () => {
        cy.visit("/news");
        cy.get('#input-subject').type('soja')
        cy.get('#search-news').click()
    });
});
