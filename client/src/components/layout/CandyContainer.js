import React from 'react';
import {buyCandy} from '../../redux';
import {connect} from 'react-redux';

const CandyContainer = props => {
    return (
      <div>
        <h6>Number Of Candy <span role="img" aria-label="candy">🍬🍬</span> - {props.numOfCandies}</h6>
        <button onClick={props.buyCandy}>Buy <span role="img" aria-label="candy">🍬</span></button>
      </div>
    );
}

const mapStateToProps = state => {
  return {
    numOfCandies: state.candy.numOfCandies
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCandy: () => dispatch(buyCandy())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CandyContainer);
