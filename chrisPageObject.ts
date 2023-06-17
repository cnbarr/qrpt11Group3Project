import {By} from "selenium-webdriver";
import {BasePage} from "./basePage";

export class chrisPage extends BasePage {
    cookieBtn: By = By.id('CybotCookiebotDialogBodyButtonAccept');
    couponX: By = By.className('needsclick  kl-private-reset-css-Xuajs1')
    emailInput: By = By.id('email_61897705');
    signUpButton: By = By.className('needsclick go952291206 kl-private-reset-css-Xuajs1');
    errorMessage: By = By.id('klaviyo_ariaid_2');
    expectedErrorMessage = 'Please enter a valid email address';

    constructor() {
        super({ url: "https://outandbackoutdoor.com/" });
    };
    
};