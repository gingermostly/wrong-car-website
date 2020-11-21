import gql from 'graphql-tag';

const ARTICLES_QUERY = gql`
query Articles {
    articles {
      title
      content
      image {
        url
      }
      published_at
    }
  }
`;

export default ARTICLES_QUERY