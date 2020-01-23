import React, { Fragment } from "react"
import loadingGif from "./LoadingGif.gif"

const Loading = () => {
    return (
  <Fragment>
    <img
      src={loadingGif}
      alt='Loading...'
      style={{ width: "60px", margin: "auto", display: "block" }}
    />
  </Fragment>)
}

export default Loading
