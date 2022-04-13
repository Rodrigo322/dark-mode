import { createContext, useState } from "react";
import ReactSwitch from "react-switch";
import "./App.css";
import { Form } from "./components/From";

type ContextProps = {
  theme: string;
  toggleTheme: () => void;
};

export const ThemeContext = createContext({} as ContextProps);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Form />
        <br />
        <br />
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
