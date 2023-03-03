describe('add items to basket', () => {
    beforeEach(async() => {
        await browser.maximizeWindow();
        await browser.url("https://automationteststore.com/");
    });
    it("0. add specific 'skincare product' to basket & validate car total", async() => {
        const skincareLinks = await $$("//a[contains(text(), 'Skincare')]");
        await skincareLinks[1].click();

        const skincareProducts_Header_Links = await $$('.fixed_wrapper .prdocutname');
        const itemPrices = [];

        for (const header of skincareProducts_Header_Links) {
            const tempHeaderText = await header.getText();

            if (tempHeaderText.toLowerCase() == "Creme Precieuse Nuit 50ml".toLowerCase() || tempHeaderText.toLowerCase() == "Total Moisture Facial Cream".toLowerCase()) {

                const attr = await header.getAttribute("href");

                //console.log(attr);
                //https://automationteststore.com/index.php?rt=product/product&path=43&product_id=93
                //https://automationteststore.com/index.php?rt=product/product&path=43&product_id=66

                const itemId = attr.split("id=").pop(); //93  66
                console.log(itemId);

                //a[@data-id="66"]
                //a[@data-id="93"]
                await $(`//a[@data-id='${itemId}']`).click();

                // //a[@data-id="93"]/following-sibling::div/div[@class="pricenew"] | //a[@data-id="66"]/following-sibling::div/div[@class="oneprice"]
                itemPrices.push(
                    await $(`//a[@data-id='${itemId}']/following-sibling::div/div[@class="pricenew"]` + ` | //a[@data-id='${itemId}']/following-sibling::div/div[@class="oneprice"]`).getText()
                )

            }
        }
        await browser.pause(5000);
    });
});
