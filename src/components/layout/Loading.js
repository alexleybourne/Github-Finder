import React, { Fragment } from "react"
import loadingGif from "./LoadingGif.gif"

const Loading = () => {
    return (
  <Fragment>
    <img
      src={loadingGif}
      alt='Loading...'
      style={{ width: "80px", margin: "auto", display: "block", marginTop: "50px", marginBottom: "20px"}}
    />
    <p style={{margin: "auto", display: "block", textAlign: "center", color: "#00aef0", fontWeight: "bold" }}>Loading...</p>
  </Fragment>)
}

export default Loading
