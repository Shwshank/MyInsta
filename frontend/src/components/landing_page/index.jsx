import React from "react";
import ImageCard from "../common/imageCard";

class Landing extends React.Component {

  renderImageCard(array=[]) {
    if(array.length) {
      return array.map(image=>{
        return (
          <ImageCard meta= {image} />
        )
      })
    }
  }

  render() {
    let imageArray = [
        {
          name:"123",
          url:"https://picsum.photos/id/870/300/200",
          likedby:["123","321"]
        },
        {
          name:"124",
          url:"https://picsum.photos/id/871/300/200",
          likedby:["123","321","320"]
        }
      ]
    return(
      <div>

        {this.renderImageCard(imageArray)}

      </div>
    )
  }
}

export default Landing
