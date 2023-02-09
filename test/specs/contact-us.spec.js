
describe('webdriveruniversity - contact us page', () => {

    beforeEach(async() => {
        await browser.maximizeWindow();
        // navigate to a new URL
        await browser.url('/Contact-Us/contactus.html')
        console.log(`>>Browser Object: ${JSON.stringify(browser)}`);
    });

    it('Valid submission - submit all information', async () => { 
        
        const firstName = await $('//*[@name="first_name"]');
        await firstName.setValue("Bugs");
      
        const lastName = await $('//*[@name="last_name"]');
        await lastName.setValue("Bunny");
        
        const email = await $('//*[@name="email"]');  
        await email.setValue("Bugs.Bunny@example.com");      
        
        const comment = await $('//*[@name="message"]'); 
        await comment.setValue("Hi there I'm Bugs Bunny\nWhat's up dog!"); 
        
        const submitBtn = await $('//input[@value="SUBMIT"]');
        await submitBtn.click();
       
        const successfulSubmissionHeader = $('#contact_reply > h1');
        await expect(successfulSubmissionHeader).toHaveText('Thank You for your Message!');  //wdio before: function (capabilities, specs) {require('expect-webdriverio').setOptions({wait: 10000, interval: 500});
                
        // const successfulSubmissionHeader2 = await $('#contact_reply > h1').getText();        //Jest do not have timeout
        // expect(successfulSubmissionHeader2).toEqual('Thank You for your Message!555');    
    });
    
    it('Invalid submission - dont submit all information', async() => {       
        
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