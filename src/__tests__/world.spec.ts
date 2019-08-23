import '@babel/polyfill';

import { hello } from '../hello';

describe('hello', () => {
  it('says hello to a name', async () => {
    expect(hello('world')).toBe('hello world');
    const puppeteer = require('puppeteer');

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.businessinsider.com/conspiracy-web-pages-load-slowly-because-they-make-more-money-that-way-2015-7');
    await page.waitFor(10000);
    await page.screenshot({ path: 'example.png' });
    await page.goto('https://example.com');
    await browser.close();
  }, 50000);
});
