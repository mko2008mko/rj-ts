import * as React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/head/Head';
import Home from './pages/home'

class App extends React.Component {
  public render() {
    return (
      <div >
         <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Home}></Route>
              {/* <Route path="/detail/:id" component={Detail}></Route>
              <Route path="/login" component={Login} />
              <Route path="/writer" component={Writer} />
              <Route path="/rwriter" component={RecommendWriter} /> */}
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
