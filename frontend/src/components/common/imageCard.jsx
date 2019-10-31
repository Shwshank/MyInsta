import React from "react";
import { connect } from 'react-redux';

class ImageCard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: props.meta.name,
      url: props.meta.url,
      _id: props.meta._id,
      favUserIds: props.meta.favUserId,
    }
    console.log(this.props.user);
  }

  favButton=()=>{
    if(this.state.favUserIds.length && this.props.user ) {
      if(this.state.favUserIds.includes(this.props.user._id)) {
        return(
          <div>
           liked by u
          </div>
        )
      } else {
        return(
          <div>
           not liked
          </div>
        )
      }
    } else {
      return(
        <div>
         not liked
        </div>
      )
    }

  }

  renderImage() {
    return(
      <div>
        <img src={this.state.url} alt={"Smiley face"} height={"200"}/>
        <h5>{this.state.name}</h5>
        {this.favButton()}
        <h5>{this.state.favUserIds.length}</h5>
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

const mapStateToProps = state => {
  return {
    user: state.loginReducer
   };
};

export default connect(
  mapStateToProps,{}
)(ImageCard);
