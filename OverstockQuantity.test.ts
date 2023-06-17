//Imports
//import { Builder, By, Capabilities, WebDriver, until } from "selenium-webdriver";
//import {BasePage} from "./basePage";
import { HomePage } from "./HomePage";

// Consts
const chromedriver = require('chromedriver');
const fs = require('fs');
const newHomePage = new HomePage();


//Test
test('OverstockTest', async () => {
    
    //Go to website
    await newHomePage.navigate();
    await newHomePage.driver.manage().window().maximize();

    //add multiple items to cart and get arrow
    await newHomePage.driver.sleep(1000);
    await newHomePage.multiClick(2, newHomePage.addToCart);

    //take screenshot
    await newHomePage.driver.sleep(3000);
     newHomePage.driver.takeScreenshot().then(function(data){
        var base64Data = data.replace(/^data:image\/png;base64,/,"")
        fs.writeFile("TestResults.png", base64Data, 'base64', function(e) {
            if (e) console.error(e)
        });
     });

    //quit
    newHomePage.driver.quit;
});