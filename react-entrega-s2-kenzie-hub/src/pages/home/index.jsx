import { useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";

function Home({ authenticated }) {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <h1>Kenziehub</h1>
      <button onClick={() => handleNavigation("/signup")}>Signup</button>
      <button onClick={() => handleNavigation("/login")}>Login</button>
    </div>
  );
}

export default Home;
