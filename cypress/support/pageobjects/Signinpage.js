/// <reference types="Cypress" />
class Signinpage {

    getClickOnSignin() {
        return cy.contains('Sign In')
    }

    getEmail() {
        return cy.contains('Email')
    }
    getPassword() {
        return cy.get('input[title="Password"]')
    }

    getSignIn() {
        return cy.get('button[class="action login primary"]')
    }
    getAllproducts() {
        return cy.get('li[class="product-item"]')
    }
    getSize() {
        return cy.get('div[class="swatch-option text"]')
    }
    getColor() {
        return cy.get('div[class="swatch-option color"]')
    }
    getAddtocart() {
        return cy.get('button[id="product-addtocart-button"]')
    }
    getClickOncartButton() {
        return cy.get('a[class="action showcart"]')
    }

}
export default new Signinpage;
