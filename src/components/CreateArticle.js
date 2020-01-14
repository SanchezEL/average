import React, { Component } from 'react'
import Nav from './Nav'
import { Redirect } from 'react-router-dom'
import '../stylesheets/createArticle.css'

export default class CreateArticle extends Component {
  constructor(props){
    super(props)
    this.state ={
      title: "",
      text: "",
      imgUrl: "",
      submit: false,
      titleLabelClicked: "",
      textLabelClicked: ""
    }
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addStory({title: this.state.title, text: this.state.text, imgUrl: this.state.imgUrl})
    this.setState({submit: true})
  }
  render() {
    console.log(this.state)
    if(this.state.submit){
      return (
        <Redirect to="/" />
      )
    }else{
      return (
        <div>
          <Nav />
          <div className="container-center create-article">
            <form className="container-content" onSubmit={this.handleSubmit}>
              <label htmlFor="title" className="label"><p  className={this.state.titleLabelClicked}>Your Title</p></label>
              <input required name="title" id="title" value={this.state.title} type="text" onClick={()=> {
                if(this.state.titleLabelClicked === ""){
                  this.setState({titleLabelClicked: "clicked"})
                }
              }}  onChange={(e)=>{this.setState({title: e.target.value})}}></input>
              <label htmlFor="text" id="text-label"><p  className={this.state.textLabelClicked}>Share your story...</p></label>
              <textarea required name="text" id="text" onClick={()=> {
                if(this.state.textLabelClicked === ""){
                  this.setState({textLabelClicked: "clicked"})
                }
              }} onChange={(e)=>{this.setState({text: e.target.value.split('\n')})}}></textarea>
              <input required id="img-url" type="text" placeholder="Enter an image url..." onChange={(e)=>{this.setState({imgUrl: e.target.value})}}></input>
              <button onClick={this.handleSubmit}>Share Your Story</button>
            </form>
          </div>
        </div>
      )
    }
  }
}
