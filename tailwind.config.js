/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];
const colorList = ['gray', 'green', 'cyan', 'amber', 'violet', 'blue', 'rose', 'pink', 'teal', "red"];
const uiElements = ['bg', 'selection:bg', 'border', 'text', 'hover:bg', 'hover:border', 'hover:text', 'ring', 'focus:ring'];
// const colorList = ['cyan', 'green', 'amber', 'violet', 'blue', 'rose', 'pink', 'teal', 'red'];

const customColors = {};
for (const color of colorList) {
  customColors[color] = {
    500: colors[color][500],
    600: colors[color][600],
    700: colors[color][700],
  };
}

let customShadows = {};
let shadowNames = [];
let textShadows = {};
let textShadowNames = [];

for (const [name, color] of Object.entries(customColors)) {
  customShadows[`${name}`] = `0px 0px 10px ${color["500"]}`;
  customShadows[`lg-${name}`] = `0px 0px 20px ${color["600"]}`;
  textShadows[`${name}`] = `0px 0px 4px ${color["700"]}`;
  textShadowNames.push(`drop-shadow-${name}`);
  shadowNames.push(`shadow-${name}`);
  shadowNames.push(`shadow-lg-${name}`);
  shadowNames.push(`hover:shadow-${name}`);
}

const safelist = [
  'bg-black',
  'bg-white',
  'transparent',
  'object-cover',
  'object-contain',
  ...shadowNames,
  ...textShadowNames,
  ...shades.flatMap(shade => [
    ...colorList.flatMap(color => [
      ...uiElements.flatMap(element => [
        `${element}-${color}-${shade}`,
      ]),
    ]),
  ]),
];

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
      base: "#ffe6d6",
      base_2: "#ffd6bd",
      base_3: "#F5E7DE",
      accent: "#F2BFA4",
      prim: "#6f37f0",
      ...customColors
    },
    extend: {
      dropShadow: {
       ...textShadows,
      },
      boxShadow: {
        ...customShadows,
      }
    }
  },
  plugins: [],
  safelist,
};