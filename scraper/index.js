import { startBrowser } from './modules/browser.js';
import scraperController from './modules/pageController.js';

//Start the browser and create a browser instance
let browserInstance = startBrowser();

// Pass the browser instance to the scraper controller
scraperController.scrapeAll(browserInstance)