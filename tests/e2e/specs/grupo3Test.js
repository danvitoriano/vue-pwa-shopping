describe("Cartão cadastrado com sucesso", () => {
  it("Cartão cadastrado", () => {
    cy.visit("/grupo3");

    cy.get(".v-overlay__scrim").click(-50, -50, { force: true });

    cy.get("h1").should("contain", "Cartão de Crédito");

    cy.get("input#cardNumber").type("5226123412341234");
    cy.get("input#cardName").type("Walter Desney");
    cy.get("input#cardExpirationDate").type("102026");
    cy.get("input#CVV").type("123");

    cy.get("button#saveCard").click();

    cy.get("div.v-alert__content").should(
      "contain",
      "Dados salvos com sucesso:  Walter Desney"
    );
  });
});

describe("Cartão com erro", () => {
  it("Erro numero do cartao", () => {
    cy.visit("/grupo3");

    cy.get(".v-overlay__scrim").click(-50, -50, { force: true });

    cy.get("input#cardNumber").type("52261234123412abc");

    cy.get("div.v-messages__message").should(
      "contain",
      "Insira um cartão valido"
    );
  });

  it("Erro nome do cartao", () => {
    cy.visit("/grupo3");

    cy.get(".v-overlay__scrim").click(-50, -50, { force: true });

    cy.get("input#cardName").type("W $$$$");

    cy.get("div.v-messages__message").should(
      "contain",
      "Insira um cartão valido"
    );
  });

  it("Erro nome do cartao", () => {
    cy.visit("/grupo3");

    cy.get(".v-overlay__scrim").click(-50, -50, { force: true });

    cy.get("input#cardExpirationDate").type("99999");

    cy.get("div.v-messages__message").should(
      "contain",
      "insira uma data valida"
    );
  });
});
