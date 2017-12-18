/* global graphql */

import React from 'react';

import Galaxy from '../components/Galaxy/Galaxy';

const IndexPage = props =>
    (<main>
        <Galaxy chapters={props.data.allDataJson.edges[0].node.chapters} />
        <div className="background-image" />
    </main>);

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allDataJson {
      edges {
        node {
          chapters {
            id
            name
            status
            broadcastDate
            broadcastTime
          }
        }
      }
    }
  }
`;
