import { chrisPage } from "./chrisPageObject";
const chris = new chrisPage();

describe('Newsletter Email Error Test', () => {
  const url = 'https://outandbackoutdoor.com/pages/careers'; // Replace with the actual URL
  

  beforeEach(async () => {
    await chris.navigate(url);
  });
  
  afterAll(async () => {
    await chris.driver.quit(); 
  });

  test('Sign up for newsletter', async () => {
    await chris.click(chris.cookieBtn);
    await chris.driver.sleep(5000);
    await chris.getElement(chris.couponX);
    await chris.click(chris.couponX);
    await chris.click(chris.emailInput);
    await chris.setInput(chris.emailInput, 'chrisbarr@g');
    await chris.click(chris.signUpButton);
    const errorElement = await chris.getElement(chris.errorMessage);
    const errorText = await errorElement.getText();
    expect(errorText).toContain(chris.expectedErrorMessage);
  });
});
