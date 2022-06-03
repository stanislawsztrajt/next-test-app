import { gql } from "@apollo/client";

export const GET_POST = gql`
  query ($id: ID!) {
    post(id: $id){
      id
      title
      body
      user {
        name
        email
      }
    }
  }
`

export const GET_POSTS = gql`
  query ($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
        body
      }
    }
  }
`;