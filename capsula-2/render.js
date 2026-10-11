// Renderiza animacion.html cuadro a cuadro y lo codifica con ffmpeg.
// Uso: node render.js [salida.mp4] [fps]      |  node render.js --preview 1,5,10
const { chromium } = require('playwright');
const { spawn } = require('child_process');
const path = require('path');

(async () => {
  const args = process.argv.slice(2);
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
  await page.goto('file://' + path.join(__dirname, 'animacion.html'));
  await page.evaluate(() => document.fonts.ready);
  await page.waitForLoadState('networkidle');
  const stage = await page.$('#stage');

  if (args[0] === '--preview') {
    for (const t of args[1].split(',').map(Number)) {
      await page.evaluate(t => renderAt(t), t);
      await stage.screenshot({ path: path.join(args[2] || __dirname, `preview_${t}.png`) });
    }
    await browser.close();
    return;
  }

  const out = args[0] || path.join(__dirname, 'animacion.mp4');
  const fps = Number(args[1] || 30);
  const duration = await page.evaluate(() => window.DURATION);
  const ff = spawn('ffmpeg', ['-v', 'error', '-y', '-f', 'image2pipe', '-framerate', String(fps), '-c:v', 'mjpeg', '-i', '-',
    '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-preset', 'medium', '-crf', '18', out], { stdio: ['pipe', 'inherit', 'inherit'] });
  const total = Math.round(duration * fps);
  for (let i = 0; i < total; i++) {
    await page.evaluate(t => renderAt(t), i / fps);
    const buf = await stage.screenshot({ type: 'jpeg', quality: 92 });
    if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
    if (i % 150 === 0) console.log(`cuadro ${i}/${total}`);
  }
  ff.stdin.end();
  await new Promise(r => ff.on('close', r));
  await browser.close();
  console.log('listo:', out);
})();
