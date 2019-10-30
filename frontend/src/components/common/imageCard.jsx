import React from "react";

class ImageCard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: props.meta.name,
      url: props.meta.url,
      likedby: props.meta.likedby
    }
  }

  renderImage() {
    return(
      <div>
        <img src={this.state.url} alt={"Smiley face"} height={"200"}/>
        <h5>{this.state.name}</h5>
        <h5>{this.state.likedby.length}</h5>
      </div>
    )
  }

  render() {
    return(
      <div>
        {this.renderImage()}
      </div>
    )
  }
}

export default ImageCard
