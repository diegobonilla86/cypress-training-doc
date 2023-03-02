import { PAYMENTCONFIRMATION_SELECTORS } from '../selectors/paymentConfirmation.selectors';

export class PaymentConfirmation {
    getConfirmationMessage() { return cy.get(PAYMENTCONFIRMATION_SELECTORS.confirmationMessage) }
}
