import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Grid} from '@material-ui/core'
import Chat from './components/Chat'
export const LinkComponent = (props) => {
  return <Link {...props} />;
};

ReactDOM.render(
  
  <React.StrictMode>
    <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justify="center"
>
    <Router>
      <Switch>
          <Route path="/" exact>
            <App/>
          </Route>
          <Route path="/chat" >
            <Chat />
          </Route>
        </Switch>
    </Router>
    </Grid>
    
  </React.StrictMode>,
  document.getElementById('root')
);

