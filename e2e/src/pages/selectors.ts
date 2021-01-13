export class Selectors {
  static readonly MAIN_PAGE = {
    NEW_RECIPE_BUTTON: 'app-recipe-list > div.row > div.col-xs-12 > button.btn.btn-success',
    LOGIN_LINK: 'ul.nav:nth-child(2) > li:nth-child(2) > a:nth-child(1)',
    REGISTER_LINK: 'ul.nav:nth-child(2) > li:nth-child(1) > a:nth-child(1)'
  };

  static readonly LOGIN_PAGE = {
    EMAIL_INPUT: '#email',
    PASSWORD_INPUT: '#password',
    SIGN_IN_BUTTON: 'button.btn.btn-primary'
  };

  static readonly REGISTER_PAGE = {
    EMAIL_INPUT: '#email',
    PASSWORD_INPUT: '#password',
    SIGN_IN_BUTTON: 'button.btn.btn-primary'
  };

}
