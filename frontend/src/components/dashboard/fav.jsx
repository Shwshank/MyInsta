import React from "react";
import { connect } from 'react-redux';
import ImageCard from "../common/imageCard";
import { getFavImagesAction } from '../../redux/action';

class Fav extends React.Component {

  constructor(props) {
    super(props);
    this.props.getFavImagesAction()
    console.log(this.props.images);
  }

  componentDidUpdate() {
    console.log(this.props.images);
  }

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
    images: state.favImageReducer
   };
};

export default connect(
  mapStateToProps,
  {getFavImagesAction}
)(Fav);
