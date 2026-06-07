/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ['Space Grotesk', 'sans-serif'],
        yellowTail: ['Yellowtail', 'cursive'],
        inter: ['"Inter"', 'sans-serif'],
      },
      colors: {
        darkBackground: '#1F2937',
        darkBottomBarBackground: '#111827',
        blue: '#188aec',
        fontColor: '#4b5563',
        bottomBarIconBgColor: '#f3f4f6',
        
        // Linear Palette Mapped to CSS vars
        canvas: 'var(--color-onyx-canvas)',
        carbon: 'var(--color-carbon-surface)',
        graphite: 'var(--color-graphite-surface)',
        smoke: 'var(--color-smoke-surface)',
        iron: 'var(--color-iron-surface)',
        ash: 'var(--color-ash-border)',
        ferrite: 'var(--color-ferrite-border)',
        steel: 'var(--color-steel-text)',
        pewter: 'var(--color-pewter-text)',
        fog: 'var(--color-fog-text)',
        mist: 'var(--color-mist-text)',
        chalk: 'var(--color-chalk-border)',
        snow: 'var(--color-snow)',
        void: 'var(--color-void)',
      },
      boxShadow: {
        bottomBarShadow: '-24px 24px 64px rgba(17, 17, 17, 0.11)',
        darkBottomBarShadow: '15px 15px 64px rgba(243, 244, 246, 0.11)',
        projectCardShadow:
          '0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2)',
        darkProjectCardShadow:
          '0 20px 20px rgba(243, 244, 246, 0.11), 0px 0px 50px rgba(243, 244, 246, 0.11)',
      },
      dropShadow: {
        projectCardDropShadow:
          'drop-shadow(12px 12px 32px rgba(17, 17, 17, 0.11))',
        darkProjectCardDropShadow:
          'drop-shadow(12px 12px 32px rgba(243, 244, 246, 0.11))',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
