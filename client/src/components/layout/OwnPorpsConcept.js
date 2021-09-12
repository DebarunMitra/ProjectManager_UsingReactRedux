import React from 'react'
import {connect} from 'react-redux'
import {buyCookie, buyCandy} from '../../redux'

const OwnPropsConcept = props => {
    return (
      <div>
        <p>Available {props.name} - {props.item}</p>
        <button name={props.name} onClick={()=>props.buyItem()}>Buy {props.name}</button>
      </div>
    )
}

const mapStateToProps = (state, ownProps) => {

  const itemState = ownProps.candy? state.candy.numOfCandies : state.cookie.numOfCookies
  const itemName = ownProps.candy? "Candy 🍬" : "Cookie 🍪"

  return {
    item: itemState,
    name: itemName
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const dynamicDispatchFunction = ownProps.candy ? () => dispatch(buyCandy()) : () => dispatch(buyCookie())

  return {
    buyItem: dynamicDispatchFunction
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OwnPropsConcept)
