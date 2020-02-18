import React from "react";
import "./scss/main.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routesHome, routesAdmin } from "./routes";

import Home from "./Screens/Home/Index";
import HomeTemplate from './templates/home-template'  
import PageNotFound from './Screens/PageNotFound'

const showMenuHome = routes => {
  if (routes && routes.lenght !== 0) {
    return routes.map((item, index) => {
      return (
        <HomeTemplate
          key={index}
          path={item.path}
          exact={item.exact}
          Component={item.component}
        />
      );
    });
  }
};

function App() {
  return (
    <BrowserRouter>
    <div>
      <Switch>
        {/* <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/list-movie" component={ListMovie} /> */}

        {showMenuHome(routesHome)}
        {/* {showMenuAdmin(routesAdmin)} */}

        {/* <Route path="/admin" component={Admin} /> */}
        {/* luôn để PageNotFound dưới cuối */}
        <Route path="" component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);
  
}

export default App;
