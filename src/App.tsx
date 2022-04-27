import React from "react";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./components/Header";
import routes from "./routes";

import { useRoutes } from "hookrouter";



const App = () => {
   const match = useRoutes(routes)

   return (
      <React.StrictMode>
         {match ? (
         <>
            <Header />
            {match}
         </>
         )  : <NotFound />}
      </React.StrictMode>
   );
};

export default App;
