import { Redirect, useHistory } from "react-router-dom";
import { Container, Content } from "./styles";

function Home({ authenticated }) {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Content>
        <div>
          <h1>Kenziehub</h1>
          <button onClick={() => handleNavigation("/signup")}>Signup</button>
          <button onClick={() => handleNavigation("/login")}>Login</button>
        </div>
      </Content>
    </Container>
  );
}

export default Home;
