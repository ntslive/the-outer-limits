/* global graphql */

import React from 'react';
import ChapterRouter from "../../components/utils/ChapterRouter";

const pageChapterId = 1;

const Apollo18 = props => (
    <main>
        <ChapterRouter chapters={props.data.allDataJson.edges[0].node.chapters} chapterId={pageChapterId} />
    </main>
);

export default Apollo18;

export const pageQuery = graphql`
  query Apollo18Query {
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
              image_bg
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
