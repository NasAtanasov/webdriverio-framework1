
import allureReporter from "@wdio/allure-reporter";
import ContactUsPage from "../pageObjects/webdriver-university/contact-us.page";

describe('webdriveruniversity - contact us page', function() {  //"function()" is using for this.retries(1) instead of "async() =>"
    //this.retries(1); // Retry all tests in this suite up to 1 times

    beforeEach(async() => {
        // navigate to a new URL
        await ContactUsPage.open();
        console.log(`>>Browser Object: ${JSON.stringify(browser)}`);
    });

    it('00.Valid submission - submit all information', async function() {  //"function()" is using for this.retries(1) instead of "async() =>"
        //this.retries(2);
        allureReporter.addFeature("Contact us Page - valid Submission");
        allureReporter.addDescription("Validate cotact us page by submitting all data");
        allureReporter.addSeverity("critical");
        const firstName = await $('//*[@name="first_name"]');
        await firstName.setValue("Bugs");

        const lastName = await $('//*[@name="last_name"]');
        await lastName.setValue("Bunny");

        const email = await $('//*[@name="email"]');
        await email.setValue("Bugs.Bunny@example.com");

        const comment = await $('//*[@name="message"]');
        await comment.setValue("Hi there I'm Bugs Bunny\nWhat's up dog!");

        const submitButton = await $('//input[@value="SUBMIT"]');
        //await browser.debug();
        //await submitButton.click();
        await browser.waitThenClick(submitButton);

        const successfulSubmissionHeader = $('#contact_reply > h1');
        console.log(`successfulSubmissionHeader Element: `+ JSON.stringify(await successfulSubmissionHeader));
        await expect(successfulSubmissionHeader).toHaveText('Thank You for your Message!');  //wdio before: function (capabilities, specs) {require('expect-webdriverio').setOptions({wait: 10000, interval: 500});

        // const successfulSubmissionHeader2 = await $('#contact_reply > h1').getText();        //Jest do not have timeout
        // expect(successfulSubmissionHeader2).toEqual('Thank You for your Message!555');
    });

    it('01.Invalid submission - dont submit all information', async() => {
        allureReporter.addFeature("Contact us Page - invalid Submission");
        allureReporter.addDescription("Validate cotact us page by not submitting all data");
        allureReporter.addSeverity("normal");
        const firstName = await $('//*[@name="first_name"]');
        await firstName.setValue("Bugs");

        const lastName = await $('//*[@name="last_name"]');
        await lastName.setValue("Bunny");

        const email = await $('//*[@name="email"]');
        await email.setValue("Bugs.Bunnyexample.com");

        const comment = await $('//*[@name="message"]');
        await comment.setValue("Hi there I'm Bugs Bunny\nWhat's up dog!");

        const submitBtn = await $('//input[@value="SUBMIT"]');
        await submitBtn.click();

        const successfulSubmissionHeader = $('body');
        await expect(successfulSubmissionHeader).toHaveTextContaining(['Error: Invalid email address'], ['Error: all fields are requires']); 
    });
});