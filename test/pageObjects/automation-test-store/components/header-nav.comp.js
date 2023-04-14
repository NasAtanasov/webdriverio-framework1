class HeaderNavComponent{
    get cartLink() {
        return $(`//span[text()='Cart']`);
    }
    // topNavBarLink(linkText) {
    //     return $$(`//span[contains(text(), '${linkText}')]`);
    // }
}
export default new HeaderNavComponent();