import { gql } from "@apollo/client";

export const CREATE_ORDER = gql`
  mutation createOrder($createOrderInput: CreateOrderInput!) {
    createOrder(createOrderInput: $createOrderInput) {
      success
      message
      Order {
        firstName
        lastName
        address
        city
        orderTotal
        products {
          displayPrice
          price
          title
        }
      }
    }
  }
`;