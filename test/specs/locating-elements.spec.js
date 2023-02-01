describe('locating elements', () => {
    beforeEach(async () =>{
        await browser.maximizeWindow();   
    })
  
    it('$ - locate element', async() => {
        await browser.url("https://selectors.webdriveruniversity.com/");

        await browser.$("//a[@href='#portfolio']").click();
        await browser.pause(3000);

        //await browser.$("[data-target='#portfolioModal1,]").click();
        const webdriveioButton = await $("[data-target='#portfolioModal1']");
        await webdriveioButton.click();
        await browser.pause(3000);

    });
});