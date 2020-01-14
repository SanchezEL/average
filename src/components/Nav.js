import React from 'react'
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import {  Link } from "react-router-dom";

export default function Nav(props) {
  console.log('whats up with nav props?',props)
  let useStyles = makeStyles({
    navButton: {
      // background: `linear-gradient(to left bottom , #82ffa1, ${props.styles.buttonColor})`,
      border: 0,
      borderRadius: 3,
      boxShadow: '0 1px 5px 1px rgba(200, 100, 200, .3)',
      // color: `${props.styles.colorPrimary}`,
      height: 40,
      padding: '0 20px',
      display: 'flex',
      justifyContent: 'space-between'
    },
    titleNav:{
      margin: '10px'
    },
    theNav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'palevioletred',
      // background: `${props.styles.colorPrimary}`,
      color: '#ffffff'
    },
    textareaOfNav:{
      // background: `${props.styles.colorPrimary}}`
    },
    navLinks:{
      margin: '10px',
      // width: '200px',
      display: 'flex',
      justifyContent: 'space-between',
    },
    link:{
      color: '#ffffff',
      margin: '20px',
      textDecoration: 'none',
    }
  })
  console.log('nav component props', props)
  const classes = useStyles();

  return (
    <div className={classes.theNav}>
      <div className={classes.titleNav}>
        <h3>Average</h3>
      </div>
      <div className={classes.navLinks}>
        <Link className={classes.link} to="/">Home</Link>
        {/* <Link className={classes.link} to="/article">Article</Link> */}
        <Link className={classes.link} to="/create">Create</Link>
      </div>
    </div>
  )
}
