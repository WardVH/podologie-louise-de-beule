/* global graphql */

import React from 'react';

const IndexPage = props =>
  (<main>
  </main>);

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allDataJson {
      edges {
        node {
          features {
            title
          }
          howTo {
            title
          }
        }
      }
    }
  }
`;
