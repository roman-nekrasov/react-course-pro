import React from "react";

import cn from "classnames";
import s from "./App.modules.scss";
import "./custom.css";

const App = () => {
   return (
      <div className={cn(s.header, "block")}>
         This component is wrote by my hand, not by create-react-app!!11!222!333
      </div>
   );
};

export default App;
