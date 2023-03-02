import { PRODUCTLIST_SELECTORS } from '../selectors/productList.selectors';

export class ProductList {
    getProductList() { return cy.get(PRODUCTLIST_SELECTORS.productList) }
    getBlackTShirt() { return cy.get(PRODUCTLIST_SELECTORS.productList).contains('Sauce Labs Bolt T-Shirt') }
    getAddToCartButton() { return cy.get(PRODUCTLIST_SELECTORS.addToCartButton) }
    getShoppingCartContainer() { return cy.get(PRODUCTLIST_SELECTORS.shoppingCartContainer) }
}
