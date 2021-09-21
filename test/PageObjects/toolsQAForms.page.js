class toolsQAFormsPage{
    get tableForms() { return $("//*[text()='Forms']")}
    get tablePF() { return $(".element-list.collapse.show")}
    get setfirstname() { return $("#firstName")}
    get setlastname() { return $("#lastName")}
    get setemail() { return $("#userEmail")}
    get setradio() { return $("#gender-radio-1")}
    get setnumber() { return $("#userNumber")}
    get setdob() { return $("#dateOfBirthInput")}
    get setcontainer() { return $("#subjectsContainer")}
    get setsubject() { return $("//div[contains(text(),'commerce')]")}
    get sethobbies() { return $("#hobbies-checkbox-1")}
    get setaddress() { return $("#currentAddress")}
    get setstate() { return $("#react-select-6-input")}
    get setplace() { return $("//div[contains(text(),'Uttar Pradesh')]")}
    get setcity() { return $("#city")}
    get setarea() { return $("//div[contains(text(),'Lucknow')]")}
    get setsubmit() { return $("#submit")}
}
module.exports = new toolsQAFormsPage();