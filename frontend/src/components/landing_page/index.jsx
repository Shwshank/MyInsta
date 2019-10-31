import React from "react";
import { connect } from 'react-redux';
import ImageCard from "../common/imageCard";
import { getAllImagesAction } from '../../redux/action';

class Landing extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllImagesAction()
  }

  renderImageCard=(array=[])=>{
    if(array.length) {
      return array.map(image=>{
        return (
          <ImageCard meta= {image}  unfav={true} fav={true}/>
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
)(Landing);
