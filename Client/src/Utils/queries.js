import { gql } from '@apollo/client';

export const QUERY_CHARITY = gql`
  query charity {
    charity {
      _id
      charityName
      description
      goal
      stripelink
    }
  }
`;

export const QUERY_USER = gql`
  query user {
    user{
      _id
      firstName
      lastName
      email
      password
    }
  }
`;
