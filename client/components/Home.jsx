import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import moment from 'moment';

const truncateStr = (str, num) => {
  if (str.length <= num) {
    return str
  }
  return str.slice(0, num) + '...'
}

const ArticleLink = styled(Link)`
  display: inline-block;
  border: 0;
  margin-top: 1em;
  color: #c71742;
  font: inherit;
  text-decoration: none;
  position: relative;
  &:hover {
    background: transparent;
    &:after {
      transform: scaleX(1);
    }
  }
  // pseudoclass to generate line beneath links 
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: #c71742;
    transform: scaleX(0);
    transition: transform 400ms ease;
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
            <span>{moment.utc(entry.published_at).format('MMMM Do, YYYY')}</span>
            <div>{truncateStr(entry.content, 200)}</div>
           <ArticleLink to={`/articles/${entry.article_id}`}>read more</ArticleLink>
          </div>
          )
      })
  }
}

export default Home;
