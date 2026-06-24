/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        tertiary: 'rgb(var(--tertiary) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        // Arka planları seçilen temaya göre otomatik değişecek şekilde CSS değişkenine bağladık
        surface: {
          DEFAULT: 'var(--surface-default)',
          bright: 'var(--surface-bright)',
          dim: 'var(--surface-dim)',
        },
        brand: {
          50: '#f0f4f8',
          100: '#dbe3ec',
          200: '#bccbdc',
          300: '#96adca',
          400: '#6a8bb4',
          500: '#486e9b',
          600: '#38567c',
          700: '#2e4564',
          800: '#273951',
          900: '#233245',
          950: '#17202f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      maxWidth: {
        container: '1152px',
      },
    },
  },
  plugins: [],
};