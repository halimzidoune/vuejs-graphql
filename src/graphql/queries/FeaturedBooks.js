
import gql from 'graphql-tag';

export default gql`query($featured: Boolean!) {
  booksByFeatured(featured: $featured) {
    id
    title
    author
    image
  }
}`;