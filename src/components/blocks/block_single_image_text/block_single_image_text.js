import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import GraphImg from "graphcms-image"

import { globalSiteSettings } from "../../../common/globalVars.js"

import {
  Div__SIT,
  Div__SIT__backgroundStrip,
  Img__SIT__img1,
  Div__SIT__textGroup,
} from "./block_single_image_text.styles.js"
import { Styled_SiteContainer } from "../../../styles/commonStyles"

const pageQuery = graphql`
  {
    gcms {
      welcomes {
        heroHeading
        heroSubheading
        firstIntroMessage {
          html
        }
        heroImage {
          id
          url
          handle
          width
          height
        }
        supportingImage {
          id
          url
          handle
          width
          height
        }
      }
    }
  }
`

const Block_single_image_text = () => {
  const {
    gcms: { welcomes },
  } = useStaticQuery(pageQuery)

  return (
    <>
      <Div__SIT>
        <Div__SIT__backgroundStrip>
          <Styled_SiteContainer>
            <Div__SIT__textGroup>
              <h1 className="gsap__title">{welcomes[0].heroSubheading}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: welcomes[0].firstIntroMessage.html,
                }}
              ></div>
            </Div__SIT__textGroup>

            <Img__SIT__img1 className="block_single_parallax_image">
              <GraphImg
                image={welcomes[0].heroImage}
                transforms={["quality=value:80"]}
                maxWidth={577}
                baseURI={globalSiteSettings.graphcmsImageBaseURI}
              />
            </Img__SIT__img1>
          </Styled_SiteContainer>
        </Div__SIT__backgroundStrip>
      </Div__SIT>
    </>
  )
}

export default Block_single_image_text
