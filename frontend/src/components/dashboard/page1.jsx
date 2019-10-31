import React from "react";
import { connect } from 'react-redux';
import ImageCard from "../common/imageCard";
import { getAllImagesAction } from '../../redux/action';

class Page1 extends React.Component {

  constructor(props) {
    super(props);
    this.props.getAllImagesAction()
  }

  componentWillMount() {
    this.props.getAllImagesAction()
  }

  renderImageCard=(array=[])=>{
    if(array.length) {
      return array.map(image=>{
        return (
          <ImageCard meta= {image} unfav={false} fav={true}/>
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
    images: state.allImageReducer
   };
};

export default connect(
  mapStateToProps,
  {getAllImagesAction}
)(Page1);
