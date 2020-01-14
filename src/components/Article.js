import React, {Component} from 'react'
import '../stylesheets/article.css'
import Nav from './Nav'

export default class Article extends Component {
  constructor(props){
    super(props)
    this.state ={
      title: "",
      text: [],
      imgUrl: ""
    }
  }
  componentDidMount(){
    let titleFind = this.props.match.params.title
    let articleContent = this.props.stories.find(story => story.title === titleFind)
    console.log('find the match', articleContent)
    if(articleContent){
      this.setState({title: articleContent.title, text: articleContent.text, imgUrl: articleContent.imgUrl})
    }
  }
  render(){
    console.log('Article props', this.state.text)

    return (
      <div>
        <Nav />
        <div className="container-center article">
          <div className="container-content">
            <h1>{this.state.title}</h1>
            <div className="container-center">
              <img src={this.state.imgUrl} alt="article image" className="article-image"></img>
            </div>
            {this.state.text.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            {/* <p>{this.state.text}</p> */}
          </div>
        </div>
      
        {/* <h1>{this.props.match.params}</h1> */}
      </div>
    )
  }
}
