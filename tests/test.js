const {By, Key,Builder}= require("selenium-webdriver");
require("chromedriver");

test('paginaCorrecta',async()=>{
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://github.com/");

    await driver.findElement(By.partialLinkText("Sign in")).click();

    const sleep = ms => new Promise(r => setTimeout(r, ms));
    await sleep(1000);
   
    expect(await driver.getTitle()).toBe("Sign in to GitHub · GitHub")
})

test('loginIncorrecto',async()=>{
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://github.com/login/");

    await driver.findElement(By.name("login")).sendKeys("Steamcode");
    await driver.findElement(By.name("password")).sendKeys("**********",Key.RETURN);

    expect(await driver.findElement(By.className("flash-close js-flash-close")).isDisplayed()).toBe(true)
})