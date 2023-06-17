import {By} from "selenium-webdriver"
import {BasePage} from "./basePage"

export class HomePage extends BasePage {
    
//Locators
    searchBar: By = By.name('q');
    goToCart: By = By.xpath('//a[@class = "cart-popup__cta-link btn btn--secondary-accent"]');
    //goToCart: By = By.xpath('//a[@class = "site-header__icon site-header__cart"]');
    addToCart: By = By.xpath('//button[@class = "btn product-form__cart-submit"]');
    logo: By = By.className('class="site-header__logo-link"');
    increaseQuantity: By = By.xpath('//input[@id = "updates_45148436037923:0b67c36cab676f1b5b08ad984e2481fa"]');
    //increaseQuantity: By = By.xpath('//input[@name = "updates[]"]');
    checkOut: By = By.xpath('//input[@class = "cart__submit btn btn--small-wide"]');
    //url: string = ("https://outandbackoutdoor.com/products/kingdom-6-tent");


    constructor() {
        super({url: "https://outandbackoutdoor.com/products/kingdom-6-tent"});
    }
    async search(searchTerm: string) {
        return this.setInput(this.searchBar, `${searchTerm}\n`)
    }
    async multiClick(num, elementBy) {
        for (let i =0; i < num; i++) {
            await this.click(elementBy);
        } 
    }
}
