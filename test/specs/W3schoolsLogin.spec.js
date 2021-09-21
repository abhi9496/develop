describe('Open W3 Schools and Login to it', ()=>{
    it('Open w3 schools website',async()=>{
        await browser.url('https://www.w3schools.com/');
        await browser.maximizeWindow();
        await browser.pause(5000);
    });

    it('Clicking on login button', async() =>{
        await $('#w3loginbtn').click();
        await browser.pause(5000);
        await browser.switchToFrame(await $('#launcher'));
        await $('//button[@aria-label="Help"]').click();
        await browser.pause(5000);
    });
});