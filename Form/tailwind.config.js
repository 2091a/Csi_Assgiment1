/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html","./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
        "100px":"100px",
        "200px":"200px",
        "400px":"400px",
        "500px":"500px",
        "600px":"600px",
        "800px":"800px",
        "1100px":"1100px",
        "1300px": "1300px",
        "1500px":"1500px"
      },
      height:{
        "100px":"100px",
        "200px":"200px",
        "400px":"400px",
        "500px":"500px",
        "600px":"600px",
        "700px":"700px",
        "800px":"800px",
        "1100px":"1100px",
        "1300px": "1300px",
        "1500px":"1500px" 
      },
      screens:{
        "400px":"400px",
        "600px":"600px",
        "700px":"700px",
        "800px":"800px",
        "1100px":"1100px",
        "1300px": "1300px",
        "1500px":"1500px" 
      },
    },
  },
  plugins: [],
}