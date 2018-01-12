/* global graphql */

import BaseChapter from "../../components/utils/BaseChapter";

export default BaseChapter;

export const pageQuery = graphql`
  query Apollo18Query {
    allDataJson {
      edges {
        node {
          chapters {
            id
            name
            broadcastDate
            broadcastStartTime
            broadcastEndTime
            content {
              description
              tracks
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
