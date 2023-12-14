Cypress.Commands.add("login", (username, password) => {
  cy.clearCookies();
  cy.clearLocalStorage();

  cy.visit("http://zero.webappsecurity.com/login.html");
  cy.url().should("include", "login.html");

  cy.get('input[name="user_login"]').clear().type(username);
  cy.get('input[name="user_password"]').clear().type(password);

  cy.get('input[name="submit"]').click();
});

Cypress.Commands.add("login_sauce", (username, password) => {
  cy.get('input[id="user-name"]').clear();
  cy.get('input[id="password"]').clear();

  if (username) {
    cy.get('input[id="user-name"]').type(username);
  }

  if (password) {
    cy.get('input[id="password"]').type(password);
  }

  cy.get('input[id="login-button"]').click();
});

Cypress.Commands.add("check_login", (result) => {
  // Validate the 'result' parameter
  if (result !== "success" && result !== "failed") {
    throw new Error("Invalid 'result' parameter. It must be 'success' or 'failed'.");
  }

  if (result === "success") {
    // Check if the URL changes to the dashboard page upon successful login
    cy.url().should("include", "/inventory.html");

    // Check for a dashboard element to confirm successful login
    cy.get(".inventory_container").should("be.visible");
  } else if (result === "failed") {
    // Check if the URL does not change into the dashboard upon failed login
    cy.url().should("not.include", "/inventory.html");

    // Check for the absence of a dashboard element to confirm failed login
    cy.get(".inventory_container").should("not.exist");
  }
});
