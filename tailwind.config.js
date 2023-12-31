/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: ["class"],
   content: [
      "./pages/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./app/**/*.{ts,tsx}",
      "./src/**/*.{ts,tsx}",
   ],
   theme: {
      container: {
         center: true,
         padding: "2rem",
         screens: {
            "2xl": "1400px",
         },
      },
      extend: {
         colors: {
            border: "hsl(var(--border))",
            input: "hsl(var(--input))",
            ring: "hsl(var(--ring))",
            background: "hsl(var(--background))",
            foreground: "hsl(var(--foreground))",
            primary: {
               DEFAULT: "hsl(var(--primary))",
               foreground: "hsl(var(--primary-foreground))",
            },
            secondary: {
               DEFAULT: "hsl(var(--secondary))",
               foreground: "hsl(var(--secondary-foreground))",
            },
            destructive: {
               DEFAULT: "hsl(var(--destructive))",
               foreground: "hsl(var(--destructive-foreground))",
            },
            muted: {
               DEFAULT: "hsl(var(--muted))",
               foreground: "hsl(var(--muted-foreground))",
            },
            accent: {
               DEFAULT: "hsl(var(--accent))",
               foreground: "hsl(var(--accent-foreground))",
            },
            popover: {
               DEFAULT: "hsl(var(--popover))",
               foreground: "hsl(var(--popover-foreground))",
            },
            card: {
               DEFAULT: "hsl(var(--card))",
               foreground: "hsl(var(--card-foreground))",
            },
            "light-blue": "hsl(var(--blue))",
            keyframes: {
               "accordion-down": {
                  from: { height: 0 },
                  to: { height: "var(--radix-accordion-content-height)" },
               },
               "accordion-up": {
                  from: { height: "var(--radix-accordion-content-height)" },
                  to: { height: 0 },
               },
            },
            animation: {
               "accordion-down": "accordion-down 0.2s ease-out",
               "accordion-up": "accordion-up 0.2s ease-out",
            },
         },
         borderRadius: {
            lg: "var(--radius)",
            md: "calc(var(--radius) - 2px)",
            sm: "calc(var(--radius) - 4px)",
         },
         keyframes: {
            "accordion-down": {
               from: { height: 0 },
               to: { height: "var(--radix-accordion-content-height)" },
            },
            "accordion-up": {
               from: { height: "var(--radix-accordion-content-height)" },
               to: { height: 0 },
            },
            expand: {
               from: { width: "0%" },
               to: { width: "100%" },
            },
            enter: {
               "0%": { opacity: "0", marginLeft: "-10%" },
               "100%": { opacity: "1", marginLeft: "0" },
            },
            "pop-in": {
               from: { opacity: "0", marginTop: "10%" },
               to: { opacity: "1", marginTop: "0" },
            },
            "pulse-right": {
               "0%": {
                  marginRight: "0",
               },
               "50%": {
                  marginRight: "5px",
               },
               "100%": {
                  marginRight: "0",
               },
            },
         },
         animation: {
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
            expand: "expand 0.5s ease-out",
            enter: "enter 0.7s linear",
            "pop-in": "pop-in 0.5s ease-out",
            "pulse-right": "pulse-right 0.5s ease infinite",
         },
         boxShadow: {
            left: "-10px 0px 10px 0px hsl(var(--background))",
            right: "10px 0px 10px 0px hsl(var(--background))",
            edge: "inset -10px 0px 10px 0px hsl(var(--background)),inset 10px 0px 10px 0px hsl(var(--background))",
         },
      },
   },
   plugins: [require("tailwindcss-animate")],
};
