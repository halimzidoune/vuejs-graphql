import gql from 'graphql-tag';

export default gql`mutation(
  $title: String!
  $author: String!
  $image: String
  $link: String
  $description: String
  $featured: Boolean
  $category: Int!
) {
  createBook(
    title: $title
    author: $author
    image: $image
    link: $link
    description: $description
    featured: $featured
    category_id: $category
  ) {
    id
    title
  }
}
`;