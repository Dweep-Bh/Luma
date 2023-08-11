import Signinpage from "../pageobjects/Signinpage";

class Signin {
    clickOnSignin() {
        return Signinpage.getClickOnSignin().click()
    }

    getUrl() {
        const baseUrl = Cypress.env('baseUrl')
        cy.visit(baseUrl);
    }

    enterEmail() {
        return cy.signInWithEmail();

    }

    enterPassword() {
        return cy.enterPassword();
    }
    submitButton() {
        return Signinpage.getSignIn().customClick();
    }

    selectParticularProduct() {
        cy.wait(4000);

        return Signinpage.getAllproducts().clickOnProductWithTitle('Hero Hoodie');
    }
    sizeParticularProduct() {
        cy.wait(4000);
        return Signinpage.getSize().clickOnElementWithTextAndAssertVisibility('XL');
    }

    chooseProductColor() {
        return Signinpage.getColor().clickOnElementAtIndex(2);
    }
    addTocart() {
        return Signinpage.getAddtocart().customClick();
    }
    clickOnAddtocart() {
        cy.wait(4000)
        return Signinpage.getClickOncartButton().customClick();
    }
}

export default new Signin;