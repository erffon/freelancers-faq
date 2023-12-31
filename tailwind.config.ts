import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        border: {
          gray: "#c9c9c9",
        },
        bgcolor: {
          gray: {
            light: "#f7f7f9",
            darker: "#f1f1f1",
          },
        },
        gradcolor: {
          orange: "#F96",
          red: "#FF5E62",
        },
        tagcolor: {
          orange: "#FF9966",
        },
        textcolor: {
          paragraph: "#7E7E7E",
          heading: "#2C2C2C",
        },
      },
    },
  },
  plugins: [],
};
export default config;
