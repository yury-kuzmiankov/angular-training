import { HomePage } from './pages/home.page';
import { browser } from 'protractor';

describe('recipe book', () => {
  let homePage: HomePage;

  beforeEach(() => {
    browser.waitForAngularEnabled(false);
    homePage = new HomePage();
    homePage.getPage();
  });

  it('should display title', () => {
    expect(homePage.getPageTitle()).toEqual('AngularTraining');
  });

  it('should display new recipe button', () => {
    expect(homePage.newRecipeButtonIsPresent()).toEqual(true);
  });

  it('should display login link', () => {
    expect(homePage.loginLinkIsPresent()).toEqual(true);
  });

  it('should login', () => {
    expect(homePage.canLogin()).toEqual(true);
  });

  it('should display register link', () => {
    expect(homePage.registerLinkIsPresent()).toEqual(true);
  });

  it('should register', () => {
    expect(homePage.canRegister()).toEqual(true);
  });

});
