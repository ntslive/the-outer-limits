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
