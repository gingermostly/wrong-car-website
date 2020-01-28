import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Lyrics from './Lyrics.jsx'; 
import Gigography from './Gigography.jsx';
import Photos from './Photos.jsx';
import Tour from './Tour.jsx';
import Home from './Home.jsx';
import Decoder from './Decoder.jsx';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/lyrics" component={Lyrics} />
      <Route path="/gigography" component={Gigography} />
      <Route path="/photos" component={Photos} />
      <Route path="/tour" component={Tour} />
      <Route path="/decoder" component={Decoder} />
    </Switch>
  </main>
);

export default Main;
