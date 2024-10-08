import { NextResponse } from 'next/server';

export async function GET() {
    const baseUrl = 'https://pixelpulse.by';

    const urls = ['/', '/beginning', '/logs', '/achievements', '/creations', '/games', '/about'];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
          .map(
              (url) => `
        <url>
          <loc>${baseUrl}${url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.8</priority>
        </url>
      `,
          )
          .join('')}
    </urlset>`;

    return new NextResponse(sitemap, {
        status: 200,
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
