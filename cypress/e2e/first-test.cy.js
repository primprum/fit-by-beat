describe("First Test", () => {
  it("Check Title", () => {
    cy.visit("https://saucedemo.com");
    cy.title().should("eq", "Swag Labs");
  });
});
