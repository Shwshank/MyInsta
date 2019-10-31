import React from "react";
import { connect } from 'react-redux';
import { favImageAction, unfavImageAction } from '../../redux/action';

class ImageCard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: props.meta.name,
      url: props.meta.url,
      _id: props.meta._id,
      favUserId: props.meta.favUserId,
      disablefav: props.fav,
      disableunfav: props.unfav,
    }
  }


  FavButton=()=>{
    this.props.favImageAction(this.state, this.props.user._id)
  }

  unFavButton=()=>{
    this.props.unfavImageAction(this.state, this.props.user._id)
  }

  favController=()=>{
    if(this.state.favUserId.length && this.props.user ) {
      if(this.state.favUserId.includes(this.props.user._id)) {
        return(
          <div>
            <button className="btn btn-warning my-2 my-sm-0" onClick={this.unFavButton} disabled={this.state.disablefav}> {this.state.favUserId.length} </button>
          </div>
        )
      } else {
        return(
          <div>
           <button className="btn btn-primary my-2 my-sm-0" onClick={this.FavButton}  disabled={this.state.disableunfav}> {this.state.favUserId.length} </button>
          </div>
        )
      }
    } else {
      return(
        <div>
         <button className="btn btn-primary my-2 my-sm-0" onClick={this.FavButton} disabled={this.state.disableunfav}> {this.state.favUserId.length} </button>
        </div>
      )
    }

  }

  renderImage() {
    return(
      <div className="col-3 " >
        <img src={this.state.url} alt={"Smiley face"} height={"200"} key={this.state.url}/>
        <h5>{this.state.name}</h5>
        {this.favController()}
      </div>
    )
  }

  render() {
    return(
      <React.Fragment>
        {this.renderImage()}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.loginReducer
   };
};

export default connect(
  mapStateToProps,
  {favImageAction,
  unfavImageAction}
)(ImageCard);
