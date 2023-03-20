import BasePage from "./base.page";
import ItemComponent from "../automation-test-store/components/item.comp"

class SkinCarePage extends BasePage {
    get itemComponent() {
        return ItemComponent;
    }
}
export default new SkinCarePage();