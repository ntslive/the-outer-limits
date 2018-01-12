/* global graphql */

import BaseChapter from "../../components/utils/BaseChapter";

export default BaseChapter;

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
            broadcastStartTime
            broadcastEndTime
            content {
              excerpt
              teaserSoundcloudSecretToken
              teaserSoundcloudTrackID
              image_bg
              credits {
                title
                names
              }
            }
            audio {
              type
              soundcloudSecretToken
              soundcloudTrackID
            }
          }
        }
      }
    }
  }
`;
