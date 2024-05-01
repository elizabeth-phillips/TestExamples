import React from "react";
import LocaleContext from "./LocaleContext";

const ThemeContainer = () => {
  return (
    <LocaleContext.Consumer>
      {(context) => (
        <div className="haveMargin">
          <label className="labels">{context.currLocaleObj.themeLabel}: </label>
          {context.theme === "light" ? (
            <span>{context.currLocaleObj.light}</span>
          ) : (
            <span>{context.currLocaleObj.dark}</span>
          )}
          <input type="checkbox" onChange={context.updateTheme} />
        </div>
      )}
    </LocaleContext.Consumer>
  );
};

export default ThemeContainer;
