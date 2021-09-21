describe ("open toolsqa and click checkbox",()=>{
    it("click on checkbox",async()=>{
        await browser.url("https://demoqa.com/");
        await $("//*[text()='Elements']").waitForClickable({ timeout:60000, reverse: false, timeoutMsg: "Elements locator is not displayed", interval:5000 });
        await $("//*[text()='Elements']").click();
        await $("#item-1").click();
        await $(".rct-icon.rct-icon-uncheck").click();
        await browser.pause(5000);
        console.log("abh==========================="+await $("#result").getText())
    })
})