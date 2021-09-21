describe ("open myntra page and login",()=>{
    it ("myntra website login",async()=>{
   await browser.url("https://www.myntra.com/");
   await browser.pause(4000);
   await $("//a[@data-group='men']").click();
   await browser.pause(3000);
    })
})