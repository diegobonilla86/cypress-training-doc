import { BILL_SELECTORS } from '../selectors/bill.selectors';

export class Bill {
    getFinishButton() { return cy.get(BILL_SELECTORS.finishButton) }
}
