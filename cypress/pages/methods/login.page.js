import { LOGIN_SELECTORS } from '../selectors/login.selectors';

export class Login {
    getUser() { return cy.get(LOGIN_SELECTORS.user) }
    getPassword() { return cy.get(LOGIN_SELECTORS.password) }
    getLoginButton() { return cy.get(LOGIN_SELECTORS.loginButton) }
}
