import fs from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';

async function generateSitemap() {
  const stream = new SitemapStream({
    hostname: 'https://www.example.com', // Substitua pela URL temporária ou genérica
  });

  stream.write({ url: '/', changefreq: 'daily', priority: 0.5 });
  stream.write({ url: '/home', changefreq: 'daily', priority: 1 });
  stream.write({ url: '/sobre/resumo', changefreq: 'daily', priority: 0.5 });
  stream.write({ url: '/sobre/certificados', changefreq: 'daily', priority: 0.5 });
  stream.write({ url: '/sobre/jornada', changefreq: 'daily', priority: 0.5 });
  stream.write({ url: '/projects/bocaboca', changefreq: 'daily', priority: 1 });
  stream.write({ url: '/projects/pinterest', changefreq: 'daily', priority: 0.5 });
  stream.write({ url: '/projects/ecommerce', changefreq: 'daily', priority: 0.5 });
  stream.write({ url: '/projects/blog', changefreq: 'daily', priority: 0.5 });

  stream.end();

  const sitemap = await streamToPromise(stream).then((sm) => sm.toString());

  fs.writeFileSync('./public/sitemap.xml', sitemap);

  console.log('Sitemap gerado com sucesso!');
}

generateSitemap();