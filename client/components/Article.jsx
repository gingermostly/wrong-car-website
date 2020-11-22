import React from 'react';
import { withRouter } from "react-router";

class ArticleBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount(){
    console.log(this.props.match.params.id)
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
        return (<div title={entry.title}>
                  <article>
                    <h2>{entry.date}</h2>
                    <h2>{entry.title}</h2>
                    <img src={`http://localhost:1337${entry.image.url}`}/>
                    <p>{entry.content}</p>
                  </article>
                </div>)
      })
  }
}

const Article = withRouter(ArticleBase);
export default Article;