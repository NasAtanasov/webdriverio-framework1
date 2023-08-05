import allureReporter from "@wdio/allure-reporter";
import ContactUsPage from  "../../pageObjects/webdriver-university/contact-us.page";

describe('webdriveruniversity - contact us page', function() {  //"function()" is using for this.retries(1) instead of "async() =>"
    //this.retries(1); // Retry all tests in this suite up to 1 times

    beforeEach(async() => {
        // navigate to a new URL
        await ContactUsPage.open();
        //console.log(`>>Browser Object: ${JSON.stringify(browser)}`);
        // console.log("CONFIG ENV: " + browser.options.environment);
        // console.log("CONFIG EMAIL: " + browser.options.email);
        // console.log("CONFIG FIRST NAME: " + browser.options.firstName);
        // console.log("CONFIG PASSWORD: " + browser.options.password);
        // console.log("BASE URL: " + browser.options.baseUrl);
    });

    it('00.Valid submission - submit all information', async function() {  //"function()" is using for this.retries(1) instead of "async() =>"        //this.retries(2);
        allureReporter.addFeature("Contact us Page - valid Submission");
        allureReporter.addDescription("Validate contact us page by submitting all data");
        allureReporter.addSeverity("critical");

        // ContactUsPage.submitForm_UsingRandomData("Bugs", "Bunny");
        await console.log("\u001b[1;31m " + browser.options.baseUrl + "\u001b[0m");
        await console.log("\u001b[1;32m " + browser.options + "\u001b[0m");
        console.log(browser.options);

        await console.log("\u001b[1;33m " + browser.options.firstName + "\u001b[0m");
        await browser.pause(12000);
        ContactUsPage.submitForm_UsingRandomData(browser.options.firstName, "Bunny");
        
        await expect(ContactUsPage.successfulSubmissionHeader).toHaveText('Thank You for your Message!');

        // const successfulSubmissionHeader2 = await $('#contact_reply > h1').getText();        //Jest do not have timeout
        // expect(successfulSubmissionHeader2).toEqual('Thank You for your Message!555');
    });

    it('01.Invalid submission - dont submit all information', async() => {
        allureReporter.addFeature("Contact us Page - invalid Submission");
        allureReporter.addDescription("Validate contact us page by not submitting all data");
        allureReporter.addSeverity("normal");

        ContactUsPage.submitForm("Bugs2", "Bunny2", "Bugs.Bunny2@example", "Hi there I'm Bugs Bunny\nWhat's up dog!222");

        await expect(ContactUsPage.unsuccessfulSubmissionHeader).toHaveTextContaining(['Error: Invalid email address'], ['Error: all fields are requires']);
    });

    it('02.Only type a first name', async() => {
        ContactUsPage.submitForm("Bugs3", "", "", "");
        await expect(ContactUsPage.unsuccessfulSubmissionHeader).toHaveTextContaining(['Error: Invalid email address'], ['Error: all fields are requires']);
    });
});