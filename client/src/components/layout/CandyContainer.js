import React from 'react';
import {buyCandy} from '../../redux';
import {connect} from 'react-redux';

const CandyContainer = props => {
    return (
      <div>
        <h6>Number Of Candy - {props.numOfCandies}</h6>
        <button onClick={props.buyCandy}>Buy</button>
      </div>
    );
}

const mapStateToProps = state => {
  return {
    numOfCandies: state.numOfCandies
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCandy: () => dispatch(buyCandy())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CandyContainer);
