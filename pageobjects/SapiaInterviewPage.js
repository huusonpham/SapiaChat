const CommonFunctions = require('../utils/commonFunctions')

class SapiaInterviewPage {

    constructor(page)
    {
        this.page = page
        this.randomNumber = CommonFunctions.getRandomNumber()
        this.nameQuestion= page.locator("//*[@data-testid='text-bubble-wrapper']//p[text()='Before we get started, can I get your first name and last name?']");
        this.textBox = page.locator(".DraftEditor-editorContainer div[data-contents='true']")
        this.sendBtn = page.locator("[data-testid='send-circle-button']")
        this.emailQuestion = page.locator("//*[@data-testid='text-bubble']//p[text()='Thanks! And your email?']")
        this.emailTextBox = page.locator("[data-testid='editor-text-area']")
        this.phoneQuestion = page.locator("//*[@data-testid='text-bubble']//p[text()='Great, and your phone number?']")
        this.numberRegion = page.locator('.option-item span')
        this.vietNamRegion = page.locator("//*[@class='rc-virtual-list-holder']//div[text()='Viet Nam +84']")
        this.phoneTextBox = page.locator("[data-testid='text-editor']")
        this.locationQuestion = page.locator("//*[@data-testid='text-bubble']//p[text()='Just one more thing, where do you live?']")
        this.acceptBtn = page.locator("//*[text()='Accept']")
        this.improveDayQuestion = page.locator("//*[@data-testid='text-bubble']//p[contains(.,'make a difference to someone that improved their day?')]")
        this.missDeadlineQuestion = page.locator("//*[@data-testid='text-bubble'][contains(.,'Describe a time when you missed a deadline or personal commitment.')]")
        this.learnThingsQuestion = page.locator("//*[@data-testid='text-bubble']//p[contains(.,'We are always hungry to learn and do things differently.')]")
        this.helpTeamQuestion = page.locator("//*[@data-testid='text-bubble']//p[contains(.,'when you have rolled up your sleeves to help out your team or someone else?')]")
        this.dealDifficultQuestion = page.locator("//*[@data-testid='text-bubble']//p[contains(.,'Have you ever dealt with someone difficult?')]")
        this.identifyQuestion = page.locator("//*[@data-testid='text-bubble']//p[contains(.,'Do you identify as Aboriginal or Torres Strait Islander?')]")
        this.yesOption = page.locator("//*[@data-testid='text-bubble']//div[@id=1]/span[text()='Yes']")
        this.englishLanguageQuestion = page.locator("//*[@data-testid='text-bubble']//p[contains(.,'Is English your second language?')]")
        this.ageGroupQuestion = page.locator("//*[@data-testid='text-bubble']//p[contains(.,'Please select your age group')]")
        this.fiftyFiveAgeGroup = page.locator("//*[@data-testid='text-bubble']//div[@id=4]/span[text()='35-44']")
        this.submitBtn = page.locator("//*[@data-testid='text-bubble']//div[@id=1]/span[text()='SUBMIT']")
        this.rateQuestion = page.locator("//*[@data-testid='text-bubble']//p[text()='Rate your interview experience:']")
        this.slider = page.locator(".slider-box .ant-slider [role='slider']")
        this.submitRatingBtn = page.locator("//*[@class='ant-btn submit-button']/span[text()='SUBMIT RATING']")
        this.shareExperienceQuestion = page.locator("//div[@data-testid='text-bubble-container']//p[contains(.,'share a few comments about your application and first interview experience.')]")
        this.finishTest = page.locator("//*[@data-testid='text-bubble']//p[contains(.,'Your interview is now finished and your answers have been submitted.')]")
        this.errorDialog = page.locator("//div[@role='dialog']//p[text()='You’ve entered less than the recommended ']/strong[text()='50 words']")
        this.continueErrDialogBtn = page.locator("//button[@type='button']/span[text()='Continue']")
        this.editErrDialogBtn = page.locator("//button[@type='button']/span[text()='EDIT']")
    }
    
    async goTo()
    {
        await this.page.goto("https://fi.sandbox.sapia.ai/ap-southeast-2/cohorts/623a9ab72ad0b2561fecc7ae")
        await this.page.waitForLoadState('networkidle')
    }
    
    async inputFullName()
    {
        await this.nameQuestion.waitFor({state: "visible"})
        await this.textBox.type("Automation Test")
        await this.sendBtn.click()
    }

    async inputEmail()
    {
        await this.emailQuestion.waitFor({state: "visible"})
        await this.emailTextBox.type("sonphtest+"+this.randomNumber+"@gmail.com")
        await this.sendBtn.click()
    }

    async inputPhone()
    {
        await this.phoneQuestion.waitFor({state: "visible"})
        await this.numberRegion.click()
        await this.numberRegion.type("Viet")
        await this.vietNamRegion.click()
        await this.phoneTextBox.type(this.randomNumber.toString())
        await this.sendBtn.click()
    }

    async inputLocation(){
        await this.locationQuestion.waitFor({state: "visible"})
        await this.textBox.type("HoChiMinh")
        await this.page.locator('.option-list div').first().click()
    }

    async clickAcceptBtn(){
        await this.acceptBtn.waitFor({state: "visible"})
        await this.acceptBtn.click()
    }

    async inputImproveDayQuestion(words)
    {
        await this.improveDayQuestion.waitFor({state: "visible"})
        await this.textBox.type(CommonFunctions.mergeWords(words))
        await this.sendBtn.click()
    }

    async inputMissDeadlineQuestion(words)
    {
        await this.missDeadlineQuestion.waitFor({state: "visible"})
        await this.textBox.type(CommonFunctions.mergeWords(words))
        await this.sendBtn.click()
    }

    async inputLearnThingsQuestion(words)
    {
        await this.learnThingsQuestion.waitFor({state: "visible"})
        await this.textBox.type(CommonFunctions.mergeWords(words))
        await this.sendBtn.click()
    }

    async inputHelpTeamQuestion(words)
    {
        await this.helpTeamQuestion.waitFor({state: "visible"})
        await this.textBox.type(CommonFunctions.mergeWords(words))
        await this.sendBtn.click()
    }

    async inputDealDifficultQuestion(words)
    {
        await this.dealDifficultQuestion.waitFor({state: "visible"})
        await this.textBox.type(CommonFunctions.mergeWords(words))
        await this.sendBtn.click()
    }

    async inputIdentifyQuestion()
    {
        await this.identifyQuestion.waitFor({state: "visible"})
        await this.yesOption.waitFor({state: "visible"})
        await this.yesOption.click()
    }

    async inputEnglishLanguageQuestion()
    {
        await this.englishLanguageQuestion.waitFor({state: "visible"})
        await this.yesOption.waitFor({state: "visible"})
        await this.yesOption.click()
    }

    async inputAgeGroupQuestion()
    {
        await this.ageGroupQuestion.waitFor({state: "visible"})
        await this.fiftyFiveAgeGroup.waitFor({state: "visible"})
        await this.fiftyFiveAgeGroup.click()
    }

    async clickSubmitBtn(){
        await this.submitBtn.waitFor({state: "visible"})
        await this.submitBtn.click()
    }

    async chooseRateQuestion()
    {
        await this.page.waitForLoadState('networkidle')
        await this.rateQuestion.waitFor({state: "visible"})
        await this.slider.waitFor({state: "visible"})
        await this.submitRatingBtn.waitFor({state: "visible"})
        await this.submitRatingBtn.click()
    }

    async inputShareExperienceQuestion(words)
    {
        await this.shareExperienceQuestion.waitFor({state: "visible"})
        await this.textBox.type(CommonFunctions.mergeWords(words))
        await this.sendBtn.click()
        await this.page.waitForLoadState('networkidle')
        await this.finishTest.waitFor({state: "visible"})
    }

    async verifyErrorDialogAndContinue(){
        await this.errorDialog.waitFor({state: "visible"})
        await this.continueErrDialogBtn.click()
    }

    async verifyErrorDialogAndEdit(){
        await this.errorDialog.waitFor({state: "visible"})
        await this.editErrDialogBtn.click()
    }
    
}

module.exports = {SapiaInterviewPage};