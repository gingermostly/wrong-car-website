import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const truncateStr = (str, num) => {
  if (str.length <= num) {
    return str
  }
  return str.slice(0, num) + '...'
}

const ArticleButton = styled.button`
  background: #c71742;
  border: 0;
  margin-top: 1em;
  padding: 8px;
  border-radius: 2px;
  color: #fff;
  font: inherit;
  a {
    color: #fff;
    font: inherit;
    text-decoration: none;
  }
  a:hover {
    cursor: pointer
  }
`
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
        return (
          <div>
            <h2>{entry.title}</h2>
            <span>{entry.published_at}</span>
            <div>{truncateStr(entry.content, 200)}</div>
              <ArticleButton><Link to={`/articles/${entry.article_id}`}>read more</Link></ArticleButton>   
          </div>
          )
      })
  }
}

export default Home;
