const { chromium } = require('/tmp/claude-0/-home-user-starter-website-kit-demos/bc3be0d5-e938-5dce-a0ea-7ee7123c99fb/scratchpad/node_modules/playwright-core');
const path = require('path');
const EXE = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const here = '/home/user/starter-website-kit-demos/pcos-planner-assets';

(async () => {
  const browser = await chromium.launch({ executablePath: EXE, args: ['--no-sandbox'] });
  const page = await browser.newPage({ deviceScaleFactor: 2 });
  await page.goto('file://' + path.join(here, 'listing-images.html'), { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  for (let i = 1; i <= 6; i++) {
    const el = await page.$('#s' + i);
    await el.screenshot({ path: path.join(here, `listing-${i}.png`) });
  }
  console.log('listing images done');
  await browser.close();
})();
