import * as React from 'react';
import Menu from './Menu.js';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Montserrat|Oswald|Rokkitt');
    background: #000;
    color: #ddd;
    font-family: Monsterrat, sans-serif;
    font-size: 18px;
    line-height: 1.25;
    padding-bottom: 100px;
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <GlobalStyles />
        <Menu />
      </React.Fragment>
    );
  }
}

export default App;
