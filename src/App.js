import react from "react";
import {Switch,Route} from 'react-router-dom'

// layout
import Layout from "./components/Layout/Layout";
// Pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";





function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/shop">
          <Shop/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
