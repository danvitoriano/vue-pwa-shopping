describe("IMC obeso", () => {
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

describe("IMC normal", () => {
    it("IMC calculado", () => {
      cy.visit("/grupo2");

      cy.get("h1").should("contain", "Calculadora de IMC");
  
      cy.get("input#personName").type("teste teste");
      cy.get("input#personAge").type("30");
      cy.get("input#personHeight").type("170");
      cy.get("input#personWeight").type("60");
      cy.get("input#personActivityLevel").type("3");
  
      cy.get("button#calculateIMC").click();
  
      cy.get("div.v-alert__content").should(
        "contain",
        "Resultado IMC:  Normal"
      );
    });
});

describe("IMC magreza", () => {
    it("IMC calculado", () => {
      cy.visit("/grupo2");

      cy.get("h1").should("contain", "Calculadora de IMC");
  
      cy.get("input#personName").type("teste teste");
      cy.get("input#personAge").type("30");
      cy.get("input#personHeight").type("170");
      cy.get("input#personWeight").type("50");
      cy.get("input#personActivityLevel").type("3");
  
      cy.get("button#calculateIMC").click();
  
      cy.get("div.v-alert__content").should(
        "contain",
        "Resultado IMC:  Magreza"
      );
    });
});

describe("IMC sobrepeso", () => {
    it("IMC calculado", () => {
      cy.visit("/grupo2");

      cy.get("h1").should("contain", "Calculadora de IMC");
  
      cy.get("input#personName").type("teste teste");
      cy.get("input#personAge").type("30");
      cy.get("input#personHeight").type("170");
      cy.get("input#personWeight").type("80");
      cy.get("input#personActivityLevel").type("3");
  
      cy.get("button#calculateIMC").click();
  
      cy.get("div.v-alert__content").should(
        "contain",
        "Resultado IMC:  Sobrepeso"
      );
    });
});

describe("IMC erro", () => {
    it("IMC erro", () => {
      cy.visit("/grupo2");

      cy.get("h1").should("contain", "Calculadora de IMC");
  
      cy.get("input#personName").type("teste teste");
      cy.get("input#personAge").type("30");
      cy.get("input#personHeight").type("h");
      cy.get("input#personWeight").type("50");
      cy.get("input#personActivityLevel").type("3");
  
      cy.get("button#calculateIMC").click();
  
      cy.get("div.v-alert__content").should(
        "contain",
        "dados inválidos"
      );
    });
});