describe('wait commands - examples', () => {
    beforeEach(async() => {
        await browser.maximizeWindow();
        await browser.url("https://www.webdriveruniversity.com/Ajax-Loader/index.html");
    });

    it('pause command', async() => {
        const clickMe_Button = await $("//*[text()='CLICK ME!']/..");
        
        await browser.pause(5000);
        await clickMe_Button.click();
        await browser.pause(2500);  
        
    });
    
});