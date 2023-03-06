import { sveltekit } from '@sveltejs/kit/vite';
import UnoCSS from "unocss/vite";
import { extractorSvelte } from '@unocss/core';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    UnoCSS({
      extractors: [extractorSvelte],
    }),
    sveltekit(),
  ],
}

export default config;
