import { gql } from '@apollo/client';

const GET_HOMEPAGE_DATA = gql`
    query Homepage {
        homepage (where: {slug: "homepage"}) {
            id
            slug
            pageMeta {
                id
                metaDescription
                pageTitle
            }
        }
    }
`

export default GET_HOMEPAGE_DATA;