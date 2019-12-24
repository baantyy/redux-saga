import React from 'react';
import { connect } from 'react-redux';
// import Button from './Pages/Button';
import Splash from './Pages/Splash';

const App = props => {
  return (
    <div className="app">
      <Splash {...props} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(App);
