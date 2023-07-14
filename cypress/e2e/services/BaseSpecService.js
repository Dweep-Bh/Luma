import LoginSpecService from "./LoginSpecService";
import SigninSpecService from "./SigninSpecService";

class BaseSpecService {
  init() {
    SigninSpecService.init()
    SigninSpecService.SignInAsUser()
  }
}
export default new BaseSpecService;