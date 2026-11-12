const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const jobs = [['visual.html', 1120, 600, 2, 'product-visual.png'], ['banner.html', 1672, 940, 2, 'seminar-banner@2x.png'], ['banner.html', 1672, 940, 1, 'seminar-banner.png']];
  for (const [f, w, h, s, out] of jobs) {
    const p = await b.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: s });
    await p.goto('file://' + __dirname + '/' + f); await p.waitForLoadState('networkidle'); await p.evaluate(() => document.fonts.ready);
    await p.screenshot({ path: __dirname + '/' + out }); await p.close();
  }
  await b.close();
})();
