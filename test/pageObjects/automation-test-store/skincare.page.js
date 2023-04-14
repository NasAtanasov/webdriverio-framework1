import BasePage from "./base.page";
import ItemComponent from "../automation-test-store/components/item.comp";
import headerNavComp from "../automation-test-store/components/header-nav.comp";
import CartPage from "../automation-test-store/cart.page"

class SkinCarePage extends BasePage {
    get itemComponent() {
        return ItemComponent;
    }

    async addSpecificItems_ValidateTotals(item1, item2) {
        const skincareProducts_Header_Links = await ItemComponent.itemHeaderLinks;

        const itemPrices = []; //$220.00 $38.00

        for (const header of skincareProducts_Header_Links) {
            const tempHeaderText = await header.getText();

            if (tempHeaderText.toLowerCase() == item1.toLowerCase() || tempHeaderText.toLowerCase() == item2.toLowerCase()) {

                const attr = await header.getAttribute("href");

                const itemId = attr.split("id=").pop();
                console.log(itemId);

                await $(`//a[@data-id='${itemId}']`).click();

                itemPrices.push(
                    await $(`//a[@data-id='${itemId}']/following-sibling::div/div[@class="pricenew"]` + ` | //a[@data-id='${itemId}']/following-sibling::div/div[@class="oneprice"]`).getText()
                )

            }
            const formattedItemPrice = [];
            itemPrices.forEach((price) => {
                formattedItemPrice.push(price.replace("$",""));
            });

            var itemsTotal = 0;
            formattedItemPrice.forEach(price => itemsTotal += parseFloat(price));
            console.log("Item total: " + itemsTotal);
        }

        await headerNavComp.cartLink.click();
        await expect(browser).toHaveUrlContaining("checkout");

        //span[text()='Flat Shipping Rate:']/../following-sibling::td
        var tempShippingRate = await CartPage.shippingRate.getText();
        var shippingRate = tempShippingRate.replace('$', '');
        itemsTotal = itemsTotal + parseFloat(shippingRate);
        console.log("Item total + Shipping rate: " + itemsTotal);

        //extract cart total
        var cartTotal = await CartPage.cartTotal.getText();
        cartTotal = cartTotal.replace("$", "");
        expect (itemsTotal).toEqual(parseFloat(cartTotal));
    }
}
export default new SkinCarePage();