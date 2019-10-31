import React from "react";
import { connect } from 'react-redux';
import ImageCard from "../common/imageCard";
import { getAllImagesAction } from '../../redux/action';

class Landing extends React.Component {

  constructor(props) {
    super(props);
    this.props.getAllImagesAction()
  }

  componentDidUpdate() {}

  renderImageCard=(array=[])=>{
    if(array.length) {
      return array.map(image=>{
        return (
          <ImageCard meta= {image} />
        )
      })
    }
  }

  render() {

    return(
      <div>

        {this.renderImageCard(this.props.images)}

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    images: state.allImageReducer
   };
};

export default connect(
  mapStateToProps,
  {getAllImagesAction}
)(Landing);
