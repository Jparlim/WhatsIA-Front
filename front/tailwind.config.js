/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backGround: "#F3F3FB",
        whiteFF: "#FFFFFF",
        azulButton: "#0051FF",
        bordas: "#E4E4E4",
        financeiro: {
          saldoAtual: "#C5CAFF",
          entradaMes: "#C5FFD0",
          saidaMes: "#FFEBC5",
          lucro: "#F7C5FF",
          performancePrevisto: "#00FF26",
          performanceReal: "#0051FF"
        },
        movMes: "#2CD932",
        movRedMes: "#D92C2C",
        analiseFechada: "#00FFF2",
        clientes: {
          hoje: "#C5CAFF",
          ultimaSemana: "#CFFFC5",
          ultimoMes: "#FFCCC5",
          ultimoSemestre: "#FFC5F3",
          fechado: "#0051FF",
          Nfechado: "#FF0004"
        },
        visitas: {
          hoje: "#C5CAFF",
          aman: "#CFFFC5"
        }
      }
    },
    fontFamily: {
      "title": ['Roboto', "sans-serif"]
    }
  },
  plugins: [],
}