import styled, { ThemeProvider } from "styled-components"
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { darkTheme, lightTheme } from "./utils/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import VideoPage from "./pages/VideoPage";
import SignIn from "./pages/SignIn";

const Container = styled.div`
  display: flex;
 `
const Main = styled.div`
  flex: 7;
  background-color: ${({theme}) => theme.bg};
  color: ${({theme}) => theme.text};
`
const Wrapper = styled.div`
  padding: 22px 55px;
`


function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar/>
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Homepage/>} />
                  <Route path="signin" element={<SignIn/>} />
                  <Route path="video">
                    <Route path=":id" element={<VideoPage/>} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
