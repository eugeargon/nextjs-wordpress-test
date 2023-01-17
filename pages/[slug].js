import client from '../apollo-client'
import { gql } from '@apollo/client'

export default function Pages(props) {
  console.log(props);
  return <h1>Template</h1>
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
    {
      pages {
        nodes {
          slug
        }
      }
    }
  `
  });

  return {
    paths: data.pages.nodes.map((node) => ({
      params: {
        slug: node.slug,
      }
    })),
    fallback: false
  };
}

export async function getStaticProps() {
  return {
    props: {}
  }
}
