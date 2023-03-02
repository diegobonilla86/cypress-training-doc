import { SHOPPINGCART_SELECTORS } from '../selectors/shoppingCart.selectors';

export class ShoppingCart {
    getCheckoutButton() { return cy.get(SHOPPINGCART_SELECTORS.checkoutButton) }
}
