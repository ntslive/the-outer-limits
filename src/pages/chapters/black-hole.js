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
            broadcastDate
            broadcastStartTime
            broadcastEndTime
            content {
              description
              image_bg
              credits {
                title
                names
              }
              qa {
                title
                paragraphs
              }
            }
            gallery {
                title
                description
                credits
                imageUrl
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
