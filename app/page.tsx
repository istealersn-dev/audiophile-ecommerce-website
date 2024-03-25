import './styles/globals.scss'

const endpoint = process.env.HYGRAPH_ENDPOINT

export default async function Home() {

  const homepage = await getHomePage();
  console.log("Downloaded data:", homepage.components[0].heroImage);

  return (
    <main>
      Welcome to my Channel
    </main>
  )
}

async function getHomePage() {
  if (!endpoint) {
    throw new Error("Endpoint not defined");
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      query Homepage {
        homepage(where: {slug: "homepage"}) {
          components {
            ... on Hero {
              id
              heroImage {
                id
                desktopImage {
                  url
                  width
                  height
                  id
                }
                mobileImage {
                  width
                  url
                  id
                  height
                }
                tabletImage {
                  height
                  id
                  url
                  width
                }
              }
              altText
              description
              heading
              heroButton {
                id
                label
                link
                variant
              }
              overline
            }
          }
          pageMeta {
            id
          }
        }
      }`,
    }),
  });

  const json = await response.json();
  return json.data.homepage;
}
