import React from 'react';
import {buyCookie} from '../../redux';
import {connect} from 'react-redux';

const CookieConainer = props => {
    return (
      <div>
        <h6>Number Of Cookies <span role="img" aria-label="cookies">🍪🍪</span> - {props.numOfCookies}</h6>
        <button onClick={props.buyCookie}>Buy <span role="img" aria-label="cookies">🍪</span></button>
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
    buyCookie: () => dispatch(buyCookie())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CookieConainer);
