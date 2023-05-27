import { createContext, useContext } from "react";

const ThemeProvider = createContext<string | null | undefined>("");

export default ThemeProvider;