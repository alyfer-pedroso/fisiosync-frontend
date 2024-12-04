/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        theme: {
          "blue-1": "#385CC6",
          "blue-2": "#1F4BFC",
          "blue-3": "#0D006F",
          "gray-1": "#EDEDED",
        },
      },
      fontFamily: {
        "inter-black": "Inter-Black",
        "inter-black-italic": "Inter-BlackItalic",
        "inter-bold": "Inter-Bold",
        "inter-bold-italic": "Inter-BoldItalic",
        "inter-extra-bold": "Inter-ExtraBold",
        "inter-extra-bold-italic": "Inter-ExtraBoldItalic",
        "inter-extra-light": "Inter-ExtraLight",
        "inter-extra-light-italic": "Inter-ExtraLightItalic",
        "inter-italic": "Inter-Italic",
        "inter-light": "Inter-Light",
        "inter-light-italic": "Inter-LightItalic",
        "inter-medium": "Inter-Medium",
        "inter-medium-italic": "Inter-MediumItalic",
        "inter-regular": "Inter-Regular",
        "inter-semi-bold": "Inter-SemiBold",
        "inter-semi-bold-italic": "Inter-SemiBoldItalic",
        "inter-thin": "Inter-Thin",
        "inter-thin-italic": "Inter-ThinItalic",
      },
    },
  },
  plugins: [],
};
