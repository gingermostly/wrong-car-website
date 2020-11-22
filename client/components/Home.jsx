import * as React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount(){
    fetch('http://localhost:1337/blogs')
      .then(res =>{
        return res.json()
      })
      .then((data) => {
          this.setState({
            data: data
        })
      })
    }
  render() {
      return this.state.data.map(entry => {
        return <Link to={`/articles/${entry.article_id}`}><div>{entry.title}</div></Link>
      })
  }
}

export default Home;
