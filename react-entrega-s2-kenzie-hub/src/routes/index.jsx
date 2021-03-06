import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Dashboard from "../pages/dashboard";
function Routes() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Kenzie:token"));

    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <Switch>
      <Route exact path="/">
        <Home
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route path="/signup">
        <Signup authenticated={authenticated} />
      </Route>
      <Route path="/login">
        <Login
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route path="/dashboard">
        <Dashboard
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
    </Switch>
  );
}

export default Routes;
