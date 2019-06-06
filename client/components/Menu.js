import * as React from "react";

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="">home</a>
          </li>
          <li>
            <a href="">tour dates</a>
          </li>
          <li>
            <a href="">gigography</a>
          </li>
          <li>
            <a href="">photos</a>
          </li>
          <li>
            <a href="">lyrics</a>
          </li>
          <li>
            <a href="">decoder ring</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
