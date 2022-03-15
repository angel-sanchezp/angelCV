import { Switch, Route } from "react-router-dom";
import routes from './routes.js'
import { AppHeader } from "./cmps/AppHeader.jsx";
import {Footer} from "./cmps/Footer.jsx"

function App() {
  return (
    <>
      <AppHeader />
      <main className="main-app">
        {/* <HomePage/> */}
        <Switch>
          {routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
        </Switch>
      </main>
      <Footer/>
    </>
  );
}

export default App;