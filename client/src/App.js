import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Auth from "./hoc/auth";
import { Layout, Menu } from "antd";

const { Header, Content } = Layout;

function App() {
  return (
    <div>
      {/* <Header style={{ padding: 0, background: "white" }}> */}
      <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Nav 2</Menu.Item>
        <Menu.Item key="3">Nav 3</Menu.Item>
      </Menu>
      {/* </Header> */}

      <Content>
        <Router>
          <Switch>
            <Route exact path="/" component={Auth(LandingPage, null)} />
            <Route exact path="/login" component={Auth(LoginPage, false)} />
            <Route exact path="/register" component={Auth(RegisterPage, false)} />
          </Switch>
        </Router>
      </Content>
    </div>
  );
}

export default App;

/*
    A <Switch> looks through all its children <Route>
    elements and renders the first one whose path
    matches the current URL. Use a <Switch> any time
    you have multiple routes, but you want only one
    of them to render at a time
*/

/* 
  null: any user can access this page.
  true: logged-in-users can view this page.
  false: logged-in-users cannot view this page. 
*/
