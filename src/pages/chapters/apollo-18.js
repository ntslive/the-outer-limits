/* global graphql */

import React from 'react';
import ChapterRouter from "../../components/utils/ChapterRouter";

const Apollo18 = props => {
    const chapterId = props.location.pathname.split('/')[2];
    return (
        <main>
            <ChapterRouter chapters={props.data.allDataJson.edges[0].node.chapters} chapterId={chapterId} />
        </main>
    );
};

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
              teaserSoundcloudSecretToken
              teaserSoundcloudTrackID
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
