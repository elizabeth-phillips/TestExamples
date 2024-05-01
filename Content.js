import React from "react";
import LocaleContext from "./LocaleContext";

const Content = () => {
  return (
    <LocaleContext.Consumer>
      {(context) => <h2>{context.currLocaleObj.content}</h2>}
    </LocaleContext.Consumer>
  );
};

export default Content;
