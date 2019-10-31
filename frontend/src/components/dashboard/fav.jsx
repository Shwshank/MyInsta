import React from "react";
import { connect } from 'react-redux';
import ImageCard from "../common/imageCard";
import { getFavImagesAction } from '../../redux/action';

class Fav extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getFavImagesAction()
  }

  renderImageCard=(array=[])=>{
    if(array.length) {
      return array.map(image=>{
        return (
          <ImageCard meta= {image}  unfav={true} fav={false}/>
        )
      })
    }
  }

  render() {
    return(
      <div caseName="container-fluid">
        <div className="row">
          {this.renderImageCard(this.props.images)}
        </div>
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
