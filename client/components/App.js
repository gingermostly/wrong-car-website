import * as React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

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

const MainContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

class App extends React.Component {
  // unnecessary
  constructor(props) {
    super(props);
  }
  render() {
    return (
      // FYI you can do <>...</> instead of <React.Fragment> if you want
      <React.Fragment>
        <GlobalStyles />
        <MainContainer>
          <Header />
          <Main />
        </MainContainer>
      </React.Fragment>
    );
  }
}

export default App;
