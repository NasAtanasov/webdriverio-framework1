import BasePage from "./base.page";

class ContactUsPage extends BasePage {
    open()  {
        return super.open("Contact-Us/contactus.html");
    }

    get inputFirstName() {
        return $('//*[@name="first_name"]');
    }

    get inputLastName() {
        return $('//*[@name="last_name"]');
    }

    get inputEmaiLAddress() {
        return $('//*[@name="email"]');
    }

    get inputComments() {
        return $('//*[@name="message"]');
    }

    get submitButton() {
        return $('//input[@value="SUBMIT"]');
    }

    get successfulSubmissionHeader() {
        return $('#contact_reply > h1');
    }

    get unsuccessfulSubmissionHeader() {
        return $('body');
    }

    async submitForm(firstName, lastName, emailAddress, message) {
        await this.inputFirstName.setValue(firstName);
        await this.inputLastName.setValue(lastName);
        await this.inputEmaiLAddress.setValue(emailAddress);
        await this.inputComments.setValue(message);
        await this.submitButton.click();
    }
}
export default new ContactUsPage();