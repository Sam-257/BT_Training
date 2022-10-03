import React from 'react';
import useStyles from './jss';

type Props = {}

const Login = (props: Props) => {
    const classes = useStyles();
  return (
    <div className={classes.contentWrapper}>
        <div className={classes.card}>
            <h1>Login</h1>
        </div>
    </div>
  )
}

export default Login