// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import mdx from '@astrojs/mdx';
import compressor from "astro-compressor";
import playformCompress from '@playform/compress';

import { unified } from '@astrojs/markdown-remark';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
export default defineConfig({
  site:           'https://eurovis27.github.io', 
  base:           '/web', // import.meta.env.BASE_URL
  trailingSlash:  'always',
  integrations: [
    mdx(), 
    playformCompress({
      // if you use tailwind or postcss, your CSS is already minified
      CSS: false,
      // astro already minifies html, but not inlined javascript, so this does have an impact of about ~12% for me.
      HTML: true,
      // images imported as assets are already optimized as webp.
      // if you have images in your /public directory, you may want to compress them with this package.
      Image: true,
      // javascript is already minified by vite; enabling this option only reduces file size by < 1%, so skip.
      JavaScript: false,
      // markup in any imported SVGs needs to be minified to remove comments etc.
      // inline SVGs are treated as HTML and minified as such.
      SVG: true,
    }),
    compressor({ 
      gzip: false, 
      brotli: true,
      fileExtensions: [".css", ".js", ".html", ".xml", ".cjs", ".mjs", ".svg", ".txt"] 
    }),     
  ],
  markdown: {
    processor: unified({
      remarkPlugins: [[remarkToc, { heading: 'contents' }]],
      rehypePlugins: [
        rehypeSlug, 
        [rehypeAutolinkHeadings, { behavior: 'append' }],
        [rehypeExternalLinks,
        {
          target: "\_blank",
          rel: ["noopener", "noreferrer", "external"],
        }]
      ],
    }),
  },
  fonts: [{
    provider: fontProviders.local(),
    name: "SupremeLight",
    cssVariable: "--font-supreme-light",
    options: {
      variants: [{
        src: [
          './src/assets/fonts/Supreme/Supreme-Light.woff2', 
          './src/assets/fonts/Supreme/Supreme-Light.woff', 
          './src/assets/fonts/Supreme/Supreme-Light.ttf'],
        weight:  300,
        style:   'normal',
        display: 'swap'
      },
      {
        src: [
          './src/assets/fonts/Supreme/Supreme-Bold.woff2', 
          './src/assets/fonts/Supreme/Supreme-Bold.woff', 
          './src/assets/fonts/Supreme/Supreme-Bold.ttf'],
        weight:  700,
        style:   'bold',
        display: 'swap'
      }]
    }
  }]
});