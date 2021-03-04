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

// Teste simulando o click na reserva e cancelando
describe("My First Test", () => {
  it("http://localhost:8080/", () => {
    cy.visit("/grupo1");

    cy.get("#idDiv-Teste").find("#idBtnReserva-test").click();

    cy.get('#idForm-T1').find("#idForm-T2").find("#idForm-T3").find("#idForm-T4").find("#idPrimeiroNome")
      .type('Demetrius')
      .should('have.value', 'Demetrius')

    cy.get('#idForm-T1').find("#idForm-T2").find("#idForm-T3").find("#idForm-T5").find("#idUtimoNome")
    .type('Tavares')
    .should('have.value', 'Tavares')

    cy.get('#idForm-T1').find("#idForm-T2").find("#idForm-T3").find("#idForm-T6").find("#idEmail")
    .type('dd@gmail.com')
    .should('have.value', 'dd@gmail.com')

    cy.get('#idForm-T1').find("#idForm-T2").find("#idForm-T31").find("#idForm-T41").find("#idCep")
    .type('01310100')
    .should('have.value', '01310100')

    cy.get('#idForm-T1').find("#idForm-T21").click()

    cy.get("#idQte").then(function($elem) {
      cy.log($elem.text())
    })

  });
});