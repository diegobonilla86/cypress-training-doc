import { ProductList } from "../pages/methods/productList.page";
import { ShoppingCart } from "../pages/methods/shoppingCart.page";
import { Login } from "../pages/methods/login.page";
import { Checkout } from "../pages/methods/checkout.page";
import { Bill } from "../pages/methods/bill.page";
import { PaymentConfirmation } from "../pages/methods/paymentConfirmation.page";

const productList = new ProductList();
const shoppingCart = new ShoppingCart();
const login = new Login();
const checkout = new Checkout();
const bill = new Bill();
const paymentConfirmation = new PaymentConfirmation();

describe('Buy a black t-shirt', () => {
  it('black t-shirt should be bought', () => {

    cy.visit('https://www.saucedemo.com/');
    login.getUser().type("standard_user");
    login.getPassword().type("secret_sauce");
    login.getLoginButton().click();
    
    // Debes completar la prueba con los puntos 3 al 11 del flujo 
    productList.getBlackTShirt().scrollIntoView();
    productList.getAddToCartButton().click();
    productList.getShoppingCartContainer().scrollIntoView();
    productList.getShoppingCartContainer().click();
    shoppingCart.getCheckoutButton().click();
    checkout.getFirstName().type ("Cypress");
    checkout.getLastName().type ("Workshop");
    checkout.getPostalCode().type("0000");
    checkout.getContinueButton().click();
    bill.getFinishButton().click();
    // Completado

    paymentConfirmation.getConfirmationMessage().should(
      "have.text",
      "Thank you for your order!"
    );
  });
});
     