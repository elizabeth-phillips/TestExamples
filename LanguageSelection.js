import React from "react";
import LocaleContext from "./LocaleContext";

const LanguageSelection = () => {
  return (
    <LocaleContext.Consumer>
      {(context) => (
        <div className="haveMargin">
          <label className="labels">{context.currLocaleObj.language} : </label>
          <select
            value={context.currLocaleObj.locale}
            onChange={context.updateCurrLocaleObj}
          >
            <option value="en-US">English</option>
            <option value="fr-FR">French</option>
            <option value="es-ES">Spanish</option>
          </select>
        </div>
      )}
    </LocaleContext.Consumer>
  );
};

export default LanguageSelection;
