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
        return Signinpage.getEmail().type('dweep25@yopmail.com')
    }

    enterPassword() {
        return Signinpage.getPassword().type('dweep!@#123456')
    }
    submitButton() {
        return Signinpage.getSignIn().click()
    }

    selectParticularProduct() {
        cy.wait(4000);

        return Signinpage.getAllproducts().each(($ele, index, $list) => {
            const productTitle = $ele.find('img').attr('alt');
            if (productTitle === 'Hero Hoodie') {
                cy.wrap($ele).click()
                return false;
            }
        })
    }
    sizeParticularProduct() {
        cy.wait(4000);
        return Signinpage.getSize().each(($ele, index, $list) => {
            const productsize = $ele.text()
            if (productsize.trim('') === 'XL') {
                cy.wrap($ele).click({ force: true })
            }
        }).should('be.visible', 'XL')
    }

    chooseProductColor() {
        return Signinpage.getColor().each(($ele, index, $list) => {
            if (index === 2) {
                cy.wrap($ele).click({ force: true });
            }
        })
    }
    addTocart() {
        return Signinpage.getAddtocart().click()
    }
    clickOnAddtocart() {
        cy.wait(4000)
        return Signinpage.getClickOncartButton().click()
    }
}

export default new Signin;