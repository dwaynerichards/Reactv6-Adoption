import { teal, purple } from "@mui/material/colors";
import { createContext } from "react";

//the second thing in a hook is always a function
//you should provide a default value for typescipt
//default value is only used when componeent doenst have a Context.Provider higher up in tree
const ThemeContext = createContext([teal[200], () => {}]);
export const NiamaContext = createContext([purple[200], function () {}]);

export default ThemeContext;
