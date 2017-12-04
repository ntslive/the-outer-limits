/* global graphql */

import React from 'react';
import Features from '../components/features';
import HowTo from '../components/how-to';

import Galaxy from '../components/Galaxy/Galaxy';

const IndexPage = props =>
    (<main>
        {/*<Features data={props.data.allDataJson.edges[0].node.features} />*/}
        {/*<HowTo data={props.data.allDataJson.edges[0].node.howTo} />*/}
        <Galaxy chapters={props.data.allDataJson.edges[0].node.chapters} />
        <div className="background-image" />
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
          chapters {
            id
            name
            excerpt
            status
          }
        }
      }
    }
  }
`;
