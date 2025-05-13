// generate-sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'node:fs';

const links = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/about-us', changefreq: 'monthly', priority: 0.8 },
  { url: '/game-zone', changefreq: 'weekly', priority: 0.9 },
  { url: '/our-projects', changefreq: 'weekly', priority: 0.7 },
  { url: '/impact', changefreq: 'weekly', priority: 0.6 },
];

const sitemap = new SitemapStream({ hostname: 'https://audemy.org' });
const writeStream = createWriteStream('./public/sitemap.xml');

streamToPromise(sitemap).then(() =>
  console.log('Sitemap generated.')
);

sitemap.pipe(writeStream);
links.forEach(link => sitemap.write(link));
sitemap.end();
