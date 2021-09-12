import React, {useState} from 'react';
import {buyCookie} from '../../redux';
import {connect} from 'react-redux';

const TakeCookiesNumbersToBuy = props => {
  const [cookiesCount, setCookiesCount] = useState(1);
    return (
      <div>
        <h6>Number Of Cookies <span role="img" aria-label="cookies">🍪🍪</span> - {props.numOfCookies}</h6>
        <input type='text' name="cookies-input" onChange={(e) => setCookiesCount(e.target.value)} value={cookiesCount} placeholder='Number Of Cookies To Buy' />
        <button onClick={()=>props.buyCookie(cookiesCount)}>Buy <span role="img" aria-label="cookies">🍪</span></button>
      </div>
    );
}

const mapStateToProps = state => {
  return {
    numOfCookies: state.cookie.numOfCookies
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCookie: cookiesCount => dispatch(buyCookie(cookiesCount))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TakeCookiesNumbersToBuy);
