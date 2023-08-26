import AppRoutes from "./routes.js";
import { ThemeProvider } from "styled-components";
import { theme } from "./style.js";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
