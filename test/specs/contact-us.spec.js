
import allureReporter from "@wdio/allure-reporter";
import ContactUsPage from "../pageObjects/webdriver-university/contact-us.page";

describe('webdriveruniversity - contact us page', function() {  //"function()" is using for this.retries(1) instead of "async() =>"
    //this.retries(1); // Retry all tests in this suite up to 1 times

    beforeEach(async() => {
        // navigate to a new URL
        await ContactUsPage.open();
        console.log(`>>Browser Object: ${JSON.stringify(browser)}`);
    });

    it('00.Valid submission - submit all information', async function() {  //"function()" is using for this.retries(1) instead of "async() =>"        //this.retries(2);
        allureReporter.addFeature("Contact us Page - valid Submission");
        allureReporter.addDescription("Validate contact us page by submitting all data");
        allureReporter.addSeverity("critical");

        ContactUsPage.submitForm("Bugs", "Bunny", "Bugs.Bunny@example.com", "Hi there I'm Bugs Bunny\nWhat's up dog!");

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

    it('03.Only type a first name', async() => {
        ContactUsPage.submitForm("Bugs3", "", "", "");
        await expect(ContactUsPage.unsuccessfulSubmissionHeader).toHaveTextContaining(['Error: Invalid email address'], ['Error: all fields are requires']);
    });
});