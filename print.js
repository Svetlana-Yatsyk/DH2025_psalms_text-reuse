const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('file://' + __dirname + '/index.html?print-pdf', {waitUntil: 'networkidle0'});
  await page.pdf({path: 'presentation.pdf', format: 'A4'});
  await browser.close();
})();