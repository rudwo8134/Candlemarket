import react from "react";
import {Switch,Route} from 'react-router-dom'

// layout
import Layout from "./components/Layout/Layout";
// Pages
import Home from "./pages/Home";





function App() {
  return (
    <Layout>
    <Switch>
      <Route path="/">
        <Home/>
      </Route>
    </Switch>
    </Layout>
  );
}

export default App;
