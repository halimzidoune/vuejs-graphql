
import gql from 'graphql-tag';

export default gql`query ($id: ID!) {
    category(id: $id) {
      id
      name
      books {
        id
        title
        author
        image
      }
    }
  }
`;