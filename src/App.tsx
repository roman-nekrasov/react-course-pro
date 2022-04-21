import React from "react";

import cn from "classnames";
import s from "./App.module.scss";

const App = () => {
   return (
      <React.StrictMode>
         <div className={cn(s.header, "block")}>
            This component is wrote by my hand, not by create-react-app!
         </div>
      </React.StrictMode>
   );
};

export default App;
