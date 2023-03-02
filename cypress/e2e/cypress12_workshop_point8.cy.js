describe('Buy a black t-shirt', () => {
  it('black t-shirt should be bought', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("input[type='submit']").click();
      
    // Debes completar la prueba con los puntos 3 al 11 del flujo 
    cy.get('.inventory_list').contains('Sauce Labs Bolt T-Shirt').scrollIntoView();
    cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click();
    cy.get("#shopping_cart_container").scrollIntoView();
    cy.get("#shopping_cart_container").click();
    cy.get("#checkout").click();
    cy.get("#first-name").type ("Cypress");
    cy.get("#last-name").type ("Workshop");
    cy.get("#postal-code").type("0000");
    cy.get("#continue").click();
    cy.get("#finish").click();
    // Completado

    cy.get("#contents_wrapper > .checkout_complete_container > h2").should(
      "have.text",
      "Thank you for your order!"
    );
  });
});
     