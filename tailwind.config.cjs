/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "./src/**/*.mdx",
    "./src/safelist.txt",
  ],

  theme: {
    // ==========
    // #region Colors
    // ==========
    colors: {
      white: "#FFFFFF",
      black: "#000000",

      gray: {
        25: "#FCFCFD",
        50: "#F9FAFB",
        100: "#F2F4F7",
        200: "#E4E7EC",
        300: "#D0D5DD",
        400: "#98A2B3",
        500: "#667085",
        600: "#475467",
        700: "#344054",
        800: "#1D2939",
        900: "#101828",
      },

      primary: {
        25: "#EEF1FF",
        50: "#E4E7F5",
        100: "#BDC2E5",
        200: "#939DD4",
        300: "#6C7AC4",
        400: "#4F5EB7",
        500: "#3345AC",
        600: "#2E3EA1",
        700: "#273594",
        800: "#202C88",
        900: "#151D72",
      },

      error: {
        25: "#FFFBFA",
        50: "#FEF3F2",
        100: "#FEE4E2",
        200: "#FECDCA",
        300: "#FDA29B",
        400: "#F97066",
        500: "#F04438",
        600: "#D92D20",
        700: "#B42318",
        800: "#912018",
        900: "#7A271A",
      },

      warning: {
        25: "#FFFCF5",
        50: "#FFFAEB",
        100: "#FEF0C7",
        200: "#FEDF89",
        300: "#FEC84B",
        400: "#FDB022",
        500: "#F79009",
        600: "#DC6803",
        700: "#B54708",
        800: "#93370D",
        900: "#7A2E0E",
      },

      success: {
        25: "#F6FEF9",
        50: "#ECFDF3",
        100: "#D1FADF",
        200: "#A6F4C5",
        300: "#6CE9A6",
        400: "#32D583",
        500: "#12B76A",
        600: "#039855",
        700: "#027A48",
        800: "#05603A",
        900: "#054F31",
      },

      blue_gray: {
        25: "#FCFCFD",
        50: "#F8F9FC",
        100: "#EAECF5",
        200: "#C8CCE5",
        300: "#9EA5D1",
        400: "#717BBC",
        500: "#4E5BA6",
        600: "#3E4784",
        700: "#363F72",
        800: "#293056",
        900: "#101323",
      },

      blue_light: {
        25: "#F5FBFF",
        50: "#F0F9FF",
        100: "#E0F2FE",
        200: "#B9E6FE",
        300: "#7CD4FD",
        400: "#36BFFA",
        500: "#0BA5EC",
        600: "#0086C9",
        700: "#026AA2",
        800: "#065986",
        900: "#0B4A6F",
      },

      blue: {
        25: "#F5FAFF",
        50: "#EFF8FF",
        100: "#D1E9FF",
        200: "#B2DDFF",
        300: "#84CAFF",
        400: "#53B1FD",
        500: "#2E90FA",
        600: "#1570EF",
        700: "#175CD3",
        800: "#1849A9",
        900: "#194185",
      },

      indigo: {
        25: "#F5F8FF",
        50: "#EEF4FF",
        100: "#E0EAFF",
        200: "#C7D7FE",
        300: "#A4BCFD",
        400: "#8098F9",
        500: "#6172F3",
        600: "#444CE7",
        700: "#3538CD",
        800: "#2D31A6",
        900: "#2D3282",
      },

      purple: {
        25: "#FAFAFF",
        50: "#F4F3FF",
        100: "#EBE9FE",
        200: "#D9D6FE",
        300: "#BDB4FE",
        400: "#9B8AFB",
        500: "#7A5AF8",
        600: "#6938EF",
        700: "#5925DC",
        800: "#4A1FB8",
        900: "#3E1C96",
      },

      pink: {
        25: "#FEF6FB",
        50: "#FDF2FA",
        100: "#FCE7F6",
        200: "#FCCEEE",
        300: "#FAA7E0",
        400: "#F670C7",
        500: "#EE46BC",
        600: "#DD2590",
        700: "#C11574",
        800: "#9E165F",
        900: "#851651",
      },

      rose: {
        25: "#FFF5F6",
        50: "#FFF1F3",
        100: "#FFE4E8",
        200: "#FECDD6",
        300: "#FEA3B4",
        400: "#FD6F8E",
        500: "#F63D68",
        600: "#E31b54",
        700: "#C01048",
        800: "#A11043",
        900: "#89123E",
      },

      orange: {
        25: "#FFFAF5",
        50: "#FFF6ED",
        100: "#FFEAD5",
        200: "#FDDCAB",
        300: "#FEB273",
        400: "#FD853A",
        500: "#FB6514",
        600: "#EC4A0A",
        700: "#C4320A",
        800: "#9c2a10",
        900: "#7e2410",
      },
    },
    // ==========
    // #endregion
    // ==========

    // ==========
    // #region Shadow
    // ==========
    boxShadow: {
      xs: "0px 1px 2px rgba(16, 24, 40, 0.05)",
      sm: [
        "0px 1px 3px rgba(16, 24, 40, 0.1)",
        "0px 1px 2px rgba(16, 24, 40, 0.06)",
      ],
      md: [
        "0px 4px 8px -2px rgba(16, 24, 40, 0.1)",
        "0px 2px 4px -2px rgba(16, 24, 40, 0.06)",
      ],
      lg: [
        "0px 12px 16px -4px rgba(16, 24, 40, 0.1)",
        "0px 4px 6px -2px rgba(16, 24, 40, 0.05)",
      ],
      xl: [
        "0px 20px 24px -4px rgba(16, 24, 40, 0.1)",
        "0px 8px 8px -4px rgba(16, 24, 40, 0.04)",
      ],
      "2xl": "0px 24px 48px -12px rgba(16, 24, 40, 0.25)",
      "3xl": "0px 32px 64px -12px rgba(16, 24, 40, 0.2)",
    },
    dropShadow: {
      xs: "0px 1px 2px rgba(16, 24, 40, 0.05)",
      sm: [
        "0px 1px 3px rgba(16, 24, 40, 0.1)",
        "0px 1px 2px rgba(16, 24, 40, 0.06)",
      ],
      md: [
        "0px 4px 8px -2px rgba(16, 24, 40, 0.1)",
        "0px 2px 4px -2px rgba(16, 24, 40, 0.06)",
      ],
      lg: [
        "0px 12px 16px -4px rgba(16, 24, 40, 0.1)",
        "0px 4px 6px -2px rgba(16, 24, 40, 0.05)",
      ],
      xl: [
        "0px 20px 24px -4px rgba(16, 24, 40, 0.1)",
        "0px 8px 8px -4px rgba(16, 24, 40, 0.04)",
      ],
      "2xl": "0px 24px 48px -12px rgba(16, 24, 40, 0.25)",
      "3xl": "0px 32px 64px -12px rgba(16, 24, 40, 0.2)",
    },
    // ==========
    // #endregion
    // ==========

    // ==========
    // #region Blur
    // ==========
    blur: {
      sm: "4px",
      md: "8px",
      lg: "12px",
      xl: "20px",
    },
    // ==========
    // #endregion
    // ==========

    // // ==========
    // // #region screen
    // // ==========
    // screens: {
    // 	sm: '640px',
    // 	// => @media (min-width: 640px) { ... }

    // 	md: '768px',
    // 	// => @media (min-width: 768px) { ... }

    // 	lg: '1024px',
    // 	// => @media (min-width: 1024px) { ... }

    // 	xl: '1280px',
    // 	// => @media (min-width: 1280px) { ... }
    // },
    // // ==========
    // // #endregion
    // // ==========

    // // ==========
    // // #region spacing
    // // ==========
    // spacing: {
    // 	1: '4px',
    // 	2: '8px',
    // 	3: '12px',
    // 	4: '16px',
    // 	5: '20px',
    // 	6: '24px',
    // 	7: '28px',
    // 	8: '32px',
    // 	9: '36px',
    // 	10: '40px',
    // 	12: '48px',
    // 	16: '64px',
    // 	20: '80px',
    // 	24: '96px',
    // 	32: '128px',
    // 	40: '160px',
    // 	48: '192px',
    // 	56: '224px',
    // 	64: 'px',
    // },
    // // ==========
    // // #endregion
    // // ==========

    // ==========
    // #region Typography
    // ==========
    fontFamily: {
      body: ["Inter", "sans-serif"],
    },
    fontSize: {
      // display
      "display-2xl": ["4.5rem", { lineHeight: "5.625rem" }],
      "display-xl": ["3.75rem", { lineHeight: "4.625rem" }],
      "display-lg": ["3rem", { lineHeight: "3.75rem" }],
      "display-md": ["2.25rem", { lineHeight: "2.75rem" }],
      "display-sm": ["1.875rem", { lineHeight: "2.375" }],
      "display-xs": ["1.5rem", { lineHeight: "2rem" }],
      // text
      "text-xl": ["1.25rem", { lineHeight: "1.875rem" }],
      "text-lg": ["1.125rem", { lineHeight: "1.75rem" }],
      "text-md": ["1rem", { lineHeight: "1.5rem" }],
      "text-sm": ["0.875rem", { lineHeight: "1.25rem" }],
      "text-xs": ["0.75rem", { lineHeight: "1.125rem" }],
    },
    // ==========
    // #endregion
    // ==========
  },

  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("tailwind-safelist-generator")({
      path: "src/safelist.txt",
      patterns: [
        "fill-{colors}",
        "bg-{colors}",
        "hover:bg-{colors}",
        "text-{colors}",
        "hover:text-{colors}",
        "border-{colors}",
        "outline-{colors}",
        "ring-{colors}",
        "focus-visible:outline-{colors}",
        "focus-visible:ring-{colors}",
        // "border-{borderWidth}",
        // "{screens}:gap-{gap}",
      ],
    }),
  ],
};
