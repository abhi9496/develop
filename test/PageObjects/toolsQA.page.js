class toolsQAPage{
    get tabElements() { return $("//*[contains(text(),'Elements')]")}
    get tabTextBox() { return $("//span[text()='Text Box']")}
    get setusername() { return $('#userName')}
    get setuserEmail() { return $('#userEmail')}
    get setcurrentAddress() { return $('#currentAddress')} 
    get setpermanentAddress() { return $('#permanentAddress')}
    get atsubmit() { return $('#submit')} 
    get atname() { return $('#name')}
    get atemail() { return $('#email')}
    get atcurrentAddress() { return $('//p[@id="currentAddress"]')}
    get atpermanentAddress() { return $('//p[@id="permanentAddress"]')}
    get radioButton() { return $("//span[text()='Radio Button']")}
    get yesButton() { return $("//input[@id='yesRadio']")}
}
module.exports = new toolsQAPage();