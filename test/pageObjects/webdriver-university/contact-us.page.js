import BasePage from "./base.page";

class ContactUsPage extends BasePage {
    open()  {
        return super.open("Contact-Us/contactus.html");
    }
}
export default new ContactUsPage();