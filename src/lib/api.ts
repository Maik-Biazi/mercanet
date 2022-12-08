import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`,
  cache: new InMemoryCache(),
});

export async function getFeature() {
  const data = await client.query({
    query: gql`
      query {
        feature {
          title
          subTitle
          titleLink
          urlLink
          Feature {
            id
            icon {
              url
              width
              height
            }
            iconWhite {
              url
              width
              height
            }
            title
            description
            subDescription
          }
          Feature2 {
            id
            title
            description
            subDescription
            icon {
              url
              width
              height
            }
            iconWhite {
              url
              width
              height
            }
          }
        }
      }
    `,
  });
  return data;
}

export async function getIntegrations() {
  const data = await client.query({
    query: gql`
      query {
        integration {
          title
          integrations_items {
            id
            icon {
              url
              width
              height
            }
          }
        }
      }
    `,
  });

  return data;
}

export async function getClients() {
  const data = await client.query({
    query: gql`
      query {
        client {
          title
          clients_items {
            id
            icon {
              width
              height
              url
            }
          }
        }
      }
    `,
  });

  return data;
}
export async function getCase() {
  const data = await client.query({
    query: gql`
      query {
        cases {
          logo {
            url
            width
            height
          }
          description
          clients
          representatives
          depositions {
            image {
              url
              width
              height
            }
            description
            author
            office
          }
        }
      }
    `,
  });

  return data;
}

export async function getInformation() {
  const data = await client.query({
    query: gql`
      query {
        information {
          email
          instagram
          facebook
          linkedin
          linkClient
          phones {
            id
            phone
          }
        }
      }
    `,
  });
  return data;
}

export async function getAbout() {
  const data = await client.query({
    query: gql`
      query {
        about {
          textAbout
          carouselTitle
          carouselText
          imagesCarousel {
            url
          }
        }
      }
    `,
  });
  return data;
}

export async function getSeo(url: string) {
  const data = await client.query({
    query: gql`
      query Seos($where: JSON) {
        seos(where: $where) {
          url
          componentSeo {
            metaTitle
            metaDescription
            shareImage {
              alt
              media {
                url
              }
            }
            keywords
            preventIndexing
          }
        }
      }
    `,
    variables: {
      where: {
        ...(url ? { url } : { url: `/` }),
      },
    },
  });
  return data;
}
