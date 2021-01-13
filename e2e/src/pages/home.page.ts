import { Selectors } from './selectors';
import { Page } from './page';

export class HomePage extends Page{

  getPage() {
    return this.br.get('/');
  }

  newRecipeButtonIsPresent() {
    return this.elementIsPresent(Selectors.MAIN_PAGE.NEW_RECIPE_BUTTON);
  }

  loginLinkIsPresent() {
    return this.elementIsPresent(Selectors.MAIN_PAGE.LOGIN_LINK);
  }

  canLogin() {
    this.clickByElement(Selectors.MAIN_PAGE.LOGIN_LINK);
    return this.elementIsPresent(Selectors.LOGIN_PAGE.EMAIL_INPUT) &&
           this.elementIsPresent(Selectors.LOGIN_PAGE.PASSWORD_INPUT) &&
           this.elementIsPresent(Selectors.LOGIN_PAGE.SIGN_IN_BUTTON);
  }

  registerLinkIsPresent() {
    return this.elementIsPresent(Selectors.MAIN_PAGE.REGISTER_LINK);
  }

  canRegister() {
    this.clickByElement(Selectors.MAIN_PAGE.REGISTER_LINK);
    return this.elementIsPresent(Selectors.LOGIN_PAGE.EMAIL_INPUT) &&
           this.elementIsPresent(Selectors.LOGIN_PAGE.PASSWORD_INPUT) &&
           this.elementIsPresent(Selectors.LOGIN_PAGE.SIGN_IN_BUTTON);
  }

}
