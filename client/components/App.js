import * as React from 'react';
import Menu from './Menu.js';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Montserrat|Oswald|Rokkitt');
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    <GlobalStyles />;
    return <Menu />;
  }
}

export default App;
