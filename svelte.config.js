import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = { kit: { adapter: adapter(), paths: { base: '/the-garlic' } } };

export default config;
