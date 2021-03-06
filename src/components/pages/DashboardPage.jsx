import React, { Component } from 'react';
import { connect } from 'react-redux';
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';

const DashboardPage = ({ isConfirmed }) => (
  <div>{!isConfirmed && <ConfirmEmailMessage />}</div>
);

function mapStateToProps(state) {
  return {
    isConfirmed: state.user.confirmed
  };
}
export default connect(mapStateToProps)(DashboardPage);
