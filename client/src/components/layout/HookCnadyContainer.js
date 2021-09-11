import React from 'react';
import {buyCandy} from '../../redux';
import {useSelector, useDispatch} from 'react-redux';

const HookCandyContainer = props => {
  const numOfCandies =  useSelector(state => state.numOfCandies);
  const dispatch = useDispatch();
    return (
      <div>
        <h6>(*Hook) Number Of Candy - {numOfCandies}</h6>
        <button onClick={()=>dispatch(buyCandy())}>Buy</button>
      </div>
    );
}

export default HookCandyContainer;
