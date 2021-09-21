class Automationpage{
    get tablogin(){return $('//a[@class="login"]')}
    get tabemail(){return $("#email")}
    get tabpasswd(){return $("#passwd")}
}
module.exports = new Automationpage();