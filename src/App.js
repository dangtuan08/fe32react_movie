import React from "react";
import "./scss/main.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routesHome, routesAdmin } from "./routes";

import Home from "./Screens/Home/Index";
import HomeTemplate from './templates/home-template'  
import AdminTemplate from './templates/admin-template'  
import PageNotFound from './Screens/PageNotFound'
import Admin from "./Screens/Admin/LoginAdmin/index";

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

const showMenuAdmin = routes => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (
        <AdminTemplate
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
        {showMenuAdmin(routesAdmin)}
        <Route path="/admin" component={Admin} />
        {/* <Route path="/admin" component={Admin} /> */}
        {/* luôn để PageNotFound dưới cuối */}
        <Route path="" component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);
  
}

export default App;
