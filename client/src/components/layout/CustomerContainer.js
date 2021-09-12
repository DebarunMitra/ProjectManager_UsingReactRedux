import React, {useEffect} from 'react';
import {fetchUsers} from '../../redux';
import {connect} from 'react-redux';

const CustomerContainer = ({customerData,fetchUser}) => {

  useEffect(()=>{
    fetchUser();
  }, [])

    return (
      <div>
        <h3>Customers <span role="img" aria-label="customers">👥👥👥👥👥</span></h3>
        {
          customerData.loading?(<p>loading data ...</p>) :
          customerData.error!==''?(<p>{customerData.error}</p>):
          (customerData && customerData.customers && customerData.customers.map(customer=><p key={customer.id}><b>{customer.name}</b></p>))
        }
      </div>
    );
}

const mapStateToProps = state => {
  console.log(state.customers);
  return {
    customerData: state.customers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerContainer);
