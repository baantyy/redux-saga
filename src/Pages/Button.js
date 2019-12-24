import React, { Fragment } from 'react';
import { ageUp, ageDown } from '../redux/actions';

const Button = props => {
  const { age, dispatch } = props;
  return (
    <Fragment>
      Age: {age}
      <br />
      <button onClick={() => { dispatch(ageUp(1))}}>Age Up</button>
      <button onClick={() => { dispatch(ageDown(1))}}>Age Down</button>
    </Fragment>
  );
}

export default Button;
