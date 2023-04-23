import { BrowserRouter } from "react-router-dom"
import { DefaultTheme, ThemeProvider } from "styled-components"
import { Header } from "./components/Header"
import { GlobalStyle } from "./styles/global"
import usePersistedState from "./utils/usePersistedState"
import light from "./styles/themes/light"
import dark from "./styles/themes/dark"
import { SideBar } from "./components/SideBar"
import Router from "./routes/router"

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", dark)

  const toogleTheme = () => {
    setTheme(theme.title === "dark" ? light : dark);
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div id="layout">
          <SideBar toogleTheme={toogleTheme} />
          <div id="main">
            <Header />
            <Router />
          </div>
        </div>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
