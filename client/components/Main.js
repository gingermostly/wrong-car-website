import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Lyrics from './Lyrics.js';

const Main = () => (
  <main>
    <Switch>
      <Route path="/lyrics" component={Lyrics} />
    </Switch>
  </main>
);

export default Main;
