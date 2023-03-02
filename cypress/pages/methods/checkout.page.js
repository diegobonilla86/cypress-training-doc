import { CHECKOUT_SELECTORS } from '../selectors/checkout.selectors';

export class Checkout {
    getFirstName() { return cy.get(CHECKOUT_SELECTORS.firstName) }
    getLastName() { return cy.get(CHECKOUT_SELECTORS.lastName) }
    getPostalCode() { return cy.get(CHECKOUT_SELECTORS.postalCode) }
    getContinueButton() { return cy.get(CHECKOUT_SELECTORS.continueButton) }
}
