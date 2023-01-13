import { scraperObject } from './pageScraper.js';
async function scrapeAll(browserInstance){
	let browser;
	try{
		browser = await browserInstance;
		await scraperObject.scraper(browser);	
		
	}
	catch(err){
		console.log("Could not resolve the browser instance => ", err);
	}
}

export default { scrapeAll };