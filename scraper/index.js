import { startBrowser } from './modules/browser.js';
import { scrapeAll } from './modules/pageController.js';

//Start the browser and create a browser instance
let browserInstance = await startBrowser();

// Pass the browser instance to the scraper controller
await scrapeAll(browserInstance);

// console.log(browserInstance.constructor.name);

browserInstance.close();