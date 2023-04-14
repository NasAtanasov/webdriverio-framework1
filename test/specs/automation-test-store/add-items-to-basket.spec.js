import BasePage from "../../pageObjects/automation-test-store/base.page";
import cartPage from "../../pageObjects/automation-test-store/cart.page";
import HomePage from "../../pageObjects/automation-test-store/home.page";
import SkinCarePage from "../../pageObjects/automation-test-store/skincare.page";

describe('add items to basket', () => {

    it("0. add specific 'skincare product' to basket & validate car total", async() => {
        await HomePage.open();

        await HomePage.categoryMenuComponent.categoryMenuLink('Skincare')[1].click();
        
        await SkinCarePage.addSpecificItems_ValidateTotals("Creme Precieuse Nuit 50ml", "Total Moisture Facial Cream");
    });
});
