import {By} from "selenium-webdriver"
import {BasePage} from "./basePage"

export class Google extends BasePage {
    searchBar: By = By.name("q");
    results: By = By.id('rso')
    constructor() {
        super({url: "https://outandbackoutdoor.com/?utm_medium=social&utm_source=linktree&utm_campaign=shop%2C+sell%2C+and+save+on+outdoor+gear"});
    }
    async search(searchTerm: string) {
        return this.setInput(this.searchBar, `${searchTerm}\n`)
    }
    async getResults() {
        return this.getText(this.results)
    }
}