/* global graphql */

import React from 'react';
import ChapterRouter from "../../components/utils/ChapterRouter";

const AlphaCentauri = props => {
    const chapterId = props.location.pathname.split('/')[2];
    return (
        <main>
            <ChapterRouter chapters={props.data.allDataJson.edges[0].node.chapters} chapterId={chapterId} />
        </main>
    );
};

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
