const puppeteer = require('puppeteer');

// Autoexecuted function, we define it as a expression
(async () => {
    try {
        console.log('Launch browser...');
        const browser = await puppeteer.launch({headless: false}); // Launches browser

        const page = await browser.newPage();
        await page.goto('https://es.wikipedia.org/wiki/Node.js');

        let title1 = await page.evaluate(function () {
            const h1 = document.querySelector('h1');
            return h1.innerText;
        });
        console.log(title1);
        
        console.log('Closing browser...');
        console.log('Browser closed');
    } catch (error) {
        console.error('Personalized Error: ', error);
        browser.close();
    }
})();