import React from "react"
import SEO from "../../components/layout/seo"

import BlockImageTextBox from "../../components/blocks/block_image_text_box/block_image_text_box"

// import Layout from "../components/layout"

const WatchRepairsPage = () => {
  return (
    <>
      <SEO
        title="Watch Repairs"
        description="Watch Repairs description"
        // image={product.image[0].url}
      />
      <BlockImageTextBox
        title="Watch Repairs"
        bodyText="<p>Owning a beautifully made time piece is a life-long commitment, and sometimes even the best made watches need to be repaired after accidental damage or because a service has become overdue.</p>"
      />
    </>
  )
}
export default WatchRepairsPage
