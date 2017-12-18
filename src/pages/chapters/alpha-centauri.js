/* global graphql */

import React from 'react';
import ChapterRouter from "../../components/utils/ChapterRouter";

const pageChapterId = 0;

const AlphaCentauri = props => (
    <main>
        <ChapterRouter chapters={props.data.allDataJson.edges[0].node.chapters} chapterId={pageChapterId} />
    </main>
);

export default AlphaCentauri;

export const pageQuery = graphql`
  query AlphaQuery {
    allDataJson {
      edges {
        node {
          chapters {
            id
            name
            status
            broadcastDate
            broadcastTime
            content {
              excerpt
              teaserSoundcloudUrl
              credits {
                title
                name
              }
            }
          }
        }
      }
    }
  }
`;
