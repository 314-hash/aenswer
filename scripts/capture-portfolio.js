const { execFile } = require('child_process');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outputDir = path.resolve(__dirname, '..', 'public', 'assets', 'portfolio');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const targets = [
  { id: 'exjanai', url: 'https://www.exjanai.com/', file: 'exjanai.png' },
  { id: 'bandiq', url: 'https://bandiq-dapp.vercel.app/', file: 'bandiq.png' },
  { id: 'pisochain', url: 'https://pisochain.com/', file: 'pisochain.png' },
  { id: 'pinoyshop', url: 'https://pinoy-shop-style.vercel.app/', file: 'pinoyshop.png' },
  { id: 'web-rescue', url: 'https://web-rescue-ai.vercel.app/', file: 'web-rescue.png' },
  { id: 'wms', url: 'https://warehouse-management-system-wms.vercel.app/', file: 'wms.png' },
  { id: 'signal-console', url: 'https://admin-blond-seven-66.vercel.app/', file: 'signal-console.png' },
  { id: 'ai-control-center', url: 'https://ai-control-center-three.vercel.app/', file: 'ai-control-center.png' },
  { id: 'pinoy-global', url: 'https://pinoy-global.vercel.app/', file: 'pinoy-global.png' },
  { id: 'finved', url: 'https://finved.vercel.app/', file: 'finved.png' },
  { id: 'pms-enterprise', url: 'https://pms-enterprise.vercel.app/', file: 'pms-enterprise.png' },
  { id: 'titos-pizza', url: 'https://titos-pizza.vercel.app/', file: 'titos-pizza.png' }
];

function capture(target) {
  return new Promise((resolve) => {
    const outFile = path.join(outputDir, target.file);
    console.log(`[START] Capturing ${target.id} (${target.url}) -> ${target.file}...`);
    
    // Use --virtual-time-budget to allow JS frameworks (React, Next.js, Vercel) to settle
    const args = [
      '--headless=new',
      '--disable-gpu',
      '--window-size=1280,800',
      '--hide-scrollbars',
      '--virtual-time-budget=3000',
      `--screenshot=${outFile}`,
      target.url
    ];

    execFile(chromePath, args, { timeout: 20000 }, (err) => {
      if (err) {
        console.warn(`[WARN] Chrome screenshot failed for ${target.id}: ${err.message}`);
      }
      const success = fs.existsSync(outFile) && fs.statSync(outFile).size > 1000;
      console.log(`[DONE] ${target.id}: ${success ? 'OK (' + fs.statSync(outFile).size + ' bytes)' : 'FAILED'}`);
      resolve(success);
    });
  });
}

async function run() {
  console.log('Capturing screenshots for 12 portfolio items...');
  for (const target of targets) {
    await capture(target);
  }

  // Also download the YouTube short thumbnail
  try {
    console.log('Downloading YouTube Shorts thumbnail...');
    const ytThumb = 'https://i.ytimg.com/vi/gLW_HatyeWQ/hqdefault.jpg';
    const res = await fetch(ytThumb);
    if (res.ok) {
      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(path.join(outputDir, 'youtube-short-ad.jpg'), buffer);
      console.log('YouTube thumbnail downloaded successfully!');
    }
  } catch (err) {
    console.warn('Failed to download YouTube thumbnail:', err.message);
  }

  console.log('All portfolio captures completed!');
}

run();
