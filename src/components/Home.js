import React, { Component } from 'react'
import Nav from './Nav'
import ArticleLinks from './ArticleLinks'
import {  Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import Article from '../containers/Article'

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      clicked: false,
      link: ""
    }
  }
  handleClick(link){
    this.setState({clicked: true, link: `article${link}`})
  }
  render(){
    console.log('what up', this.props)
    if(this.state.clicked){
      return (
        <div>
          <Redirect to={this.state.link}></Redirect>
        </div>
        
      )
    }else{

      return (
        
        <div>
          <Nav />
          {this.props.stories.map((story, index) => {
            var link = `/${story.title}`
            return(
              <div key={index}>
                <div className="articleLinks" onClick={()=>{
                  this.handleClick(link)
                }}>
                  <ArticleLinks title={story.title} imgUrl={story.imgUrl}/>
                </div>
              </div>
            )
          })}
        </div>
      )
    }
  }
}