import gql from 'graphql-tag';

export default gql`query ($id: ID!) {
    
      book(id: $id) {
          id
          title
          author
          image
          description
          category {
            id
            name
          }
        }
    
  }
`;