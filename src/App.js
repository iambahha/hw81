import React from 'react';
import {Container} from "reactstrap";
import {Route, Switch} from "react-router-dom";
import ShortUrl from "./containers/ShortUrl";
function App() {
  return (
    <div className="App">
      <Container>
        <Switch>
          <Route path="/" exact component={ShortUrl} />\
        </Switch>
      </Container>

    </div>
  );
}

export default App;
