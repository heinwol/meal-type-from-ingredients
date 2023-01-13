import { Browser } from 'puppeteer';
import { scraperObject } from './pageScraper.js';

/**
 * @param {Promise<Browser>} browserInstance 
 */
async function scrapeAll(browserInstance){
	// let browser;
	try{
		let browser = await browserInstance;
		await scraperObject.scraper(browser);	
		
	}
	catch(err){
		console.log("Could not resolve the browser instance => ", err);
	}
}

export { scrapeAll };