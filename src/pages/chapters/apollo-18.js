/* global graphql */

import BaseChapter from "../../components/utils/BaseChapter";

export default BaseChapter;

export const pageQuery = graphql`
  query ApolloQuery {
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
              credits {
                title
                names
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
