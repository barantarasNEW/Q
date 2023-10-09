import { CssBaseline, ThemeProvider } from "@mui/material";

import theme from "./theme";
import Cards from "./components/Cards";
import Select from "./components/Select";
import Logo from "./components/Logo";
import * as Styled from "./styles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Styled.Main>
          <Styled.Header>
            <Logo />

            <Select />
          </Styled.Header>

          <Cards />
        </Styled.Main>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;

// useEffect(() => {
//   const socket = io("ws://62.113.96.69/api/websocket/v1");

//   socket.on("message", (data) => {
//     console.log("Отримано повідомлення:", JSON.parse(data));
//   });

//   socket.on("connect", () => {
//     console.log("Підключено до сервера Socket.IO");
//   });

//   socket.on("disconnect", () => {
//     console.log("Відключено від сервера Socket.IO");
//   });

//   return () => {
//     socket.disconnect();
//   };
// }, []);
