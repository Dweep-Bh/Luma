import Signin from "../../support/pages/Signin"

class SigninSpecService {

    init() {
        Signin.getUrl()
        Signin.clickOnSignin()
    }

    SignInAsUser() {
        Signin.getUrl()
        Signin.clickOnSignin()

        Signin.enterEmail()
        Signin.enterPassword()
        Signin.submitButton()
        Signin.selectParticularProduct()
        Signin.sizeParticularProduct()
        Signin.chooseProductColor()
        Signin.addTocart()
        Signin.clickOnAddtocart()


    }


}
export default new SigninSpecService;