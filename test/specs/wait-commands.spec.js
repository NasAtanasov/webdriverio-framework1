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

    it('waitForClickable', async() => {
        const clickMe_Button = await $('#button1');
        //await clickMe_Button.waitForClickable({timeout: 6000});
        await clickMe_Button.waitForClickable();
        await clickMe_Button.click();
        await browser.pause(1500);
    });

    it('waitForDisplayed', async() => {
        const clickMe_Button = await $('#button1');
        await clickMe_Button.waitForDisplayed();
        await clickMe_Button.click();
    });

    it('waitForExist', async() => {
        const clickMe_Button = await $('#button1');
        await clickMe_Button.waitForExist();
        //await clickMe_Button.click();                            //element not interactable
    });

    it('waitUntil', async() => {
        await browser.url("/Accordion/index.html");
        const loadingStatus_UI = await $('#text-appear-box');

        await loadingStatus_UI.waitUntil(async function(){
            return(await this.getText()) === 'LOADING COMPLETE.'
        },
        {
            timeout: 15000,
            timeoutMsg: 'expected text to be different after 15 seconds'
        })
    });
    
});