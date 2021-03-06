describe("IMC calculado com sucesso", () => {
    it("IMC calculado", () => {
      cy.visit("/grupo2");

      cy.get("h1").should("contain", "Calculadora de IMC");
  
      cy.get("input#personName").type("teste teste");
      cy.get("input#personAge").type("30");
      cy.get("input#personHeight").type("170");
      cy.get("input#personWeight").type("90");
      cy.get("input#personActivityLevel").type("3");
  
      cy.get("button#calculateIMC").click();
  
      cy.get("div.v-alert__content").should(
        "contain",
        "Resultado IMC:  Obeso"
      );
    });
});