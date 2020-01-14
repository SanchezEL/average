import React from 'react'
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import {  Link } from "react-router-dom";

export default function ArticleLinks(props) {
  console.log('whats up with Article Links props?',props)
  let useStyles = makeStyles({
    article:{
      width: '150px',
      height: '150px',
      color: 'black',
      backgroundImage: `url(${props.imgUrl})`,
      "&:hover": {
        cursor: 'pointer'
      }
    }
  })
  console.log('Article LINKS props', props)
  const classes = useStyles();

  return (
    <div className={classes.article}>
      <h1>{props.title}</h1>
    </div>
  )
}
