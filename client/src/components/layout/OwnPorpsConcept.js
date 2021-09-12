import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const OwnPropsConcept = props => {
    return (
      <div>
        <h6>Available {props.name} - {props.item}</h6>
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

export default connect(mapStateToProps)(OwnPropsConcept)
