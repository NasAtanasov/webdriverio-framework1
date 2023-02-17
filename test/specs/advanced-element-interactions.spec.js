describe('advanced element interactions - examples', () => {

    beforeEach(async function() {
        await browser.maximizeWindow()
    })

    it('inputs', async() => {
        await browser.url("/Contact-Us/contactus.html");

        const firstNameTextField = $("[name='first_name']");
        const lastNameTextField = $("[name='last_name']");

        //You can also use unicode characters like Left arrow or Back spaces:
        //https://w3c.github.io/webdriver/webdriver-spec.html#keyboard-actions
        //Doesn't Clear element before typing:
        //https://webdriver.io/docs/api/element/addValue
        await firstNameTextField.addValue("Add your text here ");
        await lastNameTextField.addValue("Last name text");
        await firstNameTextField.addValue("My added text");
        //await browser.pause(3000);  
        
        //Send a sequence of key strokes to an element (clears element before typing)
        //Keyword: clears before typing:
        //https://webdriver.io/docs/api/element/setValue
        await firstNameTextField.setValue("Hello, this is SET value ");
        //await browser.pause(3000); 
        
        //Clear a <textarea> or text <input> element's value:
        //https://webdriver.io/docs/api/element/clearValue
        await firstNameTextField.clearValue();
        //await browser.pause(3000);  
    });

    it('dropdowns', async() => {
        await browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");    
        const programmingLanguage_dropDwonList = await $('#dropdowm-menu-1');
        await programmingLanguage_dropDwonList.selectByAttribute('value','python');
        await expect(programmingLanguage_dropDwonList).toHaveValueContaining('python');        
        
        const tech_dropDwonList = await $('#dropdowm-menu-2');
        await tech_dropDwonList.selectByIndex(2);
        await expect(tech_dropDwonList).toHaveValueContaining('TestNG', {ignoreCase: true});     

        const fronendLanguage_dropDwonList = await $('#dropdowm-menu-3');
        await fronendLanguage_dropDwonList.selectByVisibleText('CSS');
        await expect(fronendLanguage_dropDwonList).toHaveValueContaining('CSS', {ignoreCase: true});
        await browser.pause(3000);
        
    });
    it('state commands', async() => {
        await browser.url('/Dropdown-Checkboxes-RadioButtons/index.html');

        const lettuceRadioButton = await $('[value="lettuce"]');
        const lettuceRadioButton_isDisplayed = await lettuceRadioButton.isDisplayed();
        await expect(lettuceRadioButton_isDisplayed).toEqual(true);
        await expect(lettuceRadioButton).toBeEnabled();

        const lettuceRadioButton_isClickable = await lettuceRadioButton.isClickable();
        await expect (lettuceRadioButton_isClickable).toEqual(true);

        const cabbageRadioButton = await $('[value="cabbage"]');
        const cabbageRadioButton_isEnable = await cabbageRadioButton.isEnabled();
        await expect (cabbageRadioButton_isEnable).toEqual(false);
        await expect (cabbageRadioButton).toBeDisabled();
    });

    it.only('actions', async() => {
        await browser.url('/Actions/index.html#');

        //Drag & Drop
        const elem = await $('#draggable');
        const target = await $('#droppable');
        await elem.dragAndDrop(target);
        await browser.pause(1000);

        //Double Click double-click
        const doubleClick_Button = await $('#double-click');
        const doubleClick_Button2 = await $('#double-click');
        await doubleClick_Button.doubleClick();
        await browser.pause(1000);
        await doubleClick_Button2.doubleClick();
        await browser.pause(1000);

        //Mouse Over 
        await $("//button[text()='Hover Over Me First!']").moveTo();
        const firstLink = await $('(//*[text()="Link 1"])[1]');
        await firstLink.waitForClickable();
        await firstLink.click();
        await browser.pause(1000);
    });

});