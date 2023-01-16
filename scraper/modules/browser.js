import { launch, Browser } from 'puppeteer';

/**
 * 
 * @returns {Promise<Browser>}
 */
async function startBrowser() {
    // let browser;
    try {
        console.log("Opening the browser......");
        let browser = await launch({
            headless: false,
            args: ["--disable-setuid-sandbox"],
            'ignoreHTTPSErrors': true
        });
        return browser;
    } catch (err) {
        console.log("Could not create a browser instance => : ", err);
    }
}

export { startBrowser };
