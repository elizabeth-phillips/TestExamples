import React, { useState } from "react";
import localesData from "./data.json";

import "./styles.css";

import LocaleContext from "./LocaleContext";

import LanguageSelection from "./LanguageSelection";
import ThemeContainer from "./ThemeContainer";
import Content from "./Content";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [currLocaleObj, setCurrLocaleObj] = useState(localesData[0]);

  const updateTheme = (e) =>
    e.target.checked ? setTheme("light") : setTheme("dark");
  const updateCurrLocaleObj = (e) => {
    const newLocale = localesData.filter(
      (loc) => loc.locale === e.target.value
    )[0];
    setCurrLocaleObj(newLocale);
  };
  const localeCodes = localesData.map((data) => data.locale);

  return (
    <div className={`App ${theme}`}>
      <LocaleContext.Provider
        value={{
          theme,
          localeCodes,
          currLocaleObj,
          updateTheme,
          updateCurrLocaleObj
        }}
      >
        <LanguageSelection />
        <ThemeContainer />
        <Content />
      </LocaleContext.Provider>
    </div>
  );
};

export default App;
