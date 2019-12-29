import { graphql, useStaticQuery } from 'gatsby';

interface IImageSharpFixed {
  base64: string;
  tracedSVG: string;
  aspectRatio: string;
  width: string;
  height: string;
  src: string;
  srcSet: string;
  srcWebp: string;
  srcSetWebp: string;
  originalName: string;
}

export const useGetSocialImage = (): IImageSharpFixed => {
  const { file } = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "gatsby-astronaut.png" }) {
          childImageSharp {
            fixed(width: 1200, height: 630) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    `
  );
  return file.childImageSharp.fixed;
};