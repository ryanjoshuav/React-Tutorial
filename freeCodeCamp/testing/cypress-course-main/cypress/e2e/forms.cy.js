describe("form tests", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });

  it("Test subscribe form", () => {
    cy.contains(/Testing Forms/i);
    cy.getDataTest("subscribe-form").find("input").as("subscribe-input");
    cy.get("@subscribe-input").type("check@gmail.com");
    cy.contains(/Successfully subbed: check@gmail.com!/i).should("not.exist");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Successfully subbed: check@gmail.com!/i).should("exist");
    cy.wait(3000)
      .contains(/Successfully subbed: check@gmail.com!/i)
      .should("not.exist");

    cy.get("@subscribe-input").type("check@gmail.io");
    cy.contains(/Invalid email/i).should("not.exist");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Invalid email/i).should("exist");
    cy.wait(3000)
      .contains(/Successfully subbed: check@gmail.com!/i)
      .should("not.exist");

    cy.contains(/fail!/i).should("not.exist");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/fail!/i).should("exist");
    cy.wait(3000).contains(/fail!/i).should("not.exist");
  });
});
