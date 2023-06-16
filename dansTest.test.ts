import {dansPage} from './dansPageObjects';
import { Driver } from 'selenium-webdriver/chrome'
const fs = require('fs')
const dans = new dansPage();

test('do a search', async () => {
    await dans.navigate()
    await dans.search('base layer')
    let text = await dans.getResults()
    expect(text).toContain('base layer')
    await fs.writeFile(`${__dirname}/google.png`,
     await dans.driver.takeScreenshot(), "base64",
     (e) => {
         if (e) console.error(e)
         else console.log('Save Succesful')
     }
     )
    fs.writeFile(`${__dirname}/test.txt`, text, (e) => {
        if (e) console.error(e)
        else console.log('save Succesful')
    })

})
afterAll(async () => {
    await dans.driver.quit()
})
