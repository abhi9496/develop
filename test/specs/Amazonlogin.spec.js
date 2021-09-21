describe("open amazon website and login",()=>{
    it("open amazon website",async()=>{
        await browser.url("https://www.amazon.in/");
        await browser.pause(4000);
        await $("#twotabsearchtextbox").setValue("iphone");
        await browser.pause(4000);
        await $("#nav-search-submit-button").click();
    })
})