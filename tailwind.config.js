/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./.storybook/preview.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["sf-pro", "system-ui", "sans-serif"],
      },
      fontSize: {
        "ios-large-title": ["34px", { lineHeight: "41px" }],
        "ios-title-1": ["28px", { lineHeight: "34px" }],
        "ios-title-2": ["22px", { lineHeight: "28px" }],
        "ios-title-3": ["20px", { lineHeight: "25px" }],
        "ios-headline": ["17px", { lineHeight: "22px", fontWeight: "600" }],
        "ios-body": ["17px", { lineHeight: "22px" }],
        "ios-callout": ["16px", { lineHeight: "21px" }],
        "ios-subhead": ["15px", { lineHeight: "20px" }],
        "ios-footnote": ["13px", { lineHeight: "18px" }],
        "ios-caption-1": ["12px", { lineHeight: "16px" }],
        "ios-caption-2": ["11px", { lineHeight: "13px" }],
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        shimmer: "shimmer 2s infinite",
      },
      colors: {
        ios: {
          red: {
            light: "rgb(255,59,48)",
            dark: "rgb(255,69,58)",
          },
          orange: {
            light: "rgb(255,149,0)",
            dark: "rgb(255,159,10)",
          },
          yellow: {
            light: "rgb(255,204,0)",
            dark: "rgb(255,214,10)",
          },
          green: {
            light: "rgb(52,199,89)",
            dark: "rgb(48,209,88)",
          },
          mint: {
            light: "rgb(0,199,190)",
            dark: "rgb(99,230,226)",
          },
          teal: {
            light: "rgb(48,176,199)",
            dark: "rgb(64,200,224)",
          },
          cyan: {
            light: "rgb(50,173,230)",
            dark: "rgb(100,210,255)",
          },
          blue: {
            light: "rgb(0,122,255)",
            dark: "rgb(10,132,255)",
          },
          indigo: {
            light: "rgb(88,86,214)",
            dark: "rgb(94,92,230)",
          },
          purple: {
            light: "rgb(175,82,222)",
            dark: "rgb(191,90,242)",
          },
          pink: {
            light: "rgb(255,45,85)",
            dark: "rgb(255,55,95)",
          },
          brown: {
            light: "rgb(162,132,94)",
            dark: "rgb(172,142,104)",
          },
          gray: {
            light: "rgb(142,142,147)",
            dark: "rgb(142,142,147)",
          },
          gray2: {
            light: "rgb(174,174,178)",
            dark: "rgb(99,99,102)",
          },
          gray3: {
            light: "rgb(199,199,204)",
            dark: "rgb(72,72,74)",
          },
          gray4: {
            light: "rgb(209,209,214)",
            dark: "rgb(58,58,60)",
          },
          gray5: {
            light: "rgb(229,229,234)",
            dark: "rgb(44,44,46)",
          },
          gray6: {
            light: "rgb(242,242,247)",
            dark: "rgb(28,28,30)",
          },
        },
      },
    },
  },
  plugins: [],
};
