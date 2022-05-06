
import gql from 'graphql-tag';

export default gql`query {
  booksByFeatured(featured: true) {
    id
    title
    author
    image
  }
}`;