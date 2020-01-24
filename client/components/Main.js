import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Lyrics from './Lyrics.js'; // usually these kinds of react component files end in .jsx, you could rename them all
import Gigography from './Gigography.js';
import Photos from './Photos.js';
import Tour from './Tour.js';
import Home from './Home.js';
import Decoder from './Decoder.js';

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
